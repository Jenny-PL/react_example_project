import React from "react";
// import { useState } from "react";
import "./Student.css";
import PropTypes from "prop-types";

const Student = (props) => {
  // const [isPresent, setIsPresent] = useState(false);
  // const togglePresence = () => {
  //   setIsPresent(!isPresent);
  // };

  const registerForClass = () => {
    console.log("congrats, ", props.name, "You're registered now!");
  };

  const onAttendenceButtonClick = () => {
    const updatedStudent = {
      id: props.id,
      nameData: props.name,
      emailData: props.email,
      isPresentData: !props.isPresent,
    };
    props.onUpdateAttendence(updatedStudent);
  };

  const nameColor = props.isPresent ? "green" : "red";
  return (
    <div>
      <ul>
        {/* alternate ways to access property value: */}
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props["email"]} </li>
        <i> {props.name}</i>
        <li>
          <button
            onClick={() => {
              registerForClass();
            }}
          >
            Register Here
          </button>
        </li>
      </ul>
      <button onClick={onAttendenceButtonClick}>
        {/* <button onClick={togglePresence}> */}
        Toggle if {props.name} is present
      </button>
      {/* why can't I display value of isPresent?  See below */}
      <p>{props.isPresent}</p>
      {console.log(
        "Why can't I display value of props.isPresent in student.js line 38?"
      )}
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPresent: PropTypes.bool.isRequired,
  onUpdateAttendence: PropTypes.func.isRequired,
};

export default Student;
