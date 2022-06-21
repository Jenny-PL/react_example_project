import React from "react";
import Proptypes from "prop-types";

const ClassInfo = ({ numberStudents }) => {
  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {numberStudents}</li>
      </ul>
    </section>
  );
};

ClassInfo.propTypes = {
  numberStudents: Proptypes.number.isRequired,
};

export default ClassInfo;
