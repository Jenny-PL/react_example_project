import React from "react";
import { useState } from "react";
import "./Student.css";

const registerForClass = (props) => {
  console.log("congrats,", props.name, "You're registered now!");
  // why doesn't props.name work here?
};

const Student = (props) => {
  const [isPresent, setIsPresent] = useState(false);
  const togglePresence = () => {
    setIsPresent(!isPresent);
  };

  const nameColor = isPresent ? "green" : "red";
  return (
    <div>
      <ul>
        {/* alternate ways to access property value: */}
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props["email"]} </li>
        <li>
          {" "}
          <button
            onClick={() => {
              registerForClass();
            }}
          >
            {" "}
            Register Here
          </button>{" "}
        </li>
      </ul>
      <button onClick={togglePresence}>
        {" "}
        Toggle if {props.name} is present
      </button>
    </div>
  );
};

export default Student;
