import React from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Blockchain Vault</h1>
        <div>
          <a href="#">Home</a>
          <a href="#">Verify</a>
          <a href="#">Issue</a>
          <a href="#">Dashboard</a>
        </div>
      </nav>

      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Your Trusted Digital Identity</h2>
        <p>Store, share and verify credentials securely on blockchain</p>
        <div className="btns">
          <button>Verify Credential</button>
          <button className="outline">Issue New</button>
        </div>
      </motion.section>

      <footer>© 2025 Blockchain Identity System</footer>
    </div>
  );
}
