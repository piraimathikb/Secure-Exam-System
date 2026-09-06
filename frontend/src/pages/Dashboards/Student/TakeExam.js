import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TakeExam() {
  const location = useLocation();
  const navigate = useNavigate();

  const exam = location.state?.exam || {
    subject: "Data Structures",
    code: "CS301",
    duration: "60 Minutes",
    questions: 10,
  };

  const questions = [
    {
      question: "Which data structure follows the LIFO principle?",
      options: [
        "Queue",
        "Stack",
        "Linked List",
        "Array",
      ],
      answer: "Stack",
    },
    {
      question: "What is the time complexity of binary search?",
      options: [
        "O(n)",
        "O(n²)",
        "O(log n)",
        "O(1)",
      ],
      answer: "O(log n)",
    },
    {
      question: "Which data structure is used for BFS traversal?",
      options: [
        "Stack",
        "Queue",
        "Tree",
        "Heap",
      ],
      answer: "Queue",
    },
    {
      question: "Which of the following is a linear data structure?",
      options: [
        "Graph",
        "Tree",
        "Array",
        "Binary Tree",
      ],
      answer: "Array",
    },
    {
      question: "Which operation adds an element to the top of a stack?",
      options: [
        "Pop",
        "Push",
        "Peek",
        "Delete",
      ],
      answer: "Push",
    },
    {
      question: "Which data structure uses nodes connected by pointers?",
      options: [
        "Array",
        "Linked List",
        "Stack",
        "Queue",
      ],
      answer: "Linked List",
    },
    {
      question: "What is the worst-case time complexity of linear search?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)",
      ],
      answer: "O(n)",
    },
    {
      question: "Which traversal visits the root between the left and right subtrees?",
      options: [
        "Preorder",
        "Postorder",
        "Inorder",
        "Level Order",
      ],
      answer: "Inorder",
    },
    {
      question: "Which data structure is commonly used to implement recursion?",
      options: [
        "Queue",
        "Stack",
        "Graph",
        "Heap",
      ],
      answer: "Stack",
    },
    {
      question: "Which sorting algorithm has an average time complexity of O(n log n)?",
      options: [
        "Bubble Sort",
        "Selection Sort",
        "Merge Sort",
        "Linear Search",
      ],
      answer: "Merge Sort",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [showSubmit, setShowSubmit] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(timer);
          setShowSubmit(true);
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const handleAnswer = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowSubmit(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuestionNavigation = (index) => {
    setCurrentQuestion(index);
    setShowSubmit(false);
  };

  const handleSubmit = () => {
    const score = questions.reduce((total, question, index) => {
      return total + (selectedAnswers[index] === question.answer ? 1 : 0);
    }, 0);

    navigate("/student/exam-result", {
      state: {
        exam,
        score,
        totalQuestions: questions.length,
      },
    });
  };

  const question = questions[currentQuestion];

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
          padding: "0 35px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#111827",
              fontSize: "21px",
            }}
          >
            SecureExam
          </h2>

          <p
            style={{
              margin: "4px 0 0",
              color: "#6b7280",
              fontSize: "12px",
            }}
          >
            {exam.subject} • {exam.code}
          </p>
        </div>

        <div
          style={{
            backgroundColor: timeLeft <= 300 ? "#fef2f2" : "#f3f4f6",
            color: timeLeft <= 300 ? "#dc2626" : "#111827",
            padding: "10px 18px",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          ⏱ {formatTime()}
        </div>
      </div>

      {/* Security Bar */}
      <div
        style={{
          backgroundColor: "#ecfdf5",
          borderBottom: "1px solid #a7f3d0",
          padding: "9px 35px",
          color: "#047857",
          fontSize: "12px",
        }}
      >
        🔐 Secure Examination Mode • Your activity is being monitored for
        examination integrity.
      </div>

      {/* Main Layout */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          padding: "0 25px",
          display: "grid",
          gridTemplateColumns: "1fr 250px",
          gap: "25px",
        }}
      >
        {/* Question Section */}
        <div>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "30px",
            }}
          >
            {/* Question Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
              }}
            >
              <span
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Question {currentQuestion + 1} of {questions.length}
              </span>

              <span
                style={{
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                MCQ
              </span>
            </div>

            {/* Question */}
            <h2
              style={{
                color: "#111827",
                fontSize: "21px",
                lineHeight: "1.5",
                marginBottom: "30px",
              }}
            >
              {question.question}
            </h2>

            {/* Options */}
            <div>
              {question.options.map((option, index) => {
                const isSelected =
                  selectedAnswers[currentQuestion] === option;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "16px",
                      marginBottom: "12px",
                      borderRadius: "9px",
                      border: isSelected
                        ? "2px solid #111827"
                        : "1px solid #d1d5db",
                      backgroundColor: isSelected
                        ? "#f3f4f6"
                        : "#ffffff",
                      color: "#111827",
                      cursor: "pointer",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        border: "1px solid #d1d5db",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: "600",
                        flexShrink: 0,
                      }}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    {option}
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                paddingTop: "20px",
                borderTop: "1px solid #e5e7eb",
              }}
            >
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                style={{
                  padding: "11px 22px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  backgroundColor:
                    currentQuestion === 0 ? "#f3f4f6" : "#ffffff",
                  color:
                    currentQuestion === 0 ? "#9ca3af" : "#111827",
                  cursor:
                    currentQuestion === 0 ? "not-allowed" : "pointer",
                  fontWeight: "600",
                }}
              >
                ← Previous
              </button>

              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={() => setShowSubmit(true)}
                  style={{
                    padding: "11px 25px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#111827",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Submit Examination
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  style={{
                    padding: "11px 25px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#111827",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Next →
                </button>
              )}
            </div>
          </div>

          {/* Security Notice */}
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "18px",
              color: "#6b7280",
              fontSize: "12px",
              lineHeight: "1.6",
            }}
          >
            <strong style={{ color: "#111827" }}>
              Security Notice:
            </strong>{" "}
            Do not refresh the page, close the browser, or switch tabs during
            the examination. Suspicious activity may be recorded.
          </div>
        </div>

        {/* Question Navigator */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "22px",
            height: "fit-content",
            position: "sticky",
            top: "110px",
          }}
        >
          <h3
            style={{
              margin: "0 0 5px",
              color: "#111827",
              fontSize: "17px",
            }}
          >
            Questions
          </h3>

          <p
            style={{
              margin: "0 0 20px",
              color: "#6b7280",
              fontSize: "12px",
            }}
          >
            Select a question
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "8px",
            }}
          >
            {questions.map((_, index) => {
              const answered = selectedAnswers[index] !== undefined;
              const active = currentQuestion === index;

              return (
                <button
                  key={index}
                  onClick={() => handleQuestionNavigation(index)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "7px",
                    border: active
                      ? "2px solid #111827"
                      : "1px solid #d1d5db",
                    backgroundColor: answered
                      ? "#d1fae5"
                      : active
                      ? "#f3f4f6"
                      : "#ffffff",
                    color: "#111827",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div
            style={{
              marginTop: "25px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "18px",
            }}
          >
            <Legend color="#d1fae5" text="Answered" />
            <Legend color="#f3f4f6" text="Current" />
            <Legend color="#ffffff" text="Not Answered" />
          </div>

          {/* Progress */}
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "7px",
                fontSize: "12px",
              }}
            >
              <span style={{ color: "#6b7280" }}>Progress</span>

              <strong style={{ color: "#111827" }}>
                {Object.keys(selectedAnswers).length}/{questions.length}
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
                  width: `${
                    (Object.keys(selectedAnswers).length /
                      questions.length) *
                    100
                  }%`,
                  height: "100%",
                  backgroundColor: "#111827",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation */}
      {showSubmit && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "30px",
              width: "100%",
              maxWidth: "430px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              📝
            </div>

            <h2
              style={{
                margin: "0 0 10px",
                color: "#111827",
              }}
            >
              Submit Examination?
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Are you sure you want to submit your examination? You will not
              be able to change your answers after submission.
            </p>

            <p
              style={{
                color: "#374151",
                fontSize: "13px",
                marginTop: "15px",
              }}
            >
              Answered:{" "}
              <strong>
                {Object.keys(selectedAnswers).length}
              </strong>{" "}
              / {questions.length}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              {timeLeft > 0 && (
                <button
                  onClick={() => setShowSubmit(false)}
                  style={{
                    padding: "11px 20px",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    backgroundColor: "#ffffff",
                    color: "#111827",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Continue Exam
                </button>
              )}

              <button
                onClick={handleSubmit}
                style={{
                  padding: "11px 22px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#111827",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Legend({ color, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "8px",
        fontSize: "11px",
        color: "#6b7280",
      }}
    >
      <span
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "3px",
          backgroundColor: color,
          border: "1px solid #d1d5db",
        }}
      />

      {text}
    </div>
  );
}

export default TakeExam;