//import Modal from "../conteiners/Modal";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SockJS from "sockjs-client";


var stompClient = null;
function SingUp() {


    
    const URI = "http://ec2-100-24-11-98.compute-1.amazonaws.com:8080"


    const getSession = () => {

 

        //const credentials = `${"admin"}:${"admin"}`;
        //const encodedCredentials = Buffer.from(credentials).toString("base64");
        // fetch(URI + "/token", {
        //     method: "POST",
        //     mode: "cors",
        //     cache: "no-cache",
        //     credentials: "same-origin",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         email: "admin@admin.com",
        //         password: "admin"
        //     }),
        // })
        //     .then((response) => console.log(response.headers))
        //     .then((data) => data2 = data)
        //     .catch((error) => console.error("Error:", error));
        //const uwu = data2.get('Content-Type')
        //console.log(hola)
        //console.log(uwu)

        // fetch(URI + "/session/session-id", {
        //     method: "GET",
        //     mode: "cors",
        //     cache: "no-cache",
        //     credentials: "same-origin",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     }
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         // data2 = data;
        //         connect();
        //     })
        //     .catch((error) => console.error("Error:", error));
    };

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    // const connect = () => {
    //     let sock = new SockJS(URI + "/ws");
    //     stompClient = over(sock);
    //     stompClient.connect({}, onConnected, onError);
    // }

    const onConnected = () => {
        stompClient.subscribe("ag/sign-up");
        stompClient.subscribe("")
    }

    const handleUserEmail = (e) => {
        const { value } = e.target;
        setCredentials({...credentials, "email": value});
    }

    const handleUserPassword = (e) => {
        const { value } = e.target;
        setCredentials({...credentials, "password": value});
    };

    const register = () => {

    }

    useEffect(() => {
        console.log("Alert");
        getSession();
    },[]);


    return (
        <>
            <div className="grid w-full grid-cols-4 lg:grid-cols-12 lg:gap-8 h-[110vh] bg-[#171B26] font-bolder">
                <div className="lg:col-start-5 lg:col-span-4 lg:gap-10 col-span-4 col-start-1 h-[80%] mt-auto mb-auto ml-4 mr-4">
                    <div className="bg-[#345262] h-[80%] p-2 rounded-lg text-while lg:col-start-4 lg:col-span-6 gap-4">
                        <div>
                            <p className="text-[30px] text-center text-white gap-4 m-6 px6">INICIO DE SESION</p>
                        </div>
                        <div className="">
                            <form className="lg:col-start-2 lg:col-span-4 h-auto ">
                                <div className="relative m-3">
                                    <label className="text-xl text-white top-1 cursor-text">CORREO: </label>
                                    <input value={credentials.email} className="bg-[#345262] text-base w-[100%] border-b py-1 focus:outline-none mb-10" type="text" onChange={handleUserEmail}></input>
                                </div>
                                <div className="relative m-3">
                                    <label className="text-xl text-white top-1 cursor-text">CONTRASEÑA: </label>
                                    <input type="text" value={credentials.password} className="bg-[#345262] w-[100%] text-base border-b py-1 focus:outline-none mb-10" onChange={handleUserPassword}></input>
                                </div>
                                <div className="">
                                    <div className="text-white bg-[#51889D] text-lg text-center rounded-lg m-5 lg:col-start-6 lg:col-span-7 lg:h-[70px] flex justify-center items-center mt-30"
                                        onChange={handleUserPassword} type="password">
                                        <button>INICIAR SESION</button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white text-[12px] lg:text-[15px] text-center m-1">
                                        ¿No tienes cuenta? <Link to="/ModalSingIn">Registrate</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>


        // </Modal>
    );
}

export default SingUp;