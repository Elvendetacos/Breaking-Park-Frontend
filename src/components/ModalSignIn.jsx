//import * as React from "react";
import { Link } from "react-router-dom";


function SingIn() {
    return (
        <>
        <div className="py-6 px-6 lg:px-8 text-center ml-[16px] mr-[16px] m-[16px]">
        <div className="text-5xl text-center text-white gap-4 m-6 px-6">
            <p className="">REGISTRO</p>
        </div>
            <div className="text-left">
                <form className="lg:col-start-2 lg:col-span-4 ">
                <div className="relative">
                <label className="text-2xl text-white m-0 absolute left-0 top-1 cursor-text ">NOMBRE COMPLETO: </label>
                <input className="border-b py-1 bg-[#345262] w-[100%] text-base focus:outline-none" type="text" id="Name" />
                </div>
                <div className="relative">
                <label className="text-2xl text-white m-0 absolute top-1 cursor-text" >CORREO: </label>
                <input className="bg-[#345262] text-base fond-light  w-[100%] border-b py-1 focus:outline-none" type="email"/>
                </div>
                <div className="relative">
                <label className="text-2xl text-white m-0 absolute top-1 cursor-text" >CONTRASEÑA: </label>
                <input className="bg-[#345262] border-b py-1 w-[100%] text-base focus:outline-none" type="password" id="Password"/>
                </div>
               
                
                <div className="">
                    <div className="bg-[#51889D] text-lg text-center rounded-lg m-5 lg:col-start-2 lg:col-span-2">
                    <button className="">REGISTRARSE</button>
                    </div>
                </div>
                    <div>
                    <p className="text-[12px] text-center m-1">
                        ¿Ya tienes cuenta? <Link to="/ModalSingUp">Inicia de sesion</Link>
                    </p>
                    </div>

                
            </form>
            </div>
        </div>
        </>
        
     );
}

export default SingIn;