import Header from "../components/header";
import Body from "../components/body";
import lol from "../assets/images/credit-card.png";
import { PayPalButton } from "react-paypal-button-v2";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contexto from "../context/context";
import SockJS from "sockjs-client";
import { over } from "stompjs";
//import { getUser } from './api';
var stompClient = null;
function Refills() {
  //const URI = "http://ec2-54-157-239-178.compute-1.amazonaws.com:8080";
  const URI = "http://ec2-54-157-239-178.compute-1.amazonaws.com:8080";
  const {sessionEntity, setSessionEntity} = useContext(Contexto);
  const [saldo, setSaldo] = useState(150); // saldo inicial de ejemplo
  //const [currentUser, setCurrentUser] = useState(null);

  const connect = () => {
    let sock = new SockJS(URI + "/ws");
    stompClient = over(sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    console.log("[INFO] - stomp conected");
    stompClient.subscribe("/response/" + sessionEntity.code + "/private", onResponse);
    stompClient.subscribe("/response/" + sessionEntity.code + "/cash", returned);
    getSaldo();
  };

  const onError = (e) => {
    console.log(e);
  };

  const onResponse = (payload) => {
    console.log(payload)
    let payloadData = JSON.parse(payload.body);
    if(payloadData.success){
      console.log("llegue")
      setSaldo(payloadData.data.cash);
      setSessionEntity({...sessionEntity, "cash": payloadData.data.cash})
    }
  }

  const returned = (payload) => {
    let payloadData = JSON.parse(payload.body);
    if(payloadData.success){
      console.log("aquillegue por 2")
      setSaldo(payloadData.data);
    }
  }

  const handlePaypalSuccess = (details, data) => {
    setSaldo(
      () => {
        let addCashRequest = {
          wallet_code: sessionEntity.walletCode,
          cash: parseFloat(details.purchase_units[0].amount.value),
          session_id: sessionEntity.code
        };
        stompClient.send("/ag/add-money-wallet", {}, JSON.stringify(addCashRequest));
      }
    );
  };

  const handlePaypalError = (error) => {
    alert("Error en el pago: " + error);
  };

  const getSaldo = () => {
    let walletDetails = {
      wallet_code: sessionEntity.walletCode,
      session_id: sessionEntity.code
    }
    stompClient.send("/ag/wallet-details", {}, JSON.stringify(walletDetails));
  }

  useEffect(() => {
    connect();
  }, [])

  useEffect(() => {
    console.log(saldo);
  }, [saldo]);

  //const userName = currentUser ? currentUser.name : '';

  return (
    <>
      <Header>
        <div className="lg:col-span-3 lg:col-start-1 lg:mr-auto flex justify-center items-center">
          <Link to="/home">
          <button className="text-lg lg:text-4xl lg:font-bold">
            Breakig Park
          </button>
          </Link>
        </div>

        <div className="lg:col-span-6 lg:col-start-11 lg:row-start-1 text-right flex justify-center items-center col-start-4">
          <button className="text-lg lg:text-4xl lg:font-bold">
            {sessionEntity.userName}
          </button>
        </div>
      </Header>

      <Body>
        <div className="bg-[#171B26] h-[90vh]">
          <div className="lg:ml-8 lg:mr-8 ml-4 mr-4">
            <div className="grid lg:grid-cols-12 lg:h-[738px] lg:grid-rows-6 lg:gap-8  sm:grid-cols-4 sm:gap-4 ">
              <div className="lg:col-span-4 lg:col-start-5 lg:row-start-1 ">
                <img className="h-[full] w-[full]" alt="" src={lol}/>
              </div>
              <div className="lg:col-span-5 lg:col-start-5 lg:row-start-4 text-white">
                <p className="font-bolder text-white lg:text-[40px] text-[20px] lg:text-justify text-center">
                  Tu saldo actual es de ${sessionEntity.cash} Mx
                </p>
              </div>
              <div className="lg:col-span-2 lg:col-start-6 lg:row-start-5 text-white">
                <PayPalButton
                  amount="10.00"
                  currency="USD"
                  onSuccess={handlePaypalSuccess}
                  onError={handlePaypalError}
                  disable-funding="credit,debit"
                />
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
}

export default Refills;