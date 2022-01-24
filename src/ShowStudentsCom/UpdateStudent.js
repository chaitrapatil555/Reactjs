import { useState } from "react";
import { Student } from "../StudentData/Student";
import { updateStu } from "../actions/StudAction";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './AddStudents.css';

export default function UpdateStudent(){
    /* let [flag, setFlag]=useState(false);
    const [student,setStudent] = useState(new Student());
    const setDetails=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }
    let dispatch=useDispatch();
    const test=(e)=>{
        e.preventDefault();
        console.log(student);
        dispatch(updateStu(student));
        setFlag(true);
    } */

    let [flag, setFlag]=useState(false);
    let {id}=useParams();
    
let arr = useSelector((state)=>state.StudReducer);
let s= arr.find((ele)=>ele.studId==id);
console.log(s);
const [student,setStudent] = useState(new Student(s.studId,s.studName,s.studeDepartment,s.studYear));
const setDetails = (e) =>{
    setStudent({...student,[e.target.name]:e.target.value});
}
    let dispatch=useDispatch();
    const test=(e)=>{
        e.preventDefault();
        console.log(student);
        dispatch(updateStu(student));
        setFlag(true);
    }
    return(
        <div className="myDiv">
            {flag===false?
            <form onSubmit={test}>
                <div>
                <label>Enter ID : <br/>
                <input type="number" name="studId" value={student.studId} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Name : <br/>
                <input type="text" name="studName" value={student.studName} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Department : <br/>
                <input type="text" name="studeDepartment" value={student.studeDepartment} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Year : <br/>
                <input type="text" name="studYear" value={student.studYear} onChange={setDetails}></input>
                </label></div><br/>
                <button style={{'margin':'10px'}} class="btn btn-success" type="submit">Update Student</button>
                <button class="btn btn-primary" type="reset">Clear</button>
            </form>:<Navigate to="/students/showall"></Navigate>}
        </div>
    );
}