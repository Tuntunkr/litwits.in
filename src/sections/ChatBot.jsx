// ChatBot.jsx
import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleUserType = (type) => {
    setUserType(type);
    setStep(2);
  };

  const handleEmailSubmit = async () => {
    try {
      // Send email to backend
      await axios.post("/api/collect-email", { email, userType });

      setStep(3);
      setMessage("Thank you! Your free guide will be emailed shortly.");
    } catch (err) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="p-4 bg-white border rounded shadow w-80 fixed bottom-4 right-4">
      {step === 1 && (
        <>
          <p>👋 Hi! Are you a Student, Parent, or Teacher?</p>
          <div className="mt-2 space-x-2">
            <button onClick={() => handleUserType("Student")}>Student</button>
            <button onClick={() => handleUserType("Parent")}>Parent</button>
            <button onClick={() => handleUserType("Teacher")}>Teacher</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <p>
            Great! We have special programs for {userType}s.
            <br />
            Would you like a free guide on college interviews? Enter your email:
          </p>
          <input
            type="email"
            className="mt-2 border px-2 py-1 w-full"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="mt-2 bg-blue-500 text-white px-3 py-1" onClick={handleEmailSubmit}>
            Submit
          </button>
        </>
      )}

      {step === 3 && <p>{message}</p>}
    </div>
  );
};

export default ChatBot;
