import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";
import IdCard from "../pages/idCard";
import Refill from "../pages/refill";
import Reservation from "../pages/reservation";
import CancelReservation from "../pages/cancelReservation";
import Admin from "../pages/Admin";

function route() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/home/reservation" element={<Reservation/>}></Route>
                <Route path="/home/refill" element={<Refill/>}></Route>
                <Route path="/home/cancel" element={<CancelReservation/>}></Route>
                <Route path="/home/Card" element={<IdCard/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>

            </Routes>
        </BrowserRouter>
     );
}

export default route;