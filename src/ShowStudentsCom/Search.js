import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowStudents from "./ShowStudents";
//import "./search.css"

export function Search(){
    let dispatch=useDispatch();
    let {id}=useParams()
    let [stu,setArr]=useState([]);
    let arr = useSelector((state)=>state.StudReducer);
    useEffect(()=>{
    setArr(arr)
    },[]
     
    )
    console.log(arr);
    return(
        <>
        <table className="table" id="nt">
            {
                arr.map((student)=>{
                    return(
                        (student.studId==id || id.toLocaleLowerCase().includes(student.studName.toLocaleLowerCase()) || id.toLocaleLowerCase().includes(student.studeDepartment) ||id.toLocaleLowerCase().includes(student.studYear.toLocaleLowerCase()))?
                        <tr key={student.studId}>
                            <td>{student.studId}</td>
                            <td>{student.studName}</td>
                            <td>{student.studeDepartment}</td>
                            <td>{student.studYear}</td>
                    </tr>:<></>
                        );
                })
            }
            </table>
        </>
    )
}