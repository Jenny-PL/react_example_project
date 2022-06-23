import { useState } from "react";

const NewStudentForm = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
  });

  //the ... spread operator makes a clone of newStudent so that
  //the change is noticed & re-render is triggered.

  const onSubmitAddStudentName = (changeEvent) => {
    setNewStudent({
      ...newStudent,
      name: changeEvent.target.value,
    });
  };

  const onSubmitAddStudentEmail = (changeEvent) => {
    setNewStudent({
      ...newStudent,
      email: changeEvent.target.value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="fullName">Name:</label>
        <input
          name="fullName"
          value={newStudent.name}
          onChange={onSubmitAddStudentName}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          value={newStudent.email}
          onChange={onSubmitAddStudentEmail}
        />
      </div>
      <input type="submit" value="Add student" />
      {/* why is value for input not: value={newStudent}  */}
    </form>
  );
};
export default NewStudentForm;

//   const onNameChange = (event) => {
//     setFormFields({
//         ...formFields,
//         name: event.target.value
//     })
// };

// const onEmailChange = (event) => {
//     setFormFields({
//         ...formFields,
//         email: event.target.value
//     })
// };
