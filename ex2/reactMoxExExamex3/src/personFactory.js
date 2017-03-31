//Add imports here
import { observable, action } from "mobx";

class PersonFactory {

  @observable persons = [];

  @action
   getPersons = () => {
     var myInit = {
       method: "GET"
     };

     fetch("http://localhost:4567/api/persons", myInit).then((response) => {
       return response.json();
     }).then((data) => {
       this.persons.replace(data);
       console.log(data);
     });
   }
}

var personFact = new PersonFactory();

window.bingo = personFact;

export default personFact;
