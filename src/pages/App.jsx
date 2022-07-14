import React, { useState } from 'react';
import './styles.css';
import { Card } from '../components/card';

export default function App() {
 const [studentName, setStudentName] = useState();
 const [students, setStudents] = useState ([]);

 function handleAddStudent(){
  const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString("pt-br", {
hour: '2-digit',
minute: '2-digit',
second: '2-digit',
    })
  };

  setStudents(prevState => [...prevState, newStudent]);
 }

  return (
    <div className="container">
      <header>
    <h1>Attendance List</h1>
    <div>
      <strong>Maria Beatriz</strong>
      <img src="https://github.com/beatriznaufel.png" alt="Profile photo" />
    </div>
    </header>

    <input type="text" 
    placeholder="Type your name"
    onChange={e => setStudentName(e.target.value)}
    />
    <button type="button" onClick={handleAddStudent}>Add</button>

{
  students.map(student => 
  <Card key={student.time} name={student.name} time={student.time}/>)
}
    </div>
  )
}
