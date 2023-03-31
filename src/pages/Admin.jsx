import Header from "../components/header";
import Body from "../components/body";
import park from "../assets/images/5.png";
import { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import { over } from "stompjs";
var stompClient = null;

function Admin() {
  //const URI = "http://ec2-54-157-239-178.compute-1.amazonaws.com:8080";
  const URI = "http://ec2-54-157-239-178.compute-1.amazonaws.com:8080"
  const [email, setEmail] = useState({
    email: ""
  })

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail({ ...email, "email": value});
  }

  const connect = () => {
    let sock = new SockJS(URI + "/ws");
    stompClient = over(sock);
    stompClient.connect({}, onConnected, onError);
  };
  
  const onConnected = () => {
    console.log("[INFO] - stomp conected");
  };
  
  const onError = (e) => {
    console.log(e);
  };

  const getReport = () => {
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = fecha.getMonth() + 1; // Agregar 1 ya que los meses en JavaScript comienzan desde 0
    const day = fecha.getDate();

    const javaDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

    let getdate = {
      date: javaDate 
    };
    stompClient.send("/ag/get-report-admin", {}, JSON.stringify(getdate));
  }

  const getWallet = () => {
    let createWalletRequest = {
      user_email: email.email,
      session_id: "sdf322"
    }
    stompClient.send("/ag/create-wallet-request", {}, JSON.stringify(createWalletRequest));
  }

  useEffect(() => {
    connect()
  })
  
  const [cardID, setCardID] = useState(true);

  return (
    <>
           <Header>
        <div className="lg:col-span-3 col-span-2 lg:col-start-1 lg:mr-auto flex justify-center items-center ">
          <button className="text-lg lg:text-4xl  lg:font-bold ">
            Breakig Park
          </button>
        </div>

        <div className="lg:col-span-2 col-span-2 lg:col-start-11 lg:row-start-1 text-right flex justify-center items-center col-start-4">
          <button className="text-lg lg:text-4xl lg:font-bold">
            Brian Taco
          </button>
        </div>
      </Header>
      <Body>
        <div className="bg-[#171B26] h-[90vh]">
          <div className="lg:ml-8 lg:mr-8 ml-4 mr-4">
            <div className="grid lg:grid-cols-12 lg:h-[745px]  lg:grid-rows-6  lg:gap-x-8 lg:gap-y-0  grid-cols-4  gap-7 ">
              <div className=" lg:col-span-8 mt-4 lg:mt-0 lg:col-start-4 flex lg:w-[70%] lg:row-start-2 lg:h-60 h-[90%] items-center col-span-4 col-start-1  row-start-2 w-full">
               <img className=" " src={park} alt="" />
              </div>
              <div className="lg:col-span-5 lg:col-start-4 lg:row-start-5 col-start-2 col-span-4  row-start-6">
              <input value={email.email} onChange={handleEmail} className=" bg-[#51889D] rounded-lg h-[60px] w-full text-white text-center"  type="email" placeholder="Ingresa un correo" />
              </div>
              <div class="lg:col-span-2 lg:col-start-4 lg:row-start-6 col-start-1 col-span-5  row-start-4 flex justify-center items-center bg-[#51889D] rounded-lg h-[60px]">
                <button className="font-bolder text-white text-[20px] lg:text-[35px] " onClick={getReport}>Quiero PDF</button>
              </div>
              <div className="lg:col-span-2 lg:col-start-7 lg:row-start-6 col-start-1 col-span-5 row-start-5 flex justify-center items-center bg-[#51889D] rounded-lg h-[60px]">
                <button className="font-bolder text-white text-[20px] lg:text-[30px] " onClick={getWallet}>Quiero Tarjeta</button>
              </div>

            </div>          
          </div>
       </div>
      </Body>
    </>
  );
}
export default Admin;