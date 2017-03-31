import { observable, action, useStrict } from "mobx";

useStrict(true);

class StudentInfoFactory{
    @observable studentsInfo = [
                              {studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]},
                              {studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]},
                              {studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]},
                              {studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]}
                            ];

    @observable classInfo = [
                            {courseId: 1000, courseName: "Basic Programming"},
                            {courseId: 1001, courseName: "Advanced Programming"},
                            {courseId: 1003, courseName: "DataBase Intro"}
                            ];

    @action getStudentsInfo() {
        return "hej";
    }

    @action getClassInfo() {
        return this.classInfo;
    }



}

//This is only for debugging purposes

export default new StudentInfoFactory();
