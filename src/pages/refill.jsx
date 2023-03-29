import Header from "../components/header";
import Body from "../components/body";
//import lol from "../assets/images/credit-card.png";
import { PayPalButton } from "react-paypal-button-v2";
import { useEffect, useState } from "react";
//import { getUser } from './api';

function Refills() {
  const [saldo, setSaldo] = useState(150); // saldo inicial de ejemplo
  //const [currentUser, setCurrentUser] = useState(null);

  const handlePaypalSuccess = (details, data) => {
    // Aquí podrías enviar una petición al servidor para actualizar el saldo (PAYPAL XD)
    setSaldo(
      (saldo) => saldo + parseFloat(details.purchase_units[0].amount.value)
    ); // aqui actualizamos el saldo local
    alert("Pago exitoso");
  };

  const handlePaypalError = (error) => {
    alert("Error en el pago: " + error);
  };

  useEffect(() => {
    setSaldo(150); //saldo inicial de ejemplo (se puede modificar :p)
    //const userId = 123; // ID del usuario actual (suponiendo que ya lo tienes)
    //getUser(userId).then(user => {
      //setCurrentUser(user);
    //});
  }, []);

  //const userName = currentUser ? currentUser.name : '';

  return (
    <>
      <Header>
        <div className="lg:col-span-3 lg:col-start-1 lg:mr-auto flex justify-center items-center">
          <button className="text-lg lg:text-4xl lg:font-bold">
            Breakig Park
          </button>
        </div>

        <div className="lg:col-span-2 lg:col-start-11 lg:row-start-1 text-right flex justify-center items-center col-start-4">
          <button className="text-lg lg:text-4xl lg:font-bold">
            Brian Taco{"userName"}
          </button>
        </div>
      </Header>

      <Body>
        <div className="bg-[#171B26] h-[84vh]">
          <div className="lg:ml-8 lg:mr-8 ml-4 mr-4">
            <div className="grid lg:grid-cols-12 lg:h-[738px] lg:grid-rows-5 lg:gap-8  sm:grid-cols-4 sm:gap-4 ">
              <div className="lg:col-span-4 lg:col-start-5 lg:row-start-1 ">
                <img className="h-90 w-90" src={lol} alt="" />
              </div>
              <div className="lg:col-span-5 lg:col-start-5 lg:row-start-4 text-white">
                <p className="font-bolder text-white lg:text-[45px] text-[20px] lg:text-justify text-center">
                  Tu saldo actual es de ${saldo.toFixed(2)} Mx
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