//import Modal from "../conteiners/Modal";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contexto from "../context/context";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import Swal from "sweetalert2";

var stompClient = null;
export default function SignIn() {
  const URI = "http://ec2-100-24-11-98.compute-1.amazonaws.com:8080";
    //const URI = "http://localhost:8080"
  const navigate = useNavigate();
  const {sessionEntity, setSessionEntity} = useContext(Contexto);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleUserEmail = (e) => {
    const { value } = e.target;
    setCredentials({ ...credentials, email: value });
  };

  const handleUserPassword = (e) => {
    const { value } = e.target;
    setCredentials({ ...credentials, password: value });
  };

  const connect = () => {
    let sock = new SockJS(URI + "/ws");
    stompClient = over(sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    console.log("[INFO] - stomp conected");
    stompClient.subscribe(
      "/response/" + sessionEntity.code + "/private",
      onResponse
    );
    console.log(credentials);
    let signInRequest = {
      email: credentials.email,
      password: credentials.password,
      session_id: sessionEntity.code,
    };
    stompClient.send("/ag/sign-in", {}, JSON.stringify(signInRequest));
  };

  const onError = (e) => {
    console.log(e);
  };

  const stompInit = () => {
    console.log("[INFO] - Initializing stomp");
    connect();
  };

  const onResponse = (payload) => {
    console.log(payload)
    let payloadData = JSON.parse(payload.body);
    setSessionEntity({...sessionEntity, userId: payloadData.data.id});
    if(payloadData.success){
        Swal.fire({
            title: "Exito",
            text: "verificacion exitosa"
        }, "success").then(() => {
          setSessionEntity({...sessionEntity, 
            "userName": payloadData.data.name,
            "email": payloadData.data.email,
            "walletCode": payloadData.data.walletCode});
          navigate("/home");
        })
    }
  }

  const handleSignIn = () => {
    stompInit();
  };

  return (
    <>
      <div className="grid w-full grid-cols-4 lg:grid-cols-12 lg:gap-8 h-[110vh] bg-[#171B26] font-bolder">
        <div className="lg:col-start-5 lg:col-span-4 lg:gap-10 col-span-4 col-start-1 h-[80%] mt-auto mb-auto ml-4 mr-4">
          <div className="bg-[#345262] h-[80%] p-2 rounded-lg text-while lg:col-start-4 lg:col-span-6 gap-4">
            <div>
              <p className="text-[30px] text-center text-white gap-4 m-6 px6">
                INICIO DE SESION
              </p>
            </div>
            <div className="">
              <div className="relative m-3">
                <label className="text-xl text-white top-1 cursor-text">
                  CORREO:{" "}
                </label>
                <input
                  value={credentials.email}
                  className="bg-[#345262] text-base w-[100%] border-b py-1 focus:outline-none mb-10"
                  type="text"
                  style={{ fontFamily: 'Arial' }}
                  onChange={handleUserEmail}
                ></input>
              </div>
              <div className="relative m-3">
                <label className="text-xl text-white top-1 cursor-text">
                  CONTRASEÑA:{" "}
                </label>
                <input
                  type="text"
                  value={credentials.password}
                  className="bg-[#345262] w-[100%] text-base border-b py-1 focus:outline-none mb-10"
                  onChange={handleUserPassword}
                  style={{ fontFamily: 'Arial' }}
                ></input>
              </div>
              <div className="">
                <div
                  className="text-white bg-[#51889D] text-lg text-center rounded-lg m-5 lg:col-start-6 lg:col-span-7 lg:h-[70px] flex justify-center items-center mt-30"
                  onChange={handleUserPassword}
                  type="password"
                >
                  <button onClick={handleSignIn}>INICIAR SESION</button>
                </div>
              </div>
              <div>
                <p className="text-white text-[12px] lg:text-[15px] text-center m-1">
                  ¿No tienes cuenta? <Link to="/home/SingUp">Registrate</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    // </Modal>
  );
}
