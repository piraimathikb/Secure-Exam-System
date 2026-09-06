import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const userEmail = email.trim().toLowerCase();

    // Temporary frontend testing password
    if (password !== "123456") {
      alert("Invalid password. For testing, use 123456.");
      return;
    }

    // Role-based dashboard navigation
    if (userEmail === "admin@secureexam.com") {
      navigate("/platform-admin");
    } else if (userEmail === "college@secureexam.com") {
      navigate("/organization");
    } else if (userEmail === "coordinator@secureexam.com") {
      navigate("/coordinator");
    } else if (userEmail === "student@secureexam.com") {
      navigate("/student");
    } else {
      alert("Email is not registered.");
    }
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* Left Side */}
        <div className="login-info">

          <div className="login-brand">
            🔐 SecureExam
          </div>

          <h1>
            Secure access to your examination platform.
          </h1>

          <p>
            Manage examinations, protect question papers, and maintain
            examination integrity through a secure digital platform.
          </p>

          <div className="login-security">

            <div>
              <span>🔐</span>

              <div>
                <strong>Secure Authentication</strong>
                <p>Protected access for authorized users.</p>
              </div>
            </div>

            <div>
              <span>⛓️</span>

              <div>
                <strong>Blockchain Verification</strong>
                <p>Trusted examination data verification.</p>
              </div>
            </div>

            <div>
              <span>🛡️</span>

              <div>
                <strong>Protected Data</strong>
                <p>Secure handling of examination information.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="login-card">

          <div className="login-header">

            <h2>Welcome Back</h2>

            <p>
              Sign in to continue to SecureExam
            </p>

          </div>

          <form onSubmit={handleLogin}>

            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>

            <div className="login-options">

              <label className="remember-me">

                <input type="checkbox" />

                Remember me

              </label>

              <a href="#forgot-password">
                Forgot Password?
              </a>

            </div>

            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>

          <div className="login-divider">
            <span>Secure access</span>
          </div>

          <p className="login-help">
            Don't have an account? Contact your administrator.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;