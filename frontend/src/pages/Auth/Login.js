
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Link2, ShieldCheck } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed. Check your credentials.");
        return;
      }

      // Store the authentication token and user details.
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Navigate according to the role returned by the backend.
      switch (data.user.role) {
        case "platformAdmin":
          navigate("/platform-admin");
          break;

        case "collegeAdmin":
          navigate("/organization");
          break;

        case "coordinator":
          navigate("/coordinator");
          break;

        case "student":
          navigate("/student");
          break;

        default:
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          alert("Your account role is not recognized.");
      }
    } catch (error) {
      alert(
        "Cannot connect to the backend. Please make sure the server is running."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Left Side */}
        <div className="login-info">
          <div
            className="login-brand"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Lock size={22} /> SecureExam
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
              <span>
                <Lock size={22} />
              </span>
              <div>
                <strong>Secure Authentication</strong>
                <p>Protected access for authorized users.</p>
              </div>
            </div>

            <div>
              <span>
                <Link2 size={22} />
              </span>
              <div>
                <strong>Blockchain Verification</strong>
                <p>Trusted examination data verification.</p>
              </div>
            </div>

            <div>
              <span>
                <ShieldCheck size={22} />
              </span>
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
            <p>Sign in to continue to SecureExam</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
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
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
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
