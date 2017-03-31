import React, { Component } from "react";
import { observer } from "mobx-react"
import personFact from "./personFactory"

@observer
class PersonTable extends Component {
  constructor(){
    super();
    personFact.getPersons();
  }

  render() {
    const makeTable = personFact.persons.map((person, index) => {
      return <tr key={index}><td>{person.age}</td><td>{person.name}</td><td>{person.gender}</td><td>{person.email}</td><td>{person.friends.map((friend) => {return friend.name + ", "})}</td></tr>
    });

    return (
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th><th>Friends</th></tr>
        </thead>
        <tbody>
          {makeTable}
        </tbody>
      </table>
    );
  }
}
export default PersonTable;
