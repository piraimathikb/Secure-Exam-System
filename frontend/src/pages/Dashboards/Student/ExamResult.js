import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PartyPopper, ClipboardCheck, ShieldCheck } from "lucide-react";

function ExamResult() {
  const location = useLocation();

  const {
    exam = {
      subject: "Data Structures",
      code: "CS301",
    },
    score = 0,
    totalQuestions = 10,
  } = location.state || {};

  const wrongAnswers = totalQuestions - score;
  const percentage =
    totalQuestions > 0
      ? Math.round((score / totalQuestions) * 100)
      : 0;

  const passed = percentage >= 40;

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
          ← Dashboard
        </Link>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "45px auto",
          padding: "0 25px",
        }}
      >
        {/* Result Header */}
        <div
          style={{
            backgroundColor: "#111827",
            color: "#ffffff",
            borderRadius: "16px",
            padding: "35px",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            {passed ? <PartyPopper size={48} color="#22c55e" /> : <ClipboardCheck size={48} color="#3b82f6" />}
          </div>

          <h1
            style={{
              margin: "0 0 8px",
              fontSize: "30px",
            }}
          >
            Examination Submitted
          </h1>

          <p
            style={{
              margin: 0,
              opacity: 0.8,
              fontSize: "14px",
            }}
          >
            Your examination has been successfully submitted.
          </p>
        </div>

        {/* Exam Details */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "25px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              margin: "0 0 20px",
              color: "#111827",
              fontSize: "19px",
            }}
          >
            Examination Details
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "18px",
            }}
          >
            <Detail
              label="Subject"
              value={exam.subject}
            />

            <Detail
              label="Course Code"
              value={exam.code}
            />

            <Detail
              label="Total Questions"
              value={totalQuestions}
            />

            <Detail
              label="Questions Answered"
              value={score + wrongAnswers}
            />
          </div>
        </div>

        {/* Score */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "30px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              color: "#6b7280",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Your Score
          </p>

          <div
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            {score}/{totalQuestions}
          </div>

          <div
            style={{
              marginTop: "5px",
              fontSize: "20px",
              fontWeight: "600",
              color: passed ? "#059669" : "#dc2626",
            }}
          >
            {percentage}%
          </div>

          <div
            style={{
              display: "inline-block",
              marginTop: "15px",
              padding: "7px 15px",
              borderRadius: "20px",
              backgroundColor: passed ? "#d1fae5" : "#fee2e2",
              color: passed ? "#047857" : "#b91c1c",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            {passed ? "PASS" : "FAIL"}
          </div>
        </div>

        {/* Performance */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "25px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              margin: "0 0 20px",
              color: "#111827",
              fontSize: "19px",
            }}
          >
            Performance Summary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
            }}
          >
            <PerformanceCard
              title="Correct"
              value={score}
              description="Correct answers"
            />

            <PerformanceCard
              title="Wrong"
              value={wrongAnswers}
              description="Incorrect answers"
            />

            <PerformanceCard
              title="Percentage"
              value={`${percentage}%`}
              description="Overall score"
            />
          </div>
        </div>

        {/* Security Verification */}
        <div
          style={{
            backgroundColor: "#ecfdf5",
            border: "1px solid #a7f3d0",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          <h3
            style={{
              margin: "0 0 8px",
              color: "#065f46",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <ShieldCheck size={18} /> Examination Integrity Verified
          </h3>

          <p
            style={{
              margin: 0,
              color: "#047857",
              fontSize: "13px",
              lineHeight: "1.6",
            }}
          >
            Your examination submission has been recorded successfully.
            Examination integrity verification and blockchain recording will
            be handled by the SecureExam system.
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            paddingBottom: "40px",
          }}
        >
          <Link
            to="/student"
            style={{
              textDecoration: "none",
              padding: "12px 25px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              backgroundColor: "#ffffff",
              color: "#111827",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Back to Dashboard
          </Link>

          <Link
            to="/student/examinations"
            style={{
              textDecoration: "none",
              padding: "12px 25px",
              borderRadius: "8px",
              backgroundColor: "#111827",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            My Examinations
          </Link>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p
        style={{
          margin: "0 0 5px",
          color: "#6b7280",
          fontSize: "12px",
        }}
      >
        {label}
      </p>

      <strong
        style={{
          color: "#111827",
          fontSize: "14px",
        }}
      >
        {value}
      </strong>
    </div>
  );
}

function PerformanceCard({ title, value, description }) {
  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          margin: "0 0 8px",
          color: "#6b7280",
          fontSize: "12px",
        }}
      >
        {title}
      </p>

      <div
        style={{
          color: "#111827",
          fontSize: "25px",
          fontWeight: "700",
        }}
      >
        {value}
      </div>

      <p
        style={{
          margin: "6px 0 0",
          color: "#9ca3af",
          fontSize: "11px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default ExamResult;