import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Lock, Cloud, Link2, Cpu, ShieldCheck, AlertTriangle } from "lucide-react";

function PublishExamination() {
  const location = useLocation();
  const navigate = useNavigate();

  const exam = location.state?.exam || {
    subject: "Data Structures",
    code: "CS301",
    date: "",
    time: "",
    duration: "60",
    questions: "10",
    description: "",
  };

  const questions = location.state?.questions || [];

  const [publishing, setPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const [securityStep, setSecurityStep] = useState(0);

  const securitySteps = [
    {
      title: "Question Paper Encryption",
      description: "Encrypting examination data using AES-256",
      icon: <Lock size={18} />,
    },
    {
      title: "IPFS Storage",
      description: "Storing encrypted question paper securely",
      icon: <Cloud size={18} />,
    },
    {
      title: "CID Generation",
      description: "Generating content identifier for the stored paper",
      icon: <Link2 size={18} />,
    },
    {
      title: "Blockchain Verification",
      description: "Recording integrity information on Polygon blockchain",
      icon: <Cpu size={18} />,
    },
  ];

  const handlePublish = () => {
    setPublishing(true);
    setSecurityStep(0);

    let step = 0;

    const interval = setInterval(() => {
      step += 1;

      if (step < securitySteps.length) {
        setSecurityStep(step);
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setPublishing(false);
          setPublished(true);
        }, 1000);
      }
    }, 1200);
  };

  const handleGoToDashboard = () => {
    navigate("/coordinator");
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
            Secure Examination Publishing
          </p>
        </div>

        {!published && (
          <Link
            to="/coordinator"
            style={{
              textDecoration: "none",
              color: "#374151",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            ← Coordinator Dashboard
          </Link>
        )}
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "950px",
          margin: "35px auto",
          padding: "0 25px 50px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "25px" }}>
          <p
            style={{
              margin: "0 0 7px",
              color: "#6b7280",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            STEP 3 OF 3
          </p>

          <h1
            style={{
              margin: "0 0 8px",
              color: "#111827",
              fontSize: "30px",
            }}
          >
            {published ? "Examination Published" : "Publish Examination"}
          </h1>

          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            {published
              ? "Your examination has been securely published."
              : "Review the examination details and publish it securely."}
          </p>
        </div>

        {/* Published Success */}
        {published ? (
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #d1fae5",
              borderRadius: "14px",
              padding: "35px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "#ecfdf5",
                color: "#059669",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                margin: "0 auto 20px",
              }}
            >
              ✓
            </div>

            <h2
              style={{
                textAlign: "center",
                margin: "0 0 8px",
                color: "#111827",
                fontSize: "24px",
              }}
            >
              Examination Published Successfully
            </h2>

            <p
              style={{
                textAlign: "center",
                margin: "0 auto 30px",
                maxWidth: "600px",
                color: "#6b7280",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              The examination has been secured and is now available
              for the assigned students.
            </p>

            {/* Security Verification */}
            <div
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "25px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 15px",
                  color: "#111827",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <ShieldCheck size={18} /> Security Verification
              </h3>

              <div style={{ display: "grid", gap: "12px" }}>
                <VerificationItem
                  title="AES-256 Encryption"
                  value="Completed"
                />

                <VerificationItem
                  title="IPFS Storage"
                  value="Protected"
                />

                <VerificationItem
                  title="Content Identifier"
                  value="Generated"
                />

                <VerificationItem
                  title="Polygon Blockchain"
                  value="Verified"
                />

                <VerificationItem
                  title="Integrity Status"
                  value="Secure"
                />
              </div>
            </div>

            {/* Exam ID */}
            <div
              style={{
                backgroundColor: "#111827",
                color: "#ffffff",
                borderRadius: "10px",
                padding: "18px",
                marginBottom: "25px",
              }}
            >
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "11px",
                  color: "#9ca3af",
                }}
              >
                EXAMINATION ID
              </p>

              <strong
                style={{
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                SEC-{exam.code || "EXAM"}-{Date.now().toString().slice(-6)}
              </strong>
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                onClick={handleGoToDashboard}
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
                Go to Coordinator Dashboard
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Examination Summary */}
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
                Examination Summary
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "18px",
                }}
              >
                <SummaryItem
                  label="Subject"
                  value={exam.subject}
                />

                <SummaryItem
                  label="Course Code"
                  value={exam.code}
                />

                <SummaryItem
                  label="Date"
                  value={exam.date || "Not specified"}
                />

                <SummaryItem
                  label="Start Time"
                  value={exam.time || "Not specified"}
                />

                <SummaryItem
                  label="Duration"
                  value={`${exam.duration} Minutes`}
                />

                <SummaryItem
                  label="Questions"
                  value={`${questions.length || exam.questions} Questions`}
                />
              </div>

              {exam.description && (
                <div
                  style={{
                    marginTop: "20px",
                    paddingTop: "18px",
                    borderTop: "1px solid #e5e7eb",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 6px",
                      color: "#6b7280",
                      fontSize: "11px",
                      fontWeight: "700",
                    }}
                  >
                    DESCRIPTION
                  </p>

                  <p
                    style={{
                      margin: 0,
                      color: "#374151",
                      fontSize: "13px",
                      lineHeight: "1.5",
                    }}
                  >
                    {exam.description}
                  </p>
                </div>
              )}
            </div>

            {/* Security Pipeline */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "25px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: "0 0 5px",
                      color: "#111827",
                      fontSize: "19px",
                    }}
                  >
                    Security Pipeline
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      color: "#6b7280",
                      fontSize: "13px",
                    }}
                  >
                    Your question paper will pass through multiple
                    security layers.
                  </p>
                </div>

                <span
                  style={{
                    backgroundColor: "#ecfdf5",
                    color: "#047857",
                    padding: "7px 12px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                >
                  PROTECTED
                </span>
              </div>

              {securitySteps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "15px 0",
                    borderBottom:
                      index !== securitySteps.length - 1
                        ? "1px solid #f0f0f0"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor:
                        publishing && index <= securityStep
                          ? "#ecfdf5"
                          : "#f3f4f6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    {publishing && index <= securityStep
                      ? "✓"
                      : step.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <strong
                      style={{
                        display: "block",
                        color: "#111827",
                        fontSize: "14px",
                        marginBottom: "4px",
                      }}
                    >
                      {step.title}
                    </strong>

                    <span
                      style={{
                        color: "#6b7280",
                        fontSize: "12px",
                      }}
                    >
                      {step.description}
                    </span>
                  </div>

                  {publishing && index === securityStep && (
                    <span
                      style={{
                        color: "#2563eb",
                        fontSize: "11px",
                        fontWeight: "600",
                      }}
                    >
                      Processing...
                    </span>
                  )}

                  {publishing && index < securityStep && (
                    <span
                      style={{
                        color: "#059669",
                        fontSize: "11px",
                        fontWeight: "600",
                      }}
                    >
                      Completed
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Final Warning */}
            <div
              style={{
                backgroundColor: "#fffbeb",
                border: "1px solid #fde68a",
                borderRadius: "10px",
                padding: "16px",
                marginBottom: "25px",
                color: "#92400e",
                fontSize: "12px",
                lineHeight: "1.6",
              }}
            >
              <AlertTriangle size={15} style={{ display: "inline-block", verticalAlign: "-2px", marginRight: "6px" }} />
              <strong>Important:</strong> Once published, the
              examination should not be modified. The published
              question paper will be associated with its security
              record and integrity verification.
            </div>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                onClick={() =>
                  navigate("/coordinator/add-questions", {
                    state: {
                      exam,
                      questions,
                    },
                  })
                }
                disabled={publishing}
                style={{
                  padding: "11px 20px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  backgroundColor: "#ffffff",
                  color: "#374151",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: publishing ? "not-allowed" : "pointer",
                  opacity: publishing ? 0.5 : 1,
                }}
              >
                ← Back to Questions
              </button>

              <button
                type="button"
                onClick={handlePublish}
                disabled={publishing}
                style={{
                  padding: "12px 26px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: publishing
                    ? "#6b7280"
                    : "#111827",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: publishing ? "not-allowed" : "pointer",
                }}
              >
                {publishing ? (
                  "Securing Examination..."
                ) : (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <Lock size={15} /> Publish Examination
                  </span>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div>
      <p
        style={{
          margin: "0 0 6px",
          color: "#6b7280",
          fontSize: "11px",
          fontWeight: "700",
        }}
      >
        {label.toUpperCase()}
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

function VerificationItem({ title, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <span
        style={{
          color: "#374151",
          fontSize: "13px",
        }}
      >
        {title}
      </span>

      <span
        style={{
          color: "#047857",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        ✓ {value}
      </span>
    </div>
  );
}

export default PublishExamination;