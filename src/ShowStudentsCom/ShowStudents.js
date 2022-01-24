
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import './ShowStudents.css';
import { Button } from '@material-ui/core';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import SearchIcon from '@material-ui/icons/SearchSharp';
import { useState } from 'react';
import SearchSharp from '@material-ui/icons/SearchSharp';


function TableBody(){

    let studAr = useSelector((store)=>store.StudReducer);
    return(
        <>
            {
                studAr.map((student)=>{
                    return(
                        <tr key={student.studId}><td>{student.studId}</td>
                        <td>{student.studName}</td>
                        <td>{student.studeDepartment}</td>
                        <td>{student.studYear}</td>
                        <td><Button startIcon={<DeleteSharpIcon/>} class='btn btn-outline-danger'>
                        <NavLink style={{'color':'black'}} to={`/students/delete/${student.studId}`}>DELETE</NavLink></Button>
                        {/* <td><Button href={`/students/delete/${student.stuId}`} color="primary" variant='conatined'>Delete</Button></td> */}
                        <Button startIcon={<EditSharpIcon/>} class='btn btn-outline-warning'>
                        <NavLink style={{'color':'black'}} to={`/students/update/${student.studId}`}>UPDATE</NavLink></Button></td>
                        </tr>
                    );
                })
            }
        </>
    );
} 
export default function ShowStudents(){
    let [id,setstudId]=useState();
    let setId=(e)=>{
        setstudId(e.target.value);
    }
    return(
        <>
        <div>
                <label>Enter id:</label>
                <input type="number" onChange={setId}></input>
            </div>
            
            <Button startIcon={<SearchSharp/>}><NavLink to={`/students/search/${id}`}>Search</NavLink></Button>
        
            
        <h1 style={{'textAlign':'center'}}>Students Details</h1>
        <table class="table table-striped table-light">
        <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Student Department</th>
                        <th>Student Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <TableBody></TableBody>
                </tbody>
            </table>
            <hr/>
            
        </>
        );
    }
