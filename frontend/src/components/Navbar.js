import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Lock size={22} />
        <span>SecureExam</span>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About</a>
      </div>

      <Link to="/login" className="nav-login">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;