import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
 
function Students(props) {
 
  const left = (
    <ul>
      {props.students.map((student) => (
        <li key={student.studid}>
          {student.studname}
        </li>
      ))}
    </ul>
  );
 
  const right = props.students.map((student) => (
    <div key={student.studid}>
      <h2>Student Name - {student.studname}</h2>
      <h3>Age - {student.age}</h3>
      <p>City - {student.city}</p>
      <hr />
    </div>
  ));
 
  return (
    <div>
      {left}
      <br />
      {right}
    </div>
  );
}
 
const students = [
  { studid: 1, studname: "Amit", age: 20, city: "Delhi" },
  { studid: 2, studname: "Neha", age: 21, city: "Mumbai" },
  { studid: 3, studname: "Rahul", age: 22, city: "Pune" },
  { studid: 4, studname: "Priya", age: 19, city: "Bhopal" }
];
 
// ✅ React 18 root
const root = createRoot(document.getElementById("root"));
root.render(<Students students={students} />);