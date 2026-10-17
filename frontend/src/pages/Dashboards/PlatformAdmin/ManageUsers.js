import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, ShieldCheck, LogOut, Pencil, UserCheck,
  UserX, ArrowLeft, Plus, X
} from "lucide-react";
import "./ManageUsers.css";

const API = "http://localhost:5000/api/users";
const emptyForm = { name: "", email: "", password: "", role: "coordinator" };
const roles = {
  collegeAdmin: "College Admin",
  coordinator: "Coordinator",
  student: "Student",
  platformAdmin: "Platform Admin",
};

export default function ManageUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
  const headers = () => ({
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  });

  async function loadUsers() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API, { headers: headers() });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Could not load users.");
      setUsers(data.users || []);
    } catch (err) {
      setError(err.message || "Could not connect to the backend.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadUsers(); }, []);

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const editing = Boolean(editingId);
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        role: form.role,
      };
      if (!editing) payload.password = form.password;

      const res = await fetch(editing ? `${API}/${editingId}` : API, {
        method: editing ? "PUT" : "POST",
        headers: headers(),
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Could not save user.");

      setMessage(editing ? "User updated successfully." : "User created successfully.");
      resetForm();
      await loadUsers();
    } catch (err) {
      setError(err.message || "Could not save user.");
    } finally {
      setSaving(false);
    }
  }

  function startEdit(user) {
    setEditingId(user._id);
    setForm({ name: user.name || "", email: user.email || "", password: "", role: user.role });
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function toggleStatus(user) {
    const action = user.isActive ? "deactivate" : "activate";
    if (!window.confirm(`Are you sure you want to ${action} ${user.name}?`)) return;

    setError("");
    setMessage("");
    try {
      const res = await fetch(`${API}/${user._id}`, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify({ isActive: !user.isActive }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || `Could not ${action} account.`);
      setMessage(`Account ${action}d successfully.`);
      await loadUsers();
    } catch (err) {
      setError(err.message || "Could not update account status.");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  }

  const isCurrentUser = (user) =>
    user._id === (currentUser.id || currentUser._id);

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-logo">SecureExam</div>
        <div className="admin-role">PLATFORM ADMIN</div>
        <nav className="admin-nav">
          <a href="/platform-admin" onClick={(e) => { e.preventDefault(); navigate("/platform-admin"); }}>
            <span><LayoutDashboard size={18} /></span> Dashboard
          </a>
          <a className="active" href="/platform-admin/users">
            <span><Users size={18} /></span> Manage Users
          </a>
        </nav>
        <div className="admin-logout">
          <a href="/login" onClick={(e) => { e.preventDefault(); logout(); }}>
            <span><LogOut size={18} /></span> Logout
          </a>
        </div>
      </aside>

      <main className="admin-main manage-users-main">
        <header className="admin-topbar">
          <div>
            <h2>Manage Users</h2>
            <p>Create and manage SecureExam accounts</p>
          </div>
          <div className="manage-admin-badge"><ShieldCheck size={18} /> Platform Admin</div>
        </header>

        <section className="admin-welcome">
          <div>
            <p className="admin-label">USER MANAGEMENT</p>
            <h1>{editingId ? "Edit User" : "Manage User Accounts"}</h1>
            <p>Create accounts, update user details, and manage access.</p>
          </div>
          <button className="admin-primary-button" onClick={() => {
            resetForm(); setError(""); setMessage("");
            document.getElementById("user-form")?.scrollIntoView({ behavior: "smooth" });
          }}>
            <Plus size={17} /> Add User
          </button>
        </section>

        {error && <p className="manage-alert manage-error" role="alert">{error}</p>}
        {message && <p className="manage-alert manage-success" role="status">{message}</p>}

        <section className="dashboard-card manage-form-card" id="user-form">
          <div className="card-header">
            <div>
              <h3>{editingId ? "Update User Details" : "Create New User"}</h3>
              <p>{editingId ? "Edit the selected account details." : "Enter the details for the new account."}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="manage-form-grid">
              <label>Full name
                <input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </label>
              <label>Email address
                <input name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </label>
              {!editingId && <label>Temporary password
                <input name="password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} minLength={6} autoComplete="new-password" placeholder="At least 6 characters" required />
              </label>}
              <label>User role
                <select name="role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                  {Object.entries(roles).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
            </div>
            <div className="manage-form-actions">
              <button className="admin-primary-button" type="submit" disabled={saving}>
                {saving ? "Saving..." : editingId ? "Save Changes" : "Create User"}
              </button>
              {editingId && <button className="manage-secondary-button" type="button" onClick={resetForm}><X size={16} /> Cancel</button>}
            </div>
          </form>
        </section>

        <section className="dashboard-card manage-table-card">
          <div className="card-header">
            <div>
              <h3>Registered Users</h3>
              <p>{users.length} account{users.length === 1 ? "" : "s"} in the system</p>
            </div>
            <span className="manage-count">{users.length} users</span>
          </div>

          {loading ? <p className="manage-empty">Loading users...</p> : users.length === 0 ? (
            <p className="manage-empty">No users found.</p>
          ) : (
            <div className="manage-table-wrap">
              <table className="manage-table">
                <thead><tr><th>User</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>{users.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <div className="manage-user-cell">
                        <div className="manage-user-avatar">{(user.name || "?").charAt(0).toUpperCase()}</div>
                        <div><strong>{user.name}</strong><span>{user.email}</span></div>
                      </div>
                    </td>
                    <td>{roles[user.role] || user.role}</td>
                    <td><span className={`manage-status ${user.isActive ? "is-active" : "is-inactive"}`}>
                      {user.isActive ? "Active" : "Inactive"}
                    </span></td>
                    <td>
                      <div className="manage-row-actions">
                        <button className="manage-icon-button" title="Edit user" onClick={() => startEdit(user)}><Pencil size={16} /> Edit</button>
                        <button className={`manage-icon-button ${user.isActive ? "danger" : "success"}`} disabled={isCurrentUser(user)} title={isCurrentUser(user) ? "You cannot change your own account status" : ""} onClick={() => toggleStatus(user)}>
                          {user.isActive ? <UserX size={16} /> : <UserCheck size={16} />}
                          {user.isActive ? "Deactivate" : "Activate"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )}
        </section>
        <button className="manage-back-button" onClick={() => navigate("/platform-admin")}><ArrowLeft size={16} /> Back to Dashboard</button>
      </main>
    </div>
  );
}