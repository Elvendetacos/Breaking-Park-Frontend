import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";
import IdCard from "../pages/idCard";
import Refill from "../pages/refill";
import Reservation from "../pages/reservation";
import CancelReservation from "../pages/cancelReservation";
import SingUp from "../components/ModalSingUp";
import SingIn from "../components/ModalSignIn"
import Context from '../context/context'
import { useState } from "react";

function route() {
    const [session, setSesion] = useState({
        id: 0,
        code: "",
        userName: "",
        email: "",
        walletCode: "",
    });
    return ( 
        <BrowserRouter>
            <Context.Provider value={{session, setSesion}}>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/home/reservation" element={<Reservation/>}></Route>
                    <Route path="/home/refill" element={<Refill/>}></Route>
                    <Route path="/home/cancel" element={<CancelReservation/>}></Route>
                    <Route path="/home/Card" element={<IdCard/>}></Route>
                    <Route path="/home/SingUp" element={<SingUp/>}></Route>
                    <Route path="/home/SingIn" element={<SingIn/>}></Route>                  
                </Routes>
            </Context.Provider>
        </BrowserRouter>
     );
}

export default route;