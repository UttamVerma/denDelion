import { Router, Routes,Route } from "react-router-dom"
import Homepage from "../Homepage"
import Help from "../Help.jsx";
import Man from "../Man.jsx";
import Woman from "../Woman.jsx";
import Kid from "../Kid";
import Signup from "../Signup.jsx";
import ManIndivisual from "../ManIndivisual";

let AllRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/help" element={<Help/>}></Route>
            <Route path="/Man" element={<Man/>}></Route>
            <Route path="/Woman" element={<Woman/>}></Route>
            <Route path="/Kid" element={<Kid/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/:Name" element={<ManIndivisual/>}></Route>


        </Routes>
    )
}

export default AllRouter;