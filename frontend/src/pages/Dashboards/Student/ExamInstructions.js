import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

function ExamInstructions() {
  const location = useLocation();
  const navigate = useNavigate();

  const exam = location.state?.exam || {
    subject: "Data Structures",
    code: "CS301",
    date: "15 September 2026",
    time: "10:00 AM",
    duration: "60 Minutes",
    questions: 30,
  };

  const handleStartExam = () => {
    navigate("/student/exam", {
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
          to="/student/examinations"
          style={{
            textDecoration: "none",
            color: "#374151",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          ← Back to Examinations
        </Link>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          padding: "0 25px",
        }}
      >
        {/* Exam Header */}
        <div
          style={{
            backgroundColor: "#111827",
            borderRadius: "14px",
            padding: "30px",
            color: "#ffffff",
            marginBottom: "25px",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              fontSize: "13px",
              opacity: 0.75,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Examination
          </p>

          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "30px",
            }}
          >
            {exam.subject}
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              opacity: 0.8,
            }}
          >
            Course Code: {exam.code}
          </p>
        </div>

        {/* Exam Details */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            padding: "25px",
            marginBottom: "25px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#111827",
              fontSize: "20px",
            }}
          >
            Examination Details
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <div>
              <p style={{ color: "#6b7280", fontSize: "12px", margin: 0 }}>
                DATE
              </p>
              <strong style={{ color: "#111827" }}>{exam.date}</strong>
            </div>

            <div>
              <p style={{ color: "#6b7280", fontSize: "12px", margin: 0 }}>
                TIME
              </p>
              <strong style={{ color: "#111827" }}>{exam.time}</strong>
            </div>

            <div>
              <p style={{ color: "#6b7280", fontSize: "12px", margin: 0 }}>
                DURATION
              </p>
              <strong style={{ color: "#111827" }}>{exam.duration}</strong>
            </div>

            <div>
              <p style={{ color: "#6b7280", fontSize: "12px", margin: 0 }}>
                QUESTIONS
              </p>
              <strong style={{ color: "#111827" }}>
                {exam.questions}
              </strong>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            padding: "30px",
            border: "1px solid #e5e7eb",
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#111827",
              fontSize: "20px",
            }}
          >
            Exam Instructions
          </h2>

          <div style={{ marginTop: "20px" }}>
            <Instruction
              number="1"
              text="Make sure you have a stable internet connection before starting the examination."
            />

            <Instruction
              number="2"
              text="The examination timer will start immediately after you click Start Examination."
            />

            <Instruction
              number="3"
              text="Do not refresh the page or close the browser while the examination is in progress."
            />

            <Instruction
              number="4"
              text="Switching browser tabs or windows may be recorded as suspicious activity."
            />

            <Instruction
              number="5"
              text="Each question can be answered only through the options provided."
            />

            <Instruction
              number="6"
              text="You can navigate between questions using the Next and Previous buttons."
            />

            <Instruction
              number="7"
              text="Make sure to submit your examination before the timer reaches zero."
            />

            <Instruction
              number="8"
              text="Once the examination is submitted, you cannot modify your answers."
            />
          </div>
        </div>

        {/* Security Notice */}
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
            <ShieldCheck size={18} /> Secure Examination Environment
          </h3>

          <p
            style={{
              margin: 0,
              color: "#047857",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            Your examination is protected using encryption, access control,
            question randomization, and blockchain-based integrity
            verification.
          </p>
        </div>

        {/* Start Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "40px",
          }}
        >
          <button
            onClick={handleStartExam}
            style={{
              backgroundColor: "#111827",
              color: "#ffffff",
              border: "none",
              borderRadius: "10px",
              padding: "15px 45px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Start Examination →
          </button>
        </div>
      </div>
    </div>
  );
}

function Instruction({ number, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "15px",
        marginBottom: "18px",
      }}
    >
      <div
        style={{
          minWidth: "28px",
          height: "28px",
          borderRadius: "50%",
          backgroundColor: "#111827",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        {number}
      </div>

      <p
        style={{
          margin: "4px 0 0",
          color: "#374151",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default ExamInstructions;