import React from "react";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const upcomingExams = [
    {
      subject: "Data Structures",
      code: "CS301",
      date: "18 Aug 2026",
      time: "10:00 AM - 11:00 AM",
      duration: "60 Minutes",
      status: "Upcoming",
    },
    {
      subject: "Database Management",
      code: "CS302",
      date: "21 Aug 2026",
      time: "02:00 PM - 03:00 PM",
      duration: "60 Minutes",
      status: "Upcoming",
    },
    {
      subject: "Operating Systems",
      code: "CS303",
      date: "25 Aug 2026",
      time: "10:00 AM - 11:30 AM",
      duration: "90 Minutes",
      status: "Upcoming",
    },
  ];

  const recentResults = [
    {
      subject: "Computer Networks",
      exam: "Internal Assessment 1",
      marks: "42 / 50",
      percentage: "84%",
    },
    {
      subject: "Artificial Intelligence",
      exam: "Model Examination",
      marks: "45 / 50",
      percentage: "90%",
    },
    {
      subject: "Software Engineering",
      exam: "Internal Assessment 1",
      marks: "44 / 50",
      percentage: "88%",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        display: "flex",
        fontFamily: "Arial, sans-serif",
        color: "#1f2937",
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: "245px",
          background: "#111827",
          color: "white",
          padding: "25px 18px",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: "700",
            padding: "0 10px 30px",
            borderBottom: "1px solid #374151",
          }}
        >
          🔐 SecureExam
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "11px",
            color: "#9ca3af",
            fontWeight: "600",
            letterSpacing: "1px",
            padding: "22px 10px 12px",
          }}
        >
          STUDENT
        </div>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          {/* Dashboard */}
          <Link
            to="/student"
            style={{
              textDecoration: "none",
              color: "white",
              background: "#2563eb",
              padding: "12px 14px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              display: "block",
            }}
          >
            🏠 Dashboard
          </Link>

          {/* My Examinations */}
          <Link
            to="/student/examinations"
            style={{
              textDecoration: "none",
              color: "#d1d5db",
              padding: "12px 14px",
              borderRadius: "8px",
              fontSize: "14px",
              display: "block",
            }}
          >
            📝 My Examinations
          </Link>

          {/* Results */}
          <div
            style={{
              padding: "12px 14px",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#d1d5db",
            }}
          >
            📄 Results
          </div>

          {/* Profile */}
          <div
            style={{
              padding: "12px 14px",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#d1d5db",
            }}
          >
            👤 Profile
          </div>

          {/* Settings */}
          <div
            style={{
              padding: "12px 14px",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#d1d5db",
            }}
          >
            ⚙️ Settings
          </div>
        </nav>

        {/* Logout */}
        <div style={{ marginTop: "auto" }}>
          <div
            style={{
              borderTop: "1px solid #374151",
              paddingTop: "20px",
              marginTop: "20px",
            }}
          >
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#fca5a5",
                fontSize: "14px",
                padding: "10px",
                display: "block",
              }}
            >
              🚪 Logout
            </Link>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* TOP BAR */}
        <header
          style={{
            height: "75px",
            background: "white",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 35px",
            boxSizing: "border-box",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "21px",
                color: "#111827",
              }}
            >
              Student Dashboard
            </h2>

            <p
              style={{
                margin: "5px 0 0",
                color: "#6b7280",
                fontSize: "13px",
              }}
            >
              View your examinations, results, and academic progress
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#dbeafe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                color: "#2563eb",
              }}
            >
              PK
            </div>

            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Student
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                Computer Science
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div
          style={{
            padding: "30px 35px",
            boxSizing: "border-box",
          }}
        >
          {/* WELCOME */}
          <section
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "25px 28px",
              border: "1px solid #e5e7eb",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#2563eb",
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              STUDENT PORTAL
            </div>

            <h1
              style={{
                margin: "0 0 8px",
                fontSize: "27px",
                color: "#111827",
              }}
            >
              Welcome back, Student! 👋
            </h1>

            <p
              style={{
                margin: 0,
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              Stay updated with your upcoming examinations and academic
              performance.
            </p>
          </section>

          {/* STATS */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "18px",
              marginBottom: "25px",
            }}
          >
            {/* Upcoming Exams */}
            <div
              style={{
                background: "white",
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  fontSize: "25px",
                  marginBottom: "12px",
                }}
              >
                📝
              </div>

              <div
                style={{
                  color: "#6b7280",
                  fontSize: "13px",
                }}
              >
                Upcoming Exams
              </div>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginTop: "5px",
                  color: "#111827",
                }}
              >
                3
              </div>
            </div>

            {/* Completed Exams */}
            <div
              style={{
                background: "white",
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  fontSize: "25px",
                  marginBottom: "12px",
                }}
              >
                ✅
              </div>

              <div
                style={{
                  color: "#6b7280",
                  fontSize: "13px",
                }}
              >
                Completed Exams
              </div>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginTop: "5px",
                  color: "#111827",
                }}
              >
                12
              </div>
            </div>

            {/* Average Score */}
            <div
              style={{
                background: "white",
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  fontSize: "25px",
                  marginBottom: "12px",
                }}
              >
                🏆
              </div>

              <div
                style={{
                  color: "#6b7280",
                  fontSize: "13px",
                }}
              >
                Average Score
              </div>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginTop: "5px",
                  color: "#111827",
                }}
              >
                87%
              </div>
            </div>

            {/* Exams Passed */}
            <div
              style={{
                background: "white",
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  fontSize: "25px",
                  marginBottom: "12px",
                }}
              >
                📊
              </div>

              <div
                style={{
                  color: "#6b7280",
                  fontSize: "13px",
                }}
              >
                Exams Passed
              </div>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginTop: "5px",
                  color: "#111827",
                }}
              >
                11
              </div>
            </div>
          </section>

          {/* UPCOMING EXAMS + SECURITY */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "20px",
              marginBottom: "25px",
            }}
          >
            {/* Upcoming Exams */}
            <div
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "22px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "17px",
                    }}
                  >
                    Upcoming Examinations
                  </h3>

                  <p
                    style={{
                      margin: "5px 0 0",
                      fontSize: "12px",
                      color: "#6b7280",
                    }}
                  >
                    Your scheduled examinations
                  </p>
                </div>

                <Link
                  to="/student/examinations"
                  style={{
                    textDecoration: "none",
                    color: "#2563eb",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  View All →
                </Link>
              </div>

              {upcomingExams.map((exam, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "9px",
                    padding: "17px",
                    marginBottom:
                      index !== upcomingExams.length - 1 ? "12px" : "0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      {exam.subject}
                    </div>

                    <div
                      style={{
                        color: "#6b7280",
                        fontSize: "12px",
                      }}
                    >
                      {exam.code} • {exam.date} • {exam.time}
                    </div>

                    <div
                      style={{
                        color: "#6b7280",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      Duration: {exam.duration}
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#eff6ff",
                      color: "#2563eb",
                      padding: "6px 10px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {exam.status}
                  </div>
                </div>
              ))}
            </div>

            {/* Security Status */}
            <div
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "22px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 5px",
                  fontSize: "17px",
                }}
              >
                Examination Security
              </h3>

              <p
                style={{
                  margin: "0 0 20px",
                  color: "#6b7280",
                  fontSize: "12px",
                }}
              >
                SecureExam protection status
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                  }}
                >
                  <span>🔐 Secure Authentication</span>

                  <span
                    style={{
                      color: "#16a34a",
                      fontWeight: "600",
                    }}
                  >
                    Active
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                  }}
                >
                  <span>⛓️ Blockchain Verification</span>

                  <span
                    style={{
                      color: "#16a34a",
                      fontWeight: "600",
                    }}
                  >
                    Active
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                  }}
                >
                  <span>🛡️ Question Protection</span>

                  <span
                    style={{
                      color: "#16a34a",
                      fontWeight: "600",
                    }}
                  >
                    Enabled
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                  }}
                >
                  <span>✓ Exam Integrity</span>

                  <span
                    style={{
                      color: "#16a34a",
                      fontWeight: "600",
                    }}
                  >
                    Protected
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* RECENT RESULTS */}
          <section
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "22px",
            }}
          >
            <div
              style={{
                marginBottom: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "17px",
                  }}
                >
                  Recent Results
                </h3>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#6b7280",
                    fontSize: "12px",
                  }}
                >
                  Your latest examination performance
                </p>
              </div>

              <div
                style={{
                  color: "#2563eb",
                  fontSize: "12px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                View Results →
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1.5fr 1fr 1fr",
                background: "#f9fafb",
                padding: "12px 15px",
                borderRadius: "7px",
                fontSize: "11px",
                fontWeight: "700",
                color: "#6b7280",
              }}
            >
              <span>SUBJECT</span>
              <span>EXAMINATION</span>
              <span>MARKS</span>
              <span>SCORE</span>
            </div>

            {recentResults.map((result, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1.5fr 1fr 1fr",
                  padding: "16px 15px",
                  borderBottom:
                    index !== recentResults.length - 1
                      ? "1px solid #f0f0f0"
                      : "none",
                  fontSize: "13px",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {result.subject}
                </span>

                <span
                  style={{
                    color: "#6b7280",
                  }}
                >
                  {result.exam}
                </span>

                <span>{result.marks}</span>

                <span
                  style={{
                    color: "#16a34a",
                    fontWeight: "700",
                  }}
                >
                  {result.percentage}
                </span>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;