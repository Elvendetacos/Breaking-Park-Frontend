//import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import Contexto from "../context/context";
import Swal from "sweetalert2";


export default function SignUp() {
  let stompClient = null;
  const navigate = useNavigate();
  //const URI = "http://ec2-54-157-239-178.compute-1.amazonaws.com:8080"
  const URI = "http://ec2-54-157-239-178.compute-1.amazonaws.com:8080"
  const {sessionEntity, setSessionEntity} = useContext(Contexto);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleName = (e) => {
    const { value } = e.target;
    console.log("[DEBUG] - " + value);
    setCredentials({ ...credentials, "username": value });
  }

  const handleEmail = (e) => {
    const { value } = e.target;
    setCredentials({ ...credentials, "email": value });
  }
  
  const handlePass = (e) => {
    const { value } = e.target;
    setCredentials({ ...credentials, "password": value });
  }

  const connect = () => {
    let sock = new SockJS(URI + "/ws");
    stompClient = over(sock);
    stompClient.connect({}, onConnected, onError);
  }

  const onConnected = () => {
    console.log("[INFO] - stomp conected");
    stompClient.subscribe("/response/" + sessionEntity.code + "/private/users", onResponse);
    let createRequest = {
      name: credentials.username,
      email: credentials.email,
      password: credentials.password,
      session_id: sessionEntity.code
    }
    stompClient.send("/ag/sign-up", {}, JSON.stringify(createRequest));
  };

  const onError = (e) => {
    console.log(e);
  }
  
  const stompInit = () => {
    console.log("[INFO] - Initializing stomp");
    connect();
  }

  const handleRegButton = () => {
    stompInit();
  } 

  const onResponse = (payload) => {
    console.log(payload)
    Swal.fire({
      title: "Exito",
      text: "verifique su Email para confirmar su cuenta"
    }, "success").then(() => {
    navigate("/home/signIn");
    })
  }

  return (
    <>
      <div className="grid w-full lg:grid-cols-12 lg:gap-8 h-[110vh] bg-[#171B26] font-bolder">
        <div className="lg:col-start-5 lg:col-span-4 lg:gap-10 col-span-4 col-start-1 h-[80%] mt-auto mb-auto ml-4 mr-4">
          <div className="bg-[#345262] h-[80%] p-2 rounded-lg text-while lg:col-start-4 lg:col-span-6 gap-4">
            <div>
              <p className="text-[30px] text-center text-white gap-4 m-6 px6">
                REGISTRATE
              </p>
            </div>
            <div className="">
                <div className="relative m-3">
                  <label className="text-xl text-white top-1 cursor-text">
                    NOMBRE COMPLETO:
                  </label>
                  <input value={credentials.username} onChange={handleName} className="bg-[#345262] w-[100%] text-base border-b py-1 focus:outline-none" style={{ fontFamily: 'Arial' }}></input>
                </div>
                <div className="relative m-3">
                  <label  className="text-xl text-white top-1 cursor-text">
                    CORREO:
                  </label>
                  <input
                    value={credentials.email} onChange={handleEmail}
                    className="bg-[#345262] text-base w-[100%] border-b py-1 focus:outline-none text-white"
                    type="email"
                    style={{ fontFamily: 'Arial' }}
                  ></input>
                </div>
                <div className="relative m-3">
                  <label  className="text-xl text-white top-1 cursor-text">
                    CONTRASEÑA:
                  </label>
                  <input type="password" value={credentials.password} onChange={handlePass} className="bg-[#345262] w-[100%] text-base border-b py-1 focus:outline-none mb-10 text-white" style={{ fontFamily: 'Arial' }}></input>
                </div>
                <div className="">
                  <div className="text-white bg-[#51889D] text-lg text-center rounded-lg m-5 lg:col-start-6 lg:col-span-7 lg:h-[70px] flex justify-center items-center mt-30">
                    <button onClick={handleRegButton}>Resgistrar</button>
                  </div>
                </div>
                <div>
                  <p className="text-white text-[12px] text-center m-1"></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
