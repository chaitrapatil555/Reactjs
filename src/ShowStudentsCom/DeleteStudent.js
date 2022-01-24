import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { delStudents } from "../actions/StudAction";
import { Navigate } from "react-router-dom";


export default function DeleteStudent(){
    let {id}=useParams();
    console.log(id);
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(delStudents(parseInt(id)));
    },[]);
    return (
        <>
        
    <Navigate to="/students/showall"></Navigate>
    
    <h2>Deleted Successfully...!</h2>
</>
    );
}