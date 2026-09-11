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
  return (
    <div className="admin-dashboard">

      {/* Sidebar */}
      <aside className="admin-sidebar">

        <div className="admin-logo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Lock size={20} /> SecureExam
        </div>

        <div className="admin-role">
          PLATFORM ADMIN
        </div>

        <nav className="admin-nav">

          <a href="#dashboard" className="active">
            <span><LayoutDashboard size={18} /></span>
            Dashboard
          </a>

          <a href="#colleges">
            <span><Building2 size={18} /></span>
            Colleges
          </a>

          <a href="#coordinators">
            <span><Users size={18} /></span>
            Coordinators
          </a>

          <a href="#students">
            <span><GraduationCap size={18} /></span>
            Students
          </a>

          <a href="#examinations">
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
          <a href="/">
            <span><LogOut size={18} /></span>
            Logout
          </a>
        </div>

      </aside>

      {/* Main Content */}
      <main className="admin-main">

        {/* Top Bar */}
        <header className="admin-topbar">

          <div>
            <h2>Dashboard</h2>
            <p>Platform overview</p>
          </div>

          <div className="admin-profile">

            <div className="notification">
              <Bell size={18} />
            </div>

            <div className="profile-avatar">
              A
            </div>

            <div className="profile-details">
              <strong>Platform Admin</strong>
              <span>Administrator</span>
            </div>

          </div>

        </header>

        {/* Welcome */}
        <section className="admin-welcome">

          <div>
            <p className="admin-label">
              PLATFORM OVERVIEW
            </p>

            <h1>Welcome back, Admin.</h1>

            <p>
              Monitor and manage the SecureExam platform from one place.
            </p>
          </div>

          <button className="admin-primary-button">
            + Add College
          </button>

        </section>

        {/* Statistics */}
        <section className="admin-statistics">

          <div className="stat-card">

            <div className="stat-icon">
              <Building2 size={22} color="#2563eb" />
            </div>

            <div>
              <p>Total Colleges</p>
              <h3>12</h3>
              <span className="stat-positive">
                ↑ 8% this month
              </span>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon">
              <Users size={22} color="#2563eb" />
            </div>

            <div>
              <p>Coordinators</p>
              <h3>48</h3>
              <span className="stat-positive">
                ↑ 12% this month
              </span>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon">
              <GraduationCap size={22} color="#2563eb" />
            </div>

            <div>
              <p>Students</p>
              <h3>1,248</h3>
              <span className="stat-positive">
                ↑ 15% this month
              </span>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon">
              <FileText size={22} color="#2563eb" />
            </div>

            <div>
              <p>Total Exams</p>
              <h3>86</h3>
              <span className="stat-positive">
                ↑ 10% this month
              </span>
            </div>

          </div>

        </section>

        {/* Main Dashboard Grid */}
        <section className="admin-content-grid">

          {/* Recent Activity */}
          <div className="dashboard-card activity-card">

            <div className="card-header">

              <div>
                <h3>Recent Activity</h3>
                <p>Latest platform activities</p>
              </div>

              <button>View All</button>

            </div>

            <div className="activity-list">

              <div className="activity-item">

                <div className="activity-icon">
                  <Building2 size={18} color="#2563eb" />
                </div>

                <div>
                  <strong>New college registered</strong>
                  <p>ABC Engineering College</p>
                  <span>10 minutes ago</span>
                </div>

              </div>

              <div className="activity-item">

                <div className="activity-icon">
                  <UserPlus size={18} color="#2563eb" />
                </div>

                <div>
                  <strong>Coordinator account created</strong>
                  <p>Coordinator added to XYZ College</p>
                  <span>1 hour ago</span>
                </div>

              </div>

              <div className="activity-item">

                <div className="activity-icon">
                  <FilePlus size={18} color="#2563eb" />
                </div>

                <div>
                  <strong>New examination created</strong>
                  <p>Computer Science - Semester VI</p>
                  <span>3 hours ago</span>
                </div>

              </div>

              <div className="activity-item">

                <div className="activity-icon">
                  <GraduationCap size={18} color="#2563eb" />
                </div>

                <div>
                  <strong>Students registered</strong>
                  <p>42 new student accounts</p>
                  <span>Yesterday</span>
                </div>

              </div>

            </div>

          </div>

          {/* Platform Security */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <h3>Platform Security</h3>
                <p>System service status</p>
              </div>

              <span className="system-status">
                ● Operational
              </span>

            </div>

            <div className="security-services">

              <div className="service-item">
                <div>
                  <span className="service-icon"><Link2 size={18} /></span>
                  <strong>Blockchain</strong>
                </div>

                <span className="service-online">
                  Online
                </span>
              </div>

              <div className="service-item">
                <div>
                  <span className="service-icon"><Cloud size={18} /></span>
                  <strong>IPFS Storage</strong>
                </div>

                <span className="service-online">
                  Online
                </span>
              </div>

              <div className="service-item">
                <div>
                  <span className="service-icon"><Lock size={18} /></span>
                  <strong>Encryption</strong>
                </div>

                <span className="service-online">
                  Active
                </span>
              </div>

              <div className="service-item">
                <div>
                  <span className="service-icon"><ShieldCheck size={18} /></span>
                  <strong>Key Management</strong>
                </div>

                <span className="service-online">
                  Protected
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

            <button>
              <span><Building2 size={16} /></span>
              Add College
            </button>

            <button>
              <span><UserPlus size={16} /></span>
              Add Coordinator
            </button>

            <button>
              <span><GraduationCap size={16} /></span>
              Manage Students
            </button>

            <button>
              <span><BarChart2 size={16} /></span>
              View Reports
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default PlatformAdminDashboard;