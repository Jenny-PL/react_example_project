import React from "react";
import "./StudentList.css";
import Student from "./Student";
import PropTypes from "prop-types";

const StudentList = (props) => {
  const studentComponents = props.studentData.map((student) => {
    return (
      <li key={student.id}>
        <Student
          id={student.id}
          name={student.nameData}
          email={student.emailData}
          isPresent={student.isPresentData}
          // passing on toggle function as a prop:
          onUpdateAttendence={props.onUpdateAttendence}
        ></Student>
      </li>
    );
  });

  // Destructured way to pass on studentData, instead of all props:
  // const StudentList = ({studentData}) => {
  // const studentComponents= studentData.map((student) => {

  return (
    <section>
      <h2 className="student-list__heading">Student List</h2>
      <ul className="student-list">{studentComponents}</ul>
    </section>
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      isPresentData: PropTypes.bool,
    })
  ),
  onUpdateAttendence: PropTypes.func.isRequired,
};
export default StudentList;

// Alternate way to do this:
// const StudentList = () => {
//   const headingClass = 'student-list__heading';
//   const listClass = 'student-list';

//   return (
//       <section>
//           <h2 className={headingClass}>Student List</h2>
//           <ul className={listClass}>
//               <li>Student A</li>
//               <li>Student B</li>
//               <li>Student C</li>
//           </ul>
//       </section>
//   )
// }
