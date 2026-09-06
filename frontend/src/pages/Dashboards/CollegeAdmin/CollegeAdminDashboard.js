function CollegeAdminDashboard() {
  return (
    <div className="college-dashboard">

      {/* Sidebar */}
      <aside className="college-sidebar">

        <div className="college-logo">
          🔐 SecureExam
        </div>

        <div className="college-role">
          ORGANIZATION ADMIN
        </div>

        <nav className="college-nav">

          <a href="#dashboard" className="active">
            <span>▦</span>
            Dashboard
          </a>

          <a href="#coordinators">
            <span>👥</span>
            Coordinators
          </a>

          <a href="#students">
            <span>🎓</span>
            Students
          </a>

          <a href="#subjects">
            <span>📚</span>
            Subjects
          </a>

          <a href="#examinations">
            <span>📝</span>
            Examinations
          </a>

          <a href="#results">
            <span>📊</span>
            Results
          </a>

          <a href="#settings">
            <span>⚙️</span>
            Settings
          </a>

        </nav>

        <div className="college-logout">
          <a href="/">
            <span>↪</span>
            Logout
          </a>
        </div>

      </aside>

      {/* Main Content */}
      <main className="college-main">

        {/* Top Bar */}
        <header className="college-topbar">

          <div>
            <h2>Organization Dashboard</h2>
            <p>Manage your college examination system</p>
          </div>

          <div className="college-profile">

            <div className="college-notification">
              🔔
            </div>

            <div className="college-avatar">
              O
            </div>

            <div className="college-profile-details">
              <strong>Organization Admin</strong>
              <span>ABC Engineering College</span>
            </div>

          </div>

        </header>

        {/* Welcome Section */}
        <section className="college-welcome">

          <div>
            <p className="college-label">
              ORGANIZATION OVERVIEW
            </p>

            <h1>Welcome back, Admin.</h1>

            <p>
              Manage coordinators, students, and examinations
              from one place.
            </p>
          </div>

          <button className="college-primary-button">
            + Add Coordinator
          </button>

        </section>

        {/* Statistics */}
        <section className="college-statistics">

          <div className="college-stat-card">

            <div className="college-stat-icon">
              👥
            </div>

            <div>
              <p>Coordinators</p>
              <h3>8</h3>
              <span>Active coordinators</span>
            </div>

          </div>

          <div className="college-stat-card">

            <div className="college-stat-icon">
              🎓
            </div>

            <div>
              <p>Students</p>
              <h3>420</h3>
              <span>Registered students</span>
            </div>

          </div>

          <div className="college-stat-card">

            <div className="college-stat-icon">
              📚
            </div>

            <div>
              <p>Subjects</p>
              <h3>24</h3>
              <span>Active subjects</span>
            </div>

          </div>

          <div className="college-stat-card">

            <div className="college-stat-icon">
              📝
            </div>

            <div>
              <p>Examinations</p>
              <h3>32</h3>
              <span>This academic year</span>
            </div>

          </div>

        </section>

        {/* Main Grid */}
        <section className="college-content-grid">

          {/* Coordinators */}
          <div className="college-card">

            <div className="college-card-header">

              <div>
                <h3>Coordinators</h3>
                <p>Manage examination coordinators</p>
              </div>

              <button>View All</button>

            </div>

            <div className="college-user-list">

              <div className="college-user-item">

                <div className="college-user-avatar">
                  P
                </div>

                <div>
                  <strong>Priya Kumar</strong>
                  <p>Computer Science</p>
                </div>

                <span className="college-active-status">
                  Active
                </span>

              </div>

              <div className="college-user-item">

                <div className="college-user-avatar">
                  R
                </div>

                <div>
                  <strong>Rahul Sharma</strong>
                  <p>Information Technology</p>
                </div>

                <span className="college-active-status">
                  Active
                </span>

              </div>

              <div className="college-user-item">

                <div className="college-user-avatar">
                  S
                </div>

                <div>
                  <strong>Sneha Raj</strong>
                  <p>Computer Applications</p>
                </div>

                <span className="college-active-status">
                  Active
                </span>

              </div>

            </div>

          </div>

          {/* Upcoming Examinations */}
          <div className="college-card">

            <div className="college-card-header">

              <div>
                <h3>Upcoming Examinations</h3>
                <p>Scheduled examinations</p>
              </div>

              <button>View All</button>

            </div>

            <div className="college-exam-list">

              <div className="college-exam-item">

                <div className="college-exam-date">
                  <strong>18</strong>
                  <span>JUN</span>
                </div>

                <div>
                  <strong>Data Structures</strong>
                  <p>Semester VI • 120 Students</p>
                </div>

                <span className="college-exam-status">
                  Scheduled
                </span>

              </div>

              <div className="college-exam-item">

                <div className="college-exam-date">
                  <strong>21</strong>
                  <span>JUN</span>
                </div>

                <div>
                  <strong>Database Management</strong>
                  <p>Semester IV • 98 Students</p>
                </div>

                <span className="college-exam-status">
                  Scheduled
                </span>

              </div>

              <div className="college-exam-item">

                <div className="college-exam-date">
                  <strong>25</strong>
                  <span>JUN</span>
                </div>

                <div>
                  <strong>Operating Systems</strong>
                  <p>Semester VI • 115 Students</p>
                </div>

                <span className="college-exam-status">
                  Scheduled
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* Quick Actions */}
        <section className="college-card college-quick-actions-card">

          <div className="college-card-header">

            <div>
              <h3>Quick Actions</h3>
              <p>Common organization controls</p>
            </div>

          </div>

          <div className="college-quick-actions">

            <button>
              <span>👥</span>
              Add Coordinator
            </button>

            <button>
              <span>🎓</span>
              Manage Students
            </button>

            <button>
              <span>📚</span>
              Manage Subjects
            </button>

            <button>
              <span>📊</span>
              View Results
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CollegeAdminDashboard;