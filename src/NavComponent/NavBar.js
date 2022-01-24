import { NavLink } from "react-router-dom";
import "./NavBar.css";
export default function NavBar(){
    return(
        <nav className="navbar">
            <ol>
                <li><NavLink to='/students/showall'>SHOW STUDENTS</NavLink></li>
                <li><NavLink to='/students/add'>ADD STUDENTS</NavLink></li>
            </ol>
        </nav>
    )
}