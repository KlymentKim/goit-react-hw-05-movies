import { Routes, Route, NavLink } from "react-router-dom";
import { Layout } from "./Layout";
// import { Header }  from "components/Pages/Header/Header";
import { Home } from "components/Pages/Home/Home";
import { Container, Header } from "./App.styled";


export const App = () => {
    const handleActiveStyle = ({ isActive }) => {
        return { color: isActive ? "red" : "black", marginRight: 20};
    }
      return(   
    <Container>
       <Header>
            <nav>
            <ul>
                <li><NavLink to ="/" end style={handleActiveStyle}> Home </NavLink></li>
                <li><NavLink to ="/movies" style={handleActiveStyle}> Movies </NavLink></li>
            </ul>
                
            
            </nav>             
        </Header>
        
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="header" element={ <div> <Header /> </div>} />
          <Route index element={<Home />} />
          
        </Routes>

    </Container>       
       
        

    );
};

