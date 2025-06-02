import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./components/Atv01/Atv01";
import Atv02 from "./components/Atv02/Atv02";
import Atv03 from "./components/Atv03/Atv03";
import Atv04 from "./components/Atv04/Atv04";
import Atv05 from "./components/Atv05/Atv05";

export default function minhasRotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/atv01" element={<Atv01 />} />
            <Route path="/atv02" element={<Atv02 />} />
            <Route path="/atv03" element={<Atv03 />} />
            <Route path="/atv04" element={<Atv04 />} />
            <Route path="/atv05" element={<Atv05 />} />
        </Routes>
        </BrowserRouter>
    );
}
