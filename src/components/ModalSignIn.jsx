//import * as React from "react";
import { Link } from "react-router-dom";


function SingIn() {

    

    return (
        <>
        <div className="grid w-full lg:grid-cols-12 lg:gap-8 h-[110vh] bg-[#171B26] ">
            <div className="lg:col-start-4 lg:col-span-6 lg:gap-10 col-span-4 col-start-2 flex justify-center items-center h-[80%] mt-auto mb-auto">
            <div className="bg-[#345262] p-2 rounded-lg text-while lg:col-start-4 lg:col-span-6 gap-4 ml-[16px] mr-[16px]">
            <div>
                <p className="text-[30px] text-center text-white gap-4 m-6 px6">REGISTRATE</p>
            </div>
            <div className="">
                <form className="lg:col-start-2 lg:col-span-4 ">
                <div className="relative m-3">
                <label className="text-xl text-white top-1 cursor-text">NOMBRE COMPLETO: </label>
                <input className="bg-[#345262] w-[100%] text-base border-b py-1 focus:outline-none"></input>
                </div>
                <div className="relative m-3">
                <label className="text-xl text-white top-1 cursor-text">CORREO: </label>
                <input className="bg-[#345262] text-base w-[100%] border-b py-1 focus:outline-none " type="text"></input>
                </div>
                <div className="relative m-3">
                <label className="text-xl text-white top-1 cursor-text">CONTRASEÑA: </label>
                <input className="bg-[#345262] w-[100%] text-base border-b py-1 focus:outline-none"></input>
                </div>
                <div className="">
                    <div className="text-white bg-[#51889D] text-lg text-center rounded-lg m-5 lg:col-start-6 lg:col-span-7">
                       <button>Resgistrar</button>
                   </div>
                </div>
                <div>
                    <p className="text-white text-[12px] text-center m-1">
                    </p>
                </div>
            </form>
            </div>
        </div>
            </div>
            
        </div>
        </>
    );
}

export default SingIn;