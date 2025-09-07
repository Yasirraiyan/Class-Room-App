import React, { useState } from "react";
import "./Create.css"; // Ensure Create.css is in same folder
import Create from "./Create"; // If you have separate Create.js

export default function Teacher() {
  const [showform, setshowform] = useState(false);

  return (
    <div className="teacher-container">
      <button onClick={() => setshowform(!showform)}>Create(+)</button>
      {showform && <Create />}
    </div>
  );
}
