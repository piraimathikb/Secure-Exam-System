import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🔐 SecureExam
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