import React, { useState } from "react";

export default function AssignmentUpload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!title) {
      setMessage("Please enter assignment title!");
      return;
    }
    if (!file) {
      setMessage("Please select a file to upload!");
      return;
    }

    // Just frontend simulation, in real project you will send to server
    console.log("Assignment Title:", title);
    console.log("File:", file);

    setMessage(`Assignment "${title}" uploaded successfully!`);
    setTitle("");
    setFile(null);
    document.getElementById("fileInput").value = null; // reset input
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Upload Assignment</h2>
      <form onSubmit={handleUpload}>
        <label>Assignment Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <br />
        <br />
        <label>Select File:</label>
        <input type="file" id="fileInput" onChange={handleFileChange} />
        <br />
        <br />
        <button type="submit">Upload</button>
      </form>
      {message && (
        <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
      )}
    </div>
  );
}
