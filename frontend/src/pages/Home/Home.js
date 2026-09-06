import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tagline">SECURE • TRANSPARENT • TRUSTED</p>

          <h1>
            Secure Online
            <br />
            Examination Platform
          </h1>

          <p className="hero-description">
            A next-generation examination platform designed to protect
            question papers, ensure exam integrity, and provide a secure
            experience for administrators, teachers, and students.
          </p>

          <div className="hero-actions">
            <button className="primary-button">Get Started</button>

            <button className="secondary-button">
              Explore Platform
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="security-card">
            <div className="security-icon">🔐</div>

            <h3>Exam Security</h3>

            <p>
              Blockchain-backed verification for secure and tamper-resistant
              examinations.
            </p>

            <div className="security-status">
              <span>●</span> System Protected
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="section-heading">
          <p className="section-tag">POWERFUL SECURITY</p>

          <h2>Everything you need for secure examinations</h2>

          <p>
            Our platform combines modern web technologies with decentralized
            security to protect the complete examination process.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Question Papers</h3>
            <p>
              Protect examination papers using encryption and controlled
              access.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⛓️</div>
            <h3>Blockchain Verification</h3>
            <p>
              Verify the integrity of examination documents using blockchain
              technology.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">☁️</div>
            <h3>Decentralized Storage</h3>
            <p>
              Store protected examination documents using decentralized
              storage technology.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Secure Key Management</h3>
            <p>
              Protect sensitive encryption keys with dedicated secret
              management.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="process-section" id="how-it-works">
        <div className="section-heading">
          <p className="section-tag">HOW IT WORKS</p>

          <h2>A secure examination workflow</h2>

          <p>
            From question paper creation to examination and verification,
            every important step is protected.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <span>01</span>
            <h3>Create & Upload</h3>
            <p>
              Authorized teachers create and securely upload examination
              papers.
            </p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Encrypt & Protect</h3>
            <p>
              The question paper is protected before being stored in the
              system.
            </p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Store & Verify</h3>
            <p>
              Secure storage and blockchain verification help maintain paper
              integrity.
            </p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Conduct Examination</h3>
            <p>
              Students access authorized examinations through their secure
              accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="security-section" id="about">
        <div className="security-content">
          <p className="section-tag">SECURITY ARCHITECTURE</p>

          <h2>Multiple layers of protection</h2>

          <p>
            SecureExam combines encryption, decentralized storage,
            blockchain verification, and secure key management to protect
            examination data.
          </p>

          <div className="security-points">
            <div>
              <strong>01</strong>
              <span>Question Paper Encryption</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Decentralized IPFS Storage</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Blockchain Integrity Verification</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Secure Key Management</span>
            </div>
          </div>
        </div>

        <div className="architecture-card">
          <div>📄 Question Paper</div>
          <span>↓</span>
          <div>🔐 Encryption</div>
          <span>↓</span>
          <div>☁️ IPFS Storage</div>
          <span>↓</span>
          <div>⛓️ Blockchain Verification</div>
          <span>↓</span>
          <div>✅ Secure Examination</div>
        </div>
      </section>

      {/* User Roles */}
      <section className="roles-section">
        <div className="section-heading">
          <p className="section-tag">ONE PLATFORM</p>

          <h2>Built for every role</h2>

          <p>
            Each user gets a dedicated experience based on their role within
            the examination system.
          </p>
        </div>

        <div className="roles-grid">
          <div className="role-card">
            <span>👑</span>
            <h3>Platform Admin</h3>
            <p>Manage organizations and monitor the entire platform.</p>
          </div>

          <div className="role-card">
            <span>🏫</span>
            <h3>College Admin</h3>
            <p>Manage teachers, students, examinations, and results.</p>
          </div>

          <div className="role-card">
            <span>👨‍🏫</span>
            <h3>Teacher</h3>
            <p>Create examinations and securely manage question papers.</p>
          </div>

          <div className="role-card">
            <span>👨‍🎓</span>
            <h3>Student</h3>
            <p>Attend examinations and securely access results.</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <h2>Ready for a more secure examination system?</h2>

        <p>
          Experience a modern examination platform designed with security
          and integrity at its core.
        </p>

        <button className="primary-button">Get Started</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h3>🔐 SecureExam</h3>
          <p>
            Blockchain-based secure online examination platform.
          </p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <p className="copyright">
          © 2026 SecureExam. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;