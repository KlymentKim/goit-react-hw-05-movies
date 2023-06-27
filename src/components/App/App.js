import { Routes, Route } from "react-router-dom";
// import { Ulexeption } from "..App.styled";
// import { Ulexeption } from "./components/App/App.styled";
import Layout from "./Layout";
import  Header  from "components/Pages/Header/Header";
import  Home  from "components/Pages/Home/Home";

const App = () => {
   
    return(
        <div>         
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="header" element={ <div> <Header /> </div>} />
                    <Route index element={<Home />} />
                </Route>   
            </Routes>
        </div>

    )
}
export default App;
