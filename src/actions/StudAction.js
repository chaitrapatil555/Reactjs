/* export const ShowStudents=()=>{
    return{
        type:'SHOWSTUDENTS'
    }
} */
export const delStudents=(stdId)=>{
return{
    type:'DELETESTUDENTS',
    payload:stdId
}
}
export const addStudent=(student)=>{
    return{
        type:"ADDSTUDENTS",
        payload:student
    }
}
export const updateStu=(student)=>{
    return{
        type:'UPDATESTUDENT',
        payload:student

    }
}
