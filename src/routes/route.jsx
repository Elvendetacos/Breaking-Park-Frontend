import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";
import IdCard from "../pages/idCard";
import Refill from "../pages/refill";
import Reservation from "../pages/reservation";
import CancelReservation from "../pages/cancelReservation";
import SignUp from "../components/ModalSignUp";
import SignIn from "../components/ModalSignIn"
import Context from '../context/context'
import { useState } from "react";
import Admin from "../pages/Admin";

function route() {

    const [sessionEntity, setSessionEntity] = useState({
        code: "",
        userName: "",
        email: "",
        cash: 0,
        walletCode: "",
        userId: 0
    });

    return ( 
        <BrowserRouter>
            <Context.Provider value={{sessionEntity, setSessionEntity}}>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/home/reservation" element={<Reservation/>}></Route>
                    <Route path="/home/refill" element={<Refill/>}></Route>
                    <Route path="/home/cancel" element={<CancelReservation/>}></Route>
                    <Route path="/home/Card" element={<IdCard/>}></Route>
                    <Route path="/home/SignUp" element={<SignUp/>}></Route>
                    <Route path="/home/SignIn" element={<SignIn/>}></Route>
                    <Route path="/admin" element={<Admin/>}></Route>                  
                </Routes>
            </Context.Provider>
        </BrowserRouter>
     );
}

export default route;