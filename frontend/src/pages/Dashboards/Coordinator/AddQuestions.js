import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

function AddQuestions() {
  const location = useLocation();
  const navigate = useNavigate();

  const exam =
    location.state?.exam || {
      subject: "Data Structures",
      code: "CS301",
      date: "",
      time: "",
      duration: "60",
      questions: "10",
      description: "",
    };

  const totalQuestions = Number(exam.questions) || 10;

  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      answer: "",
    },
  ]);

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updated = [...questions];
    updated[questionIndex].options[optionIndex] = value;
    setQuestions(updated);
  };

  const handleAnswerChange = (index, value) => {
    const updated = [...questions];
    updated[index].answer = value;
    setQuestions(updated);
  };

  const addQuestion = () => {
    if (questions.length >= totalQuestions) {
      alert(`This examination allows only ${totalQuestions} questions.`);
      return;
    }

    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ]);
  };

  const removeQuestion = (index) => {
    if (questions.length === 1) {
      alert("At least one question is required.");
      return;
    }

    const updated = questions.filter((_, i) => i !== index);
    setQuestions(updated);
  };

  const handleContinue = () => {
    const incompleteQuestion = questions.some(
      (item) =>
        !item.question.trim() ||
        item.options.some((option) => !option.trim()) ||
        !item.answer
    );

    if (incompleteQuestion) {
      alert(
        "Please complete the question, all four options, and select the correct answer."
      );
      return;
    }

    if (questions.length !== totalQuestions) {
      alert(
        `Please add exactly ${totalQuestions} questions before continuing.`
      );
      return;
    }

    navigate("/coordinator/publish-examination", {
      state: {
        exam,
        questions,
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
            Secure Examination Creation
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
          ← Coordinator Dashboard
        </Link>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1000px",
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
            STEP 2 OF 3
          </p>

          <h1
            style={{
              margin: "0 0 8px",
              color: "#111827",
              fontSize: "30px",
            }}
          >
            Add Questions
          </h1>

          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Add multiple-choice questions for your examination.
          </p>
        </div>

        {/* Exam Summary */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "18px 22px",
            marginBottom: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <div>
            <strong
              style={{
                display: "block",
                color: "#111827",
                fontSize: "17px",
              }}
            >
              {exam.subject}
            </strong>

            <span
              style={{
                color: "#6b7280",
                fontSize: "13px",
              }}
            >
              {exam.code}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "25px",
              color: "#4b5563",
              fontSize: "13px",
            }}
          >
            <span>
              <strong>{totalQuestions}</strong> Questions
            </span>

            <span>
              <strong>{exam.duration}</strong> Minutes
            </span>
          </div>
        </div>

        {/* Question Cards */}
        {questions.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "25px",
              marginBottom: "20px",
            }}
          >
            {/* Question Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#111827",
                  fontSize: "17px",
                }}
              >
                Question {index + 1}
              </h2>

              {questions.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeQuestion(index)}
                  style={{
                    border: "none",
                    backgroundColor: "#fef2f2",
                    color: "#dc2626",
                    padding: "7px 12px",
                    borderRadius: "7px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Remove
                </button>
              )}
            </div>

            {/* Question */}
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#374151",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Question
            </label>

            <textarea
              value={item.question}
              onChange={(e) =>
                handleQuestionChange(index, e.target.value)
              }
              placeholder="Enter your question here..."
              rows="3"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                resize: "vertical",
                fontSize: "14px",
                marginBottom: "20px",
                outline: "none",
              }}
            />

            {/* Options */}
            <label
              style={{
                display: "block",
                marginBottom: "12px",
                color: "#374151",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Answer Options
            </label>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {item.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "#f3f4f6",
                      color: "#374151",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    {String.fromCharCode(65 + optionIndex)}
                  </div>

                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(
                        index,
                        optionIndex,
                        e.target.value
                      )
                    }
                    placeholder={`Option ${String.fromCharCode(
                      65 + optionIndex
                    )}`}
                    style={{
                      flex: 1,
                      padding: "11px 12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Correct Answer */}
            <div style={{ marginTop: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#374151",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Correct Answer
              </label>

              <select
                value={item.answer}
                onChange={(e) =>
                  handleAnswerChange(index, e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "11px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  fontSize: "13px",
                  color: "#374151",
                  outline: "none",
                }}
              >
                <option value="">Select correct option</option>
                <option value="0">Option A</option>
                <option value="1">Option B</option>
                <option value="2">Option C</option>
                <option value="3">Option D</option>
              </select>
            </div>
          </div>
        ))}

        {/* Add Question */}
        {questions.length < totalQuestions && (
          <button
            type="button"
            onClick={addQuestion}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#ffffff",
              border: "1px dashed #9ca3af",
              borderRadius: "10px",
              color: "#374151",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "25px",
            }}
          >
            + Add Question
          </button>
        )}

        {/* Progress */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            padding: "15px 18px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              fontSize: "12px",
            }}
          >
            <span style={{ color: "#6b7280" }}>
              Question Progress
            </span>

            <strong style={{ color: "#111827" }}>
              {questions.length} / {totalQuestions}
            </strong>
          </div>

          <div
            style={{
              height: "7px",
              backgroundColor: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${Math.min(
                  (questions.length / totalQuestions) * 100,
                  100
                )}%`,
                height: "100%",
                backgroundColor: "#111827",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        {/* Security Notice */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            padding: "16px",
            marginBottom: "25px",
            color: "#374151",
            fontSize: "12px",
            lineHeight: "1.6",
          }}
        >
          <Lock size={15} style={{ display: "inline-block", verticalAlign: "-2px", marginRight: "6px" }} />
          <strong>SecureExam Protection:</strong> After publishing,
          the examination data will be prepared for encryption,
          IPFS storage, and blockchain verification.
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
              navigate("/coordinator/create-examination", {
                state: { exam },
              })
            }
            style={{
              padding: "11px 20px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              backgroundColor: "#ffffff",
              color: "#374151",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            ← Back to Details
          </button>

          <button
            type="button"
            onClick={handleContinue}
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#111827",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Continue to Publish →
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddQuestions;