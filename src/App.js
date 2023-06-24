import { Routes, Route } from 'react-router-dom';
import { Home } from "components/Home/Home";
import { Header } from "components/Header/Header";

export function App() {
    return(
        <Routes>
            <Route path="/header" element={<Header/>}>
                <Route path="/" element={<Home/>}></Route>
            </Route>
        </Routes>

    )
}
