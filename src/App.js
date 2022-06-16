import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  const studentData = [
    {
      nameData: "Ada",
      emailData: "ada@dev.org",
    },
    {
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
    },
    {
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
    },
  ];

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo></ClassInfo>
      <StudentList student={studentData}></StudentList>
    </main>
  );
}

export default App;

// Alternate way to do the same thing:
// function App() {
//   const studentList = <StudentList></StudentList>;
//   return (
//     <main>
//       <h1>Attendance</h1>
//       {studentList}
//     </main>
//   );
// }

// export default App;
