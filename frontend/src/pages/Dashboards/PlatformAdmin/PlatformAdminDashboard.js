
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  LayoutDashboard,
  Building2,
  Users,
  GraduationCap,
  FileText,
  ShieldCheck,
  BarChart2,
  Settings,
  LogOut,
  Bell,
  UserPlus,
  FilePlus,
  Link2,
  Cloud,
} from "lucide-react";

function PlatformAdminDashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [examinations, setExaminations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Please log in again.");
        setLoading(false);
        return;
      }

      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [usersResponse, examsResponse] = await Promise.all([
          fetch("http://localhost:5000/api/users", { headers }),
          fetch("http://localhost:5000/api/examinations", { headers }),
        ]);

        const usersData = await usersResponse.json();
        const examsData = await examsResponse.json();

        if (!usersResponse.ok) {
          throw new Error(usersData.message || "Unable to load users.");
        }

        if (!examsResponse.ok) {
          throw new Error(
            examsData.message || "Unable to load examinations."
          );
        }

        setUsers(usersData.users || []);
        setExaminations(examsData.examinations || []);
      } catch (err) {
        setError(err.message || "Unable to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const coordinatorCount = users.filter(
    (user) => user.role === "coordinator"
  ).length;

  const studentCount = users.filter(
    (user) => user.role === "student"
  ).length;

  const collegeCount = users.filter(
    (user) => user.role === "collegeAdmin"
  ).length;

  const statCards = [
    {
      title: "Total Colleges",
      count: collegeCount,
      icon: <Building2 size={22} color="#2563eb" />,
      action: () => navigate("/platform-admin/users"),
    },
    {
      title: "Coordinators",
      count: coordinatorCount,
      icon: <Users size={22} color="#2563eb" />,
      action: () => navigate("/platform-admin/users"),
    },
    {
      title: "Students",
      count: studentCount,
      icon: <GraduationCap size={22} color="#2563eb" />,
      action: () => navigate("/platform-admin/users"),
    },
    {
      title: "Total Exams",
      count: examinations.length,
      icon: <FileText size={22} color="#2563eb" />,
      action: () => navigate("/coordinator"),
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div
          className="admin-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Lock size={20} /> SecureExam
        </div>

        <div className="admin-role">PLATFORM ADMIN</div>

        <nav className="admin-nav">
          <a
            href="/platform-admin"
            className="active"
            onClick={(e) => {
              e.preventDefault();
              navigate("/platform-admin");
            }}
          >
            <span><LayoutDashboard size={18} /></span>
            Dashboard
          </a>

          <a
            href="/platform-admin/users"
            onClick={(e) => {
              e.preventDefault();
              navigate("/platform-admin/users");
            }}
          >
            <span><Building2 size={18} /></span>
            Colleges
          </a>

          <a
            href="/platform-admin/users"
            onClick={(e) => {
              e.preventDefault();
              navigate("/platform-admin/users");
            }}
          >
            <span><Users size={18} /></span>
            Coordinators
          </a>

          <a
            href="/platform-admin/users"
            onClick={(e) => {
              e.preventDefault();
              navigate("/platform-admin/users");
            }}
          >
            <span><GraduationCap size={18} /></span>
            Students
          </a>

          <a
            href="/coordinator"
            onClick={(e) => {
              e.preventDefault();
              navigate("/coordinator");
            }}
          >
            <span><FileText size={18} /></span>
            Examinations
          </a>

          <a href="#security">
            <span><ShieldCheck size={18} /></span>
            Security
          </a>

          <a href="#reports">
            <span><BarChart2 size={18} /></span>
            Reports
          </a>

          <a href="#settings">
            <span><Settings size={18} /></span>
            Settings
          </a>
        </nav>

        <div className="admin-logout">
          <button onClick={handleLogout}>
            <span><LogOut size={18} /></span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <h2>Dashboard</h2>
            <p>Platform overview</p>
          </div>

          <div className="admin-profile">
            <div className="notification">
              <Bell size={18} />
            </div>

            <div className="profile-avatar">A</div>

            <div className="profile-details">
              <strong>Platform Admin</strong>
              <span>Administrator</span>
            </div>
          </div>
        </header>

        {/* Welcome */}
        <section className="admin-welcome">
          <div>
            <p className="admin-label">PLATFORM OVERVIEW</p>
            <h1>Welcome back, Admin.</h1>
            <p>
              Monitor and manage the SecureExam platform from one place.
            </p>
          </div>

          <button
            className="admin-primary-button"
            onClick={() => navigate("/platform-admin/users")}
          >
            + Add College
          </button>
        </section>

        {error && (
          <p role="alert" style={{ color: "red" }}>
            {error}
          </p>
        )}

        {/* Statistics */}
        <section className="admin-statistics">
          {statCards.map((stat) => (
            <button
              type="button"
              className="stat-card"
              key={stat.title}
              onClick={stat.action}
              style={{
                textAlign: "left",
                cursor: "pointer",
                font: "inherit",
              }}
            >
              <div className="stat-icon">{stat.icon}</div>

              <div>
                <p>{stat.title}</p>
                <h3>{loading ? "..." : stat.count}</h3>
                <span className="stat-positive">
                  {loading ? "Loading..." : "Live backend data"}
                </span>
              </div>
            </button>
          ))}
        </section>

        {/* Dashboard Grid */}
        <section className="admin-content-grid">
          <div className="dashboard-card activity-card">
            <div className="card-header">
              <div>
                <h3>Recent Activity</h3>
                <p>Latest database information</p>
              </div>

              <button
                onClick={() => navigate("/platform-admin/users")}
              >
                View Users
              </button>
            </div>

            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">
                  <Building2 size={18} color="#2563eb" />
                </div>
                <div>
                  <strong>Registered users</strong>
                  <p>{users.length} accounts found</p>
                  <span>Current database count</span>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon">
                  <FilePlus size={18} color="#2563eb" />
                </div>
                <div>
                  <strong>Examinations</strong>
                  <p>{examinations.length} examinations found</p>
                  <span>Current database count</span>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon">
                  <UserPlus size={18} color="#2563eb" />
                </div>
                <div>
                  <strong>Coordinators</strong>
                  <p>{coordinatorCount} coordinator accounts</p>
                  <span>Current database count</span>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-icon">
                  <GraduationCap size={18} color="#2563eb" />
                </div>
                <div>
                  <strong>Students</strong>
                  <p>{studentCount} student accounts</p>
                  <span>Current database count</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h3>Platform Security</h3>
                <p>System service status</p>
              </div>
              <span className="system-status">
                ● Backend connected
              </span>
            </div>

            <div className="security-services">
              <div className="service-item">
                <div>
                  <span className="service-icon">
                    <Lock size={18} />
                  </span>
                  <strong>Backend API</strong>
                </div>
                <span className="service-online">
                  {error ? "Check connection" : loading ? "Checking" : "Connected"}
                </span>
              </div>

              <div className="service-item">
                <div>
                  <span className="service-icon">
                    <Cloud size={18} />
                  </span>
                  <strong>MongoDB data</strong>
                </div>
                <span className="service-online">
                  {loading ? "Checking" : error ? "Error" : "Loaded"}
                </span>
              </div>

              <div className="service-item">
                <div>
                  <span className="service-icon">
                    <Link2 size={18} />
                  </span>
                  <strong>Blockchain</strong>
                </div>
                <span className="service-online">
                  Integration pending
                </span>
              </div>

              <div className="service-item">
                <div>
                  <span className="service-icon">
                    <ShieldCheck size={18} />
                  </span>
                  <strong>Encryption / Vault</strong>
                </div>
                <span className="service-online">
                  Integration pending
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="dashboard-card quick-actions-card">
          <div className="card-header">
            <div>
              <h3>Quick Actions</h3>
              <p>Frequently used platform controls</p>
            </div>
          </div>

          <div className="quick-actions">
            <button onClick={() => navigate("/platform-admin/users")}>
              <span><Building2 size={16} /></span>
              Add College
            </button>

            <button onClick={() => navigate("/platform-admin/users")}>
              <span><UserPlus size={16} /></span>
              Add Coordinator
            </button>

            <button onClick={() => navigate("/platform-admin/users")}>
              <span><GraduationCap size={16} /></span>
              Manage Students
            </button>

            <button onClick={() => navigate("/platform-admin/users")}>
              <span><Users size={16} /></span>
              Manage Users
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PlatformAdminDashboard;
