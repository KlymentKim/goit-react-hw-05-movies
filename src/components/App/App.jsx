import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import  {Header}  from "components/Pages/Header/Header";
import { Home } from "components/Pages/Home/Home";


export const App = () => {
      return(   
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="header" element={ <div> <Header /> </div>} />
          <Route index element={<Home />} />
         </Route>   
        </Routes>
        

    );
};

