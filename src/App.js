import './App.css';

import {Route,Routes} from 'react-router-dom';
import ShowStudents from './ShowStudentsCom/ShowStudents';
import DeleteStudent from './ShowStudentsCom/DeleteStudent';
import AddStudent from './ShowStudentsCom/AddStudents';
import AppBar from './AppBarComponent/AppBar';
import Footer from './FooterComponent/Footer';
import UpdateStudent from './ShowStudentsCom/UpdateStudent';
import { Search } from './ShowStudentsCom/Search';
import Homepage from './ShowStudentsCom/Homepage';
//let studImpl=new StudentImpl();

function App() {
return (
    <div>
      <header>
        <AppBar></AppBar>
      </header>
     
      <Routes>
      <Route path="/" element={<Homepage/>}></Route>
        <Route path="/students/showall" element={<ShowStudents/>}></Route>
        <Route path="/students/add" element={<AddStudent/>}></Route>
        <Route path="/students/delete/:id" element={<DeleteStudent/>}></Route>
        <Route path="/students/update/:id" element={<UpdateStudent/>}></Route>
        <Route path="/students/search/:id" element={<Search/>}></Route>
      </Routes>
      <footer className='footer'>
      <Footer></Footer>
      </footer>

    
    </div>
  );
}

export default App;
