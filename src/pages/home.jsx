import Header from "../components/header";
import Body from "../components/body";
import moneda from "../assets/images/coin.svg";
import carro from "../assets/images/car-front.svg";
import tacha from "../assets/images/x-circle.svg";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Contexto from "../context/context";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import Swal from "sweetalert2";

var stompClient = null;
function Home() {

  const {sessionEntity, setSessionEntity} = useContext(Contexto);
  //const URI = "http://ec2-54-157-239-178.compute-1.amazonaws.com:8080";
  const URI = "http://ec2-54-157-239-178.compute-1.amazonaws.com:8080"
  const connect = () => {
    let sock = new SockJS(URI + "/ws");
    stompClient = over(sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    console.log("[INFO] - stomp conected");
    stompClient.subscribe(
      "/response/" + sessionEntity.code + "/cash",
      onResponse
    );
    console.log(sessionEntity)
      if(sessionEntity.walletCode !== ""){
        stompClient.send("/ag/wallet-details", {}, JSON.stringify({
          wallet_code: sessionEntity.walletCode,
          session_id: sessionEntity.code
        }));
      }
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
    if(payloadData.success){
      setSessionEntity({...sessionEntity, "cash": parseFloat(payloadData.data.cash)})
    }
  }

  useState(() => {
    stompInit();
  }, [])

  return (
    <>
      <Header>
        <div className="lg:col-span-3 col-span-2 lg:col-start-1 lg:mr-auto flex justify-center items-center">
          <button className="text-lg lg:text-4xl lg:font-bold">
            Breakig Park
          </button>
        </div>

        <div className=" lg:col-span-2 lg:col-start-11 lg:row-start-1 text-right flex justify-center items-center col-start-4">
          <button className="text-lg lg:text-4xl lg:font-bold">Home</button>
        </div>
      </Header>

      <Body>
        <div className="bg-[#171B26] h-[100vh]">
          <div className="lg:ml-8 lg:mr-8 ml-4 mr-4">
            <div className="grid lg:grid-cols-12 lg:h-[748px] lg:grid-rows-6 lg:gap-x-8 lg:gap-y-0  grid-cols-4  gap-4 ">
              <div className="bg-[#51889D] lg:col-span-8 mt-4 lg:mt-0 lg:col-start-3 flex lg:row-start-2 rounded-lg lg:h-80 h-[140px]   items-center col-span-4 col-start-1 w-full">
                <p className="font-bolder text-white lg:text-[5vw] lg:w-[60%]  text-center w-[60%] text-[25px]">
                  {sessionEntity.userName}
                </p>

                <div className="w-[40%] lg:h-full flex flex-col ">
                  <p className="text-white flex lg:text-[7vw] justify-center items-end h-[65%] lg:h-[75%] text-[25px] font-bolder">
                    {sessionEntity.cash + "$"}
                  </p>
                  <p className="text-white lg:text-[1.5vw]  font-bolder justify-center h-[35%] lg:h-[15%] flex items-start text-[10]">
                    {" "}
                    Saldo disponible{" "}
                  </p>
                </div>
              </div>
              <Link to="/home/refill" className="lg:col-span-4 lg:col-start-3 col-start-1 col-span-2 col-start-1 lg:row-start-5 items-center justify-center flex bg-[#51889D] h-[100%] rounded-lg lg:h-[60%]">
                <img 
                  className="lg:h-4/6 h-3/4 w-1/4 lg:w-[50%] "
                  src={moneda}
                  alt="not found "
                />
                <label 
                className="text-white lg:text-[1.6vw]  
                font-bolder justify-left h-[35%] 
                lg:h-[15%] flex items-center text-[10] w-1/2">recargar</label>
              </Link>


              <Link to="/home/reservation" className="lg:col-span-4 lg:col-start-7 col-start-1 col-span-2 col-start-3 lg:row-start-5 items-center justify-center flex bg-[#51889D] rounded-lg h-[100%] lg:h-[60%]">
                <img
                  className="lg:h-4/6 h-3/4  w-1/4 lg:w-1/2"
                  src={carro}
                  alt="not found"
                />
                <label 
                className="text-white lg:text-[1.6vw]  
                font-bolder justify-left h-[35%] 
                lg:h-[15%] flex items-center text-[10] w-1/2">reservar</label>
              </Link>



              {/* <Link to="/home/cancel" className="lg:col-span-2 lg:col-start-9 col-start-1 col-span-4 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg h-[60px]">
              <div className="lg:col-span-2 lg:col-start-9 col-start-1 col-span-4 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg h-[60px]">
                <img
                  className="lg:h-4/6 h-3/4 w-full lg:w-full"
                  src={tacha}
                  alt="not found"
                />
              </div>
              </Link> */}
           
            </div>
          </div>
        </div>
      </Body>
    </>
  );
}
export default Home;