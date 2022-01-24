import {Student} from './Student';
export class StudentImpl{
    studArray=new Set();
    constructor(){
    this.studArray.add(new Student(1,'chaitra','CSE','FS'));
    this.studArray.add(new Student(2,'abc','ECE','FS'));
    }
    /* getAllStudents(){
        console.log(this.studArray)
        return [...this.studArray];
    } */
    addStudent(stu){
        let newStu = new Student(parseInt(stu.studId),stu.studName,stu.studeDepartment,stu.studYear);
        this.studArray.add(newStu);
        return [...this.studArray];
    }
    searchStudent(stdId){
        return[...this.studArray].find((student)=>student.studId===stdId)
    }
    deleteStudent(stdId){
        let student=this.searchStudent(stdId);
        this.studArray.delete(student);
        console.log(this.studArray)
        return [...this.studArray];
    }
    updateStudent(stu){
        let studId= parseInt(stu.studId);
        let newStu = new Student(parseInt(stu.studId),stu.studName,stu.studeDepartment,stu.studYear);
        let student=this.searchStudent(studId);
        this.studArray.delete(student);
        this.studArray.add(newStu);
        return [...this.studArray];
    }

}