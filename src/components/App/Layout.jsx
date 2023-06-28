import { Link, Outlet } from "react-router-dom";
import { Container, Header } from "./App.styled";

export const Layout = () => {
    const handleActiveStyle = ({ isActive }) => {
        return { color: isActive ? "red" : "black", marginRight: 20};
    }
    return (
        <Container>
            <Header>
                <nav>
                    <li><Link to ="/" style={handleActiveStyle}> Home </Link></li>
                    <li><Link to ="/movies" style={handleActiveStyle}> Movies </Link></li>
                   
                </nav>             
            </Header>
            <Outlet> </Outlet>
        </Container>        
        
    );
};

