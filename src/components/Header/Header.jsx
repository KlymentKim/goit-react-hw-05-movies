
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header() {
    const handleActiveStyle = ({ isActive }) => {
        return { color: isActive ? "red" : "black", marginRight: 20 };
    } 
    return <div>
             
    <div>
                    <NavLink to='/' style={handleActiveStyle}>Home</NavLink>
                    <NavLink to='/movies' style={handleActiveStyle}>Movies</NavLink>
                    </div>
                    <Outlet></Outlet>

    </div>
};