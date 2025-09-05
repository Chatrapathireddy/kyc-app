import React, { useState } from "react";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      {!submitted ? (
        <form className="kyc-form" onSubmit={handleSubmit}>
          <h1>🪪 KYC Verification</h1>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Aadhaar / PAN</label>
            <input type="text" placeholder="Enter Aadhaar or PAN" required />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter your address" rows="3" required />
          </div>

          <div className="form-group">
            <label>Upload ID Proof</label>
            <input type="file" accept="image/*,.pdf" required />
          </div>

          <button type="submit">✅ Submit KYC</button>
        </form>
      ) : (
        <div className="success-screen">
          <div className="circle-check">✔</div>
          <h2>KYC Submitted Successfully</h2>
          <p>We’ll verify your documents and notify you shortly.</p>
        </div>
      )}
    </div>
  );
}

export default App;
