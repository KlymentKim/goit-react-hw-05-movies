import { Routes, Route } from "react-router-dom";
import { Header } from "components/Pages/Header/Header";
import { Home } from "components/Pages/Home/Home";

export function App() {
    return(
        <div>
            <Routes>
                <Route path="/header" element={<Header />} />
                <Route path="" element={<Home />} />
                
            </Routes>
        </div>

    )
}
