import { NavLink} from "react-router-dom";

export function Header () {
    const handleActiveStyle = ({ isActive }) => {
        return { color: isActive ? "red" : "black", marginRight: 20, fontSize: 20 };
    }

    return <div>

        <div>
            <NavLink to='/' style={handleActiveStyle}>Home</NavLink>
            {/* <NavLink to='/posts' style={handleActiveStyle}>Posts</NavLink>
            <NavLink to='/about' style={handleActiveStyle}>About</NavLink>
            <NavLink to='/contact' style={handleActiveStyle}>Contact</NavLink>
            <NavLink to='/social' style={handleActiveStyle}>Social</NavLink> */}
        </div>
        

        {/* <Outlet></Outlet> */}

    </div>
}
