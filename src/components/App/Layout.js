import { NavLink, Outlet } from "react-router-dom";
import { Ulexeption } from "./App.styled";

const Layout = () => {
    const handleActiveStyle = ({ isActive }) => {
        return { color: isActive ? "red" : "black", marginRight: 20};
    }
    return (
        <div>
            <header>
            <Ulexeption>
                <nav>
                    
                        <li><NavLink to ="" style={handleActiveStyle}> Home </NavLink></li>
                        <li><NavLink to ="/movies" style={handleActiveStyle}> Movies </NavLink></li>
                   
                </nav>
                </Ulexeption> 
                </header>
            <main>
                <Outlet></Outlet>
            </main>
        
            <footer>
            
            </footer>
                
        </div>
    );


};
export default Layout;
