import { Link } from "react-router-dom";
import {
  Lock,
  LayoutDashboard,
  FileText,
  ClipboardList,
  GraduationCap,
  Inbox,
  BarChart2,
  ShieldCheck,
  Settings,
  LogOut,
  Bell,
  Link2,
  Cloud,
  Upload,
  FilePlus,
} from "lucide-react";

function CoordinatorDashboard() {
  return (
    <div className="coordinator-dashboard">

      {/* Sidebar */}
      <aside className="coordinator-sidebar">

        <div className="coordinator-logo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Lock size={20} /> SecureExam
        </div>

        <div className="coordinator-role">
          COORDINATOR
        </div>

        <nav className="coordinator-nav">

          <a href="#dashboard" className="active">
            <span><LayoutDashboard size={18} /></span>
            Dashboard
          </a>

          <a href="#question-papers">
            <span><FileText size={18} /></span>
            Question Papers
          </a>

          <a href="#examinations">
            <span><ClipboardList size={18} /></span>
            Examinations
          </a>

          <a href="#students">
            <span><GraduationCap size={18} /></span>
            Students
          </a>

          <a href="#submissions">
            <span><Inbox size={18} /></span>
            Submissions
          </a>

          <a href="#results">
            <span><BarChart2 size={18} /></span>
            Results
          </a>

          <a href="#security">
            <span><ShieldCheck size={18} /></span>
            Security
          </a>

          <a href="#settings">
            <span><Settings size={18} /></span>
            Settings
          </a>

        </nav>

        <div className="coordinator-logout">
          <Link to="/">
            <span><LogOut size={18} /></span>
            Logout
          </Link>
        </div>

      </aside>

      {/* Main Content */}
      <main className="coordinator-main">

        {/* Top Bar */}
        <header className="coordinator-topbar">

          <div>
            <h2>Coordinator Dashboard</h2>
            <p>Manage examinations and question papers</p>
          </div>

          <div className="coordinator-profile">

            <div className="coordinator-notification">
              <Bell size={18} />
            </div>

            <div className="coordinator-avatar">
              C
            </div>

            <div className="coordinator-profile-details">
              <strong>Coordinator</strong>
              <span>Computer Science</span>
            </div>

          </div>

        </header>

        {/* Welcome Section */}
        <section className="coordinator-welcome">

          <div>
            <p className="coordinator-label">
              EXAMINATION MANAGEMENT
            </p>

            <h1>Welcome back, Coordinator.</h1>

            <p>
              Create examinations, securely manage question papers,
              and monitor student submissions.
            </p>
          </div>

          <Link
            to="/coordinator/create-examination"
            className="coordinator-primary-button"
            style={{ textDecoration: "none" }}
          >
            + Create Examination
          </Link>

        </section>

        {/* Statistics */}
        <section className="coordinator-statistics">

          <div className="coordinator-stat-card">

            <div className="coordinator-stat-icon">
              <ClipboardList size={22} color="#2563eb" />
            </div>

            <div>
              <p>Total Examinations</p>
              <h3>18</h3>
              <span>Created examinations</span>
            </div>

          </div>

          <div className="coordinator-stat-card">

            <div className="coordinator-stat-icon">
              <FileText size={22} color="#2563eb" />
            </div>

            <div>
              <p>Question Papers</p>
              <h3>24</h3>
              <span>Secured papers</span>
            </div>

          </div>

          <div className="coordinator-stat-card">

            <div className="coordinator-stat-icon">
              <GraduationCap size={22} color="#2563eb" />
            </div>

            <div>
              <p>Students</p>
              <h3>320</h3>
              <span>Assigned students</span>
            </div>

          </div>

          <div className="coordinator-stat-card">

            <div className="coordinator-stat-icon">
              <Inbox size={22} color="#2563eb" />
            </div>

            <div>
              <p>Submissions</p>
              <h3>286</h3>
              <span>Recent submissions</span>
            </div>

          </div>

        </section>

        {/* Main Grid */}
        <section className="coordinator-content-grid">

          {/* Upcoming Exams */}
          <div className="coordinator-card">

            <div className="coordinator-card-header">

              <div>
                <h3>Upcoming Examinations</h3>
                <p>Your scheduled examinations</p>
              </div>

              <button>View All</button>

            </div>

            <div className="coordinator-exam-list">

              <div className="coordinator-exam-item">

                <div className="coordinator-exam-date">
                  <strong>18</strong>
                  <span>JUN</span>
                </div>

                <div>
                  <strong>Data Structures</strong>
                  <p>Semester VI • 120 Students</p>
                </div>

                <span className="coordinator-exam-status">
                  Scheduled
                </span>

              </div>

              <div className="coordinator-exam-item">

                <div className="coordinator-exam-date">
                  <strong>21</strong>
                  <span>JUN</span>
                </div>

                <div>
                  <strong>Database Management</strong>
                  <p>Semester IV • 98 Students</p>
                </div>

                <span className="coordinator-exam-status">
                  Scheduled
                </span>

              </div>

              <div className="coordinator-exam-item">

                <div className="coordinator-exam-date">
                  <strong>25</strong>
                  <span>JUN</span>
                </div>

                <div>
                  <strong>Operating Systems</strong>
                  <p>Semester VI • 115 Students</p>
                </div>

                <span className="coordinator-exam-status">
                  Scheduled
                </span>

              </div>

            </div>

          </div>

          {/* Question Paper Security */}
          <div className="coordinator-card">

            <div className="coordinator-card-header">

              <div>
                <h3>Question Paper Security</h3>
                <p>Security status of your papers</p>
              </div>

              <span className="coordinator-system-status">
                ● Protected
              </span>

            </div>

            <div className="coordinator-security-list">

              <div className="coordinator-security-item">

                <div>
                  <span><Lock size={18} /></span>
                  <strong>Encryption</strong>
                </div>

                <span className="coordinator-secure">
                  Active
                </span>

              </div>

              <div className="coordinator-security-item">

                <div>
                  <span><Link2 size={18} /></span>
                  <strong>Blockchain</strong>
                </div>

                <span className="coordinator-secure">
                  Verified
                </span>

              </div>

              <div className="coordinator-security-item">

                <div>
                  <span><Cloud size={18} /></span>
                  <strong>IPFS Storage</strong>
                </div>

                <span className="coordinator-secure">
                  Protected
                </span>

              </div>

              <div className="coordinator-security-item">

                <div>
                  <span><ShieldCheck size={18} /></span>
                  <strong>Integrity</strong>
                </div>

                <span className="coordinator-secure">
                  Secure
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* Quick Actions */}
        <section className="coordinator-card coordinator-quick-actions-card">

          <div className="coordinator-card-header">

            <div>
              <h3>Quick Actions</h3>
              <p>Frequently used examination controls</p>
            </div>

          </div>

          <div className="coordinator-quick-actions">

            <button>
              <span><Upload size={16} /></span>
              Upload Question Paper
            </button>

            <Link
              to="/coordinator/create-examination"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <button>
                <span><FilePlus size={16} /></span>
                Create Examination
              </button>
            </Link>

            <button>
              <span><GraduationCap size={16} /></span>
              View Students
            </button>

            <button>
              <span><BarChart2 size={16} /></span>
              View Results
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CoordinatorDashboard;