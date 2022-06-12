import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo></ClassInfo>
      Here's the first rendered student list:
      <StudentList></StudentList>
      Here's the second rendered student list:
      <StudentList></StudentList>
    </main>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
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
