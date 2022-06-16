import React from "react";
import "./StudentList.css";
import Student from "./Student";

const StudentList = (props) => {
  const studentComponents = props.student.map((student) => {
    return (
      <li key={student.emailData}>
        <Student name={student.nameData} email={student.emailData}></Student>
      </li>
    );
  });

  return (
    <section>
      <h2 className="student-list__heading">Student List</h2>
      <ul className="student-list">{studentComponents}</ul>
    </section>
  );
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
