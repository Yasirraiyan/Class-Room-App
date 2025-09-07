import React from "react";
import { useState } from "react";
//import  "./Create.css";
export default function LogIn() {
  const [username, setUserName] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState(false);
  const handlelogin = () => {
    if (!username && !password) {
      setError(" Both Required!");
      setSuccess(false);
      alert("Both Required");
      return;
    }
    if (!username) {
      setError("Username is required!");
      setSuccess(false);
      alert("Username is required!");
      return;
    }
    if (!password) {
      setError("Password is required!");
      setSuccess(false);
      alert("Password is required!");
      return;
    }

    // If all filled
    setError("");
    setSuccess(true);
    alert(`Welcome, ${username}! Login Successful.`);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <button onClick={handleLogin}>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Login Successful!</p>}
    </div>
  );
}
