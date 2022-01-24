import {StudentImpl} from '../StudentData/StudentImpl';
let studentImpl=new StudentImpl();
export const StudReducer=(state=[...studentImpl.studArray],action)=>{
        switch(action.type){
                case 'SHOWSTUDENTS': {
                        state= studentImpl.getAllStudents();
                        return state;
                }
                case 'DELETESTUDENTS': {
                        state= studentImpl.deleteStudent(action.payload);                
                        return state;
                }
                case "ADDSTUDENTS":{
                    state=studentImpl.addStudent(action.payload);
                    return state;
                }
                case 'UPDATESTUDENT':{
                        state=studentImpl.updateStudent(action.payload);
                        return state;
                    } 
                default: return state;
        }
}