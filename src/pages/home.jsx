import Header from "../components/header";
import Body from "../components/body";
import moneda from "../assets/images/coin.svg";
import carro from "../assets/images/car-front.svg";
import tacha from "../assets/images/x-circle.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const hola = () => {
    console.log("xd");
  };
  const hola2 = () => {
    console.log("xd2");
  };
  const hola3 = () => {
    console.log("3");
  };

  const [cardID, setCardID] = useState(true);

  return (
    <>
      <Header>
        <div className="lg:col-span-3 lg:col-start-1 lg:mr-auto flex justify-center items-center">
          <button className="text-lg lg:text-4xl lg:font-bold">
            Breakig Park
          </button>
        </div>


        <Link to="/home/SingIn" className="lg:col-span-2 lg:col-start-11 text-center flex justify-center items-center col-start-3">
        <div className="lg:col-span-2 lg:col-start-11 text-center flex justify-center items-center col-start-3">
          <button className="text-lg lg:text-4xl lg:font-bold">Registar</button>
        </div>
        </Link>

        <Link to="/home/reservation" className="lg:col-span-2 lg:col-start-9 lg:row-start-1 text-right flex justify-center items-center col-start-4">
        <div className="lg:col-span-2 lg:col-start-9 lg:row-start-1 text-right flex justify-center items-center col-start-4">
          <button className="text-lg lg:text-4xl lg:font-bold">Reservar</button>
        </div>
        </Link>
      </Header>

      <Body>
        <div className="bg-[#171B26] h-[84vh]">
          <div className="lg:ml-8 lg:mr-8 ml-4 mr-4">
            <div className="grid lg:grid-cols-12 lg:h-[748px] lg:grid-rows-6 lg:gap-x-8 lg:gap-y-0  grid-cols-4  gap-4 ">
              <div className="bg-[#51889D] lg:col-span-8 mt-4 lg:mt-0 lg:col-start-3 flex lg:row-start-2 rounded-lg lg:h-80 h-[140px]   items-center col-span-4 col-start-1 w-full">
                <p className="font-bolder text-white lg:text-[5vw] lg:w-[60%]  text-center w-[60%] text-[25px]">
                  El vende tacos
                </p>

                <div className="w-[40%] lg:h-full flex flex-col ">
                  <p className="text-white flex lg:text-[7vw] justify-center items-end h-[65%] lg:h-[75%] text-[25px] font-bolder">
                    $0.90
                  </p>
                  <p className="text-white lg:text-[1.5vw]  font-bolder justify-center h-[35%] lg:h-[15%] flex items-start text-[10]">
                    {" "}
                    Saldo disponible{" "}
                  </p>
                </div>
              </div>
              <Link to="/home/refill" className="lg:col-span-2 lg:col-start-3 col-start-1 col-span-4 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg h-[60px]">
              <div className="lg:col-span-2 lg:col-start-3 col-start-1 col-span-4 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg h-[60px]">
               
                <img 
                  onClick={hola}
                  className="lg:h-4/6 h-3/4 w-full lg:w-full "
                  src={moneda}
                  alt="not found "
                />
              </div>
              </Link>


              <Link to="/home/reservation" className="lg:col-span-2 lg:col-start-6 col-start-1 col-span-4 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg h-[60px]">
              <div className="lg:col-span-2 lg:col-start-6 col-start-1 col-span-4 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg h-[60px]">
                <img
                  onClick={hola2}
                  className="lg:h-4/6 h-3/4 w-full lg:w-full"
                  src={carro}
                  alt="not found"
                />
              </div>
              </Link>



              <Link to="/home/cancel" className="lg:col-span-2 lg:col-start-9 col-start-1 col-span-4 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg h-[60px]">
              <div className="lg:col-span-2 lg:col-start-9 col-start-1 col-span-4 lg:row-start-5 items-center flex bg-[#51889D] rounded-lg h-[60px]">
                <img
                  onClick={hola3}
                  className="lg:h-4/6 h-3/4 w-full lg:w-full"
                  src={tacha}
                  alt="not found"
                />
              </div>
              </Link>
           
            </div>
          </div>
        </div>
      </Body>
    </>
  );
}
export default Home;