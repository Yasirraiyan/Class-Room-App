import React from "react";
import { useState } from "react";
import "./Create.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const handleClick = () => {
    if (!username && !password && !confirmPassword) {
      setError("All field required!");
      setSuccess(false);
      return;
    }
    if (!username) {
      setError("Please fill up username first!");
      setSuccess(false);
      return;
    }
    if (!password) {
      setError("Please fill up password!");
      setSuccess(false);
      return;
    }
    if (!confirmPassword) {
      setError("Please fill up Confirm Password!");
      setSuccess(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Password don't match! ");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
    alert("Welcome! .Sign Up Successful");
  };

  return (
    <div className="sign-up-container">
      <div className="user-name-container">
        <h1>Sign Up</h1>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="Password Container">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="Confirm ">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="Role">
        <label>Select Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">--Select Role--</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
      </div>
      <button onClick={handleClick}>Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Sign Up Successful!</p>}
    </div>
  );
}
