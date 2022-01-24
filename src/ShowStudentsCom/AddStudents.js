import { useState } from "react";
import React from "react";
import { Student } from "../StudentData/Student";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addStudent } from "../actions/StudAction";
import './AddStudents.css';
import { Button } from '@material-ui/core';
import AddSharpIcon from '@material-ui/icons/AddSharp';

export default function AddStudent(){
   
    let [flag,setFalg]=useState(false);
    let dispatch=useDispatch();
    const [student,setStudent] = useState(new Student());
    const setDetails=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }
    
    const test=(e)=>{
        e.preventDefault();
        console.log(student);
        dispatch(addStudent(student));
        setFalg(true);
        
    }

    return (
        
        <div className="myDiv">
        {/* <div style={{ backgroundImage: 'url("ShowStudentsCom\images.jfif")'}}></div> */}
        <h1>Students Form</h1>
        {flag===false?
            <form onSubmit={test}>
            <div>
                <label>Enter Id:<br/>
                <input type="number" name="studId" value={student.studId} onChange={setDetails}></input>
                </label>
            </div>
            <div>
                <label>Enter Your Name:<br/>
                <input type="text" name="studName" value={student.studName} onChange={setDetails}></input>
                </label>
            </div>    
            <div>
                <label>Enter Your department:<br/>
                <input type="text" name="studeDepartment" value={student.studeDepartment} onChange={setDetails}></input>
                </label>
            </div>
            <div>
                <label>Enter The Year:<br/>
                <input type="text" name="studYear" value={student.studYear} onChange={setDetails}></input>
                </label>
            </div>
            <div>
            
               <Button startIcon={<AddSharpIcon/>} style={{'margin':'10px'}} class="btn btn-outline-success" type="submit" >Add Students</Button>
               <button class="btn btn-outline-danger" type="reset" >Reset</button>
               
            </div>
            </form>
            :<Navigate to="/students/showall"></Navigate>}
        </div>
    )
}