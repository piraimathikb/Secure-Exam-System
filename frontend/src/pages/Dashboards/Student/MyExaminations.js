import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MyExaminations() {
  const navigate = useNavigate();

  const upcomingExams = [
    {
      subject: "Data Structures",
      code: "CS301",
      date: "15 September 2026",
      time: "10:00 AM",
      duration: "60 Minutes",
      questions: 30,
      status: "Upcoming",
    },
    {
      subject: "Database Management",
      code: "CS302",
      date: "18 September 2026",
      time: "10:00 AM",
      duration: "60 Minutes",
      questions: 30,
      status: "Upcoming",
    },
    {
      subject: "Operating Systems",
      code: "CS303",
      date: "22 September 2026",
      time: "10:00 AM",
      duration: "60 Minutes",
      questions: 30,
      status: "Upcoming",
    },
  ];

  const handleViewExam = (exam) => {
    navigate("/student/exam-instructions", {
      state: { exam },
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          height: "70px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#111827",
              fontSize: "22px",
            }}
          >
            SecureExam
          </h2>

          <p
            style={{
              margin: "4px 0 0",
              color: "#6b7280",
              fontSize: "13px",
            }}
          >
            Secure Online Examination System
          </p>
        </div>

        <Link
          to="/student"
          style={{
            textDecoration: "none",
            color: "#374151",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "0 25px",
        }}
      >
        {/* Page Heading */}
        <div style={{ marginBottom: "30px" }}>
          <h1
            style={{
              margin: "0 0 8px",
              color: "#111827",
              fontSize: "30px",
            }}
          >
            My Examinations
          </h1>

          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            View your upcoming examinations and access exam instructions.
          </p>
        </div>

        {/* Exam Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {upcomingExams.map((exam, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "25px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Status */}
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                  padding: "6px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                {exam.status}
              </div>

              {/* Subject */}
              <h2
                style={{
                  margin: "0 0 6px",
                  color: "#111827",
                  fontSize: "21px",
                }}
              >
                {exam.subject}
              </h2>

              <p
                style={{
                  margin: "0 0 20px",
                  color: "#6b7280",
                  fontSize: "13px",
                }}
              >
                Course Code: {exam.code}
              </p>

              {/* Exam Information */}
              <div
                style={{
                  borderTop: "1px solid #f0f0f0",
                  paddingTop: "18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ color: "#6b7280", fontSize: "13px" }}>
                    📅 Date
                  </span>

                  <strong
                    style={{
                      color: "#111827",
                      fontSize: "13px",
                    }}
                  >
                    {exam.date}
                  </strong>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ color: "#6b7280", fontSize: "13px" }}>
                    🕐 Time
                  </span>

                  <strong
                    style={{
                      color: "#111827",
                      fontSize: "13px",
                    }}
                  >
                    {exam.time}
                  </strong>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ color: "#6b7280", fontSize: "13px" }}>
                    ⏱ Duration
                  </span>

                  <strong
                    style={{
                      color: "#111827",
                      fontSize: "13px",
                    }}
                  >
                    {exam.duration}
                  </strong>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ color: "#6b7280", fontSize: "13px" }}>
                    📝 Questions
                  </span>

                  <strong
                    style={{
                      color: "#111827",
                      fontSize: "13px",
                    }}
                  >
                    {exam.questions}
                  </strong>
                </div>
              </div>

              {/* View Examination Button */}
              <button
                onClick={() => handleViewExam(exam)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#111827",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                View Examination →
              </button>
            </div>
          ))}
        </div>

        {/* Security Information */}
        <div
          style={{
            marginTop: "30px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "25px",
          }}
        >
          <h2
            style={{
              margin: "0 0 18px",
              color: "#111827",
              fontSize: "18px",
            }}
          >
            🔐 Examination Security
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "15px",
            }}
          >
            <SecurityItem
              title="Secure Login"
              description="Authenticated access"
            />

            <SecurityItem
              title="Protected Questions"
              description="Encrypted question papers"
            />

            <SecurityItem
              title="Blockchain Verified"
              description="Integrity verification"
            />

            <SecurityItem
              title="Integrity Protected"
              description="Tamper detection enabled"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityItem({ title, description }) {
  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      <div
        style={{
          color: "#059669",
          fontWeight: "600",
          fontSize: "14px",
          marginBottom: "5px",
        }}
      >
        ✓ {title}
      </div>

      <div
        style={{
          color: "#6b7280",
          fontSize: "12px",
        }}
      >
        {description}
      </div>
    </div>
  );
}

export default MyExaminations;