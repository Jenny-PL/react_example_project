import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import Counter from "./components/counter";
import { useState } from "react";

const initialStudentData = [
  {
    nameData: "Ada",
    emailData: "ada@dev.org",
    id: 1,
    isPresentData: true,
  },
  {
    nameData: "Soo-ah",
    emailData: "sooah@dev.org",
    id: 2,
    isPresentData: false,
  },
  {
    nameData: "Chrissy",
    emailData: "chrissy@dev.org",
    id: 3,
    isPresentData: true,
  },
];

const courseList = ["math", "geometry", "biology", "art"];

function App() {
  const [studentData, setStudentData] = useState(initialStudentData);
  const [newCourseList, setCourseList] = useState(courseList);
  const [count, setCounter] = useState(0);

  const handleIncrement = () => {
    console.log("Increment clicked");
    setCounter(count + 1);
  };

  //delete course from list, using filter:
  const deleteOnClick = (key) => {
    const udpatedCourses = newCourseList.filter((course) => course.key !== key);
    setCourseList(udpatedCourses);
  };

  const togglePresence = (updatedStudent) => {
    const studentList = studentData.map((student) => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });
    setStudentData(studentList);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo numberStudents={studentData.length}></ClassInfo>
      <StudentList
        studentData={studentData}
        // an event handler function is passed down here as a prop!
        onUpdateAttendence={togglePresence}
      ></StudentList>
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        courseList={newCourseList}
        deleteOnClick={deleteOnClick}
      ></Counter>
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
