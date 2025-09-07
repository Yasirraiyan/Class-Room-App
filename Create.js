import React, { useState } from "react";
import "./Create.css";

export default function Create() {
  const [classname, setclassname] = useState("");
  const [section, setsection] = useState("");
  const [room, setroom] = useState("");
  const [description, setdescription] = useState("");
  const [subject, setsubject] = useState("");
  const [error, seterror] = useState("");

  const handleValidate = () => {
    if (!classname) return seterror("Please fill up classname first!");
    if (!section) return seterror("Please fill up section!");
    if (!room) return seterror("Please fill up room!");
    if (!description) return seterror("Please fill up description!");
    if (!subject) return seterror("Please fill up subject!");
    seterror("");
    alert("Form Submitted Successfully!. Class Created!");
  };

  return (
    <div className="create-form">
      <div>
        <label>Class Name:</label>
        <input
          type="text"
          value={classname}
          onChange={(e) => setclassname(e.target.value)}
          placeholder="Enter your classname eg:Mathematics:101"
        />
      </div>
      <div>
        <label>Section:</label>
        <input
          type="text"
          value={section}
          onChange={(e) => setsection(e.target.value)}
          placeholder="Enter your section eg:A"
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setsubject(e.target.value)}
          placeholder="Enter your subject eg:mathematics"
        />
      </div>
      <div>
        <label>Room:</label>
        <input
          type="text"
          value={room}
          onChange={(e) => setroom(e.target.value)}
          placeholder="Enter your room no:"
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Enter your description:"
        />
      </div>
      {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
      <button onClick={handleValidate}>Submit</button>
    </div>
  );
}
