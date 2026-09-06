import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateExamination() {
  const navigate = useNavigate();

  const [examDetails, setExamDetails] = useState({
    subject: "",
    code: "",
    date: "",
    time: "",
    duration: "60",
    questions: "10",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExamDetails({
      ...examDetails,
      [name]: value,
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (
      !examDetails.subject ||
      !examDetails.code ||
      !examDetails.date ||
      !examDetails.time
    ) {
      alert("Please fill in all required examination details.");
      return;
    }

    navigate("/coordinator/add-questions", {
      state: {
        exam: examDetails,
      },
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
            Coordinator Examination Management
          </p>
        </div>

        <Link
          to="/coordinator"
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
          maxWidth: "900px",
          margin: "40px auto",
          padding: "0 25px",
        }}
      >
        {/* Heading */}
        <div style={{ marginBottom: "30px" }}>
          <h1
            style={{
              margin: "0 0 8px",
              color: "#111827",
              fontSize: "30px",
            }}
          >
            Create Examination
          </h1>

          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Enter the basic examination details before adding questions.
          </p>
        </div>

        {/* Progress */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <Step number="1" title="Exam Details" active />
          <div
            style={{
              flex: 1,
              height: "2px",
              backgroundColor: "#d1d5db",
            }}
          />
          <Step number="2" title="Add Questions" />
          <div
            style={{
              flex: 1,
              height: "2px",
              backgroundColor: "#d1d5db",
            }}
          />
          <Step number="3" title="Publish" />
        </div>

        {/* Form */}
        <form onSubmit={handleContinue}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "30px",
            }}
          >
            <h2
              style={{
                margin: "0 0 25px",
                color: "#111827",
                fontSize: "20px",
              }}
            >
              Examination Details
            </h2>

            {/* Subject + Code */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <FormField
                label="Subject"
                name="subject"
                placeholder="e.g. Data Structures"
                value={examDetails.subject}
                onChange={handleChange}
                required
              />

              <FormField
                label="Course Code"
                name="code"
                placeholder="e.g. CS301"
                value={examDetails.code}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date + Time */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <FormField
                label="Examination Date"
                name="date"
                type="date"
                value={examDetails.date}
                onChange={handleChange}
                required
              />

              <FormField
                label="Start Time"
                name="time"
                type="time"
                value={examDetails.time}
                onChange={handleChange}
                required
              />
            </div>

            {/* Duration + Questions */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#374151",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Duration
                </label>

                <select
                  name="duration"
                  value={examDetails.duration}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="30">30 Minutes</option>
                  <option value="45">45 Minutes</option>
                  <option value="60">60 Minutes</option>
                  <option value="90">90 Minutes</option>
                  <option value="120">120 Minutes</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#374151",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Number of Questions
                </label>

                <select
                  name="questions"
                  value={examDetails.questions}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="5">5 Questions</option>
                  <option value="10">10 Questions</option>
                  <option value="20">20 Questions</option>
                  <option value="30">30 Questions</option>
                  <option value="50">50 Questions</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: "25px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#374151",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Examination Description
              </label>

              <textarea
                name="description"
                value={examDetails.description}
                onChange={handleChange}
                placeholder="Enter a short description for the examination..."
                rows="4"
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </div>

            {/* Security Information */}
            <div
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                padding: "18px",
                marginBottom: "25px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 12px",
                  color: "#111827",
                  fontSize: "15px",
                }}
              >
                🔐 Security Configuration
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "10px",
                }}
              >
                <SecurityItem text="Question encryption enabled" />
                <SecurityItem text="Question randomization enabled" />
                <SecurityItem text="Blockchain verification enabled" />
                <SecurityItem text="Exam integrity monitoring enabled" />
              </div>
            </div>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid #e5e7eb",
                paddingTop: "20px",
              }}
            >
              <Link
                to="/coordinator"
                style={{
                  textDecoration: "none",
                  padding: "11px 22px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  backgroundColor: "#ffffff",
                  color: "#374151",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Cancel
              </Link>

              <button
                type="submit"
                style={{
                  padding: "12px 25px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#111827",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Continue to Questions →
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#374151",
          fontSize: "13px",
          fontWeight: "600",
        }}
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={inputStyle}
      />
    </div>
  );
}

function SecurityItem({ text }) {
  return (
    <div
      style={{
        color: "#047857",
        fontSize: "12px",
      }}
    >
      ✓ {text}
    </div>
  );
}

function Step({ number, title, active }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        minWidth: "130px",
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: active ? "#111827" : "#e5e7eb",
          color: active ? "#ffffff" : "#6b7280",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {number}
      </div>

      <span
        style={{
          color: active ? "#111827" : "#6b7280",
          fontSize: "12px",
          fontWeight: active ? "600" : "400",
        }}
      >
        {title}
      </span>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px 13px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  color: "#111827",
  fontSize: "14px",
  outline: "none",
};

export default CreateExamination;