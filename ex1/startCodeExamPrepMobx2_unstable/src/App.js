import React, { Component } from 'react';
import './App.css';
import StudentInfoFactory from "./dataModel"
import {observer} from "mobx-react";

@observer
class App extends Component {

  render() {
    console.log(StudentInfoFactory);
    var studentInfo = StudentInfoFactory.getStudentsInfo;
    console.log(studentInfo);
    var classInfo = StudentInfoFactory.getClassInfo;

    const studentData = studentInfo.map((student) => {
                    //const registered = (new Date(car.registered)).toISOString().slice(0, 10);
                    return <tr>
                        <td>{student.name}</td>
                        <td>{student.grades[0].grade}</td>
                        <td>{student.grades[1].grade}</td>
                        <td>{student.grades[2].grade}</td>
                        <td></td>
                    </tr>;
                }
            );
    return (
      <div className="App">
        <div className="App-header">
          <h2>React - Exam Preparation Exercise</h2>
        </div>
        <div className="App-intro">
          <table className="table">
            <thead>
            <tr>
              <th></th>
              <th>Basic Programming</th>
              <th>Advanced Programming</th>
              <th>DataBase Intro</th>
              <th>Average Grade:</th>
            </tr>
            </thead>
            <tbody>
              {studentData}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default App;
