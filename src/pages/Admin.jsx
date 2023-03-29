import Header from "../components/header";
import Body from "../components/body";
import park from "../assets/images/5.png";

import { useState, useEffect } from "react";

function Admin() {
  const hola = () => {
    console.log("hola pendejo1");
  };
  const hola2 = () => {
    console.log("hola pendejo2");
  };
  const hola3 = () => {
    console.log("hola pendejo3");
  };

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
        <div className="bg-[#171B26] lg:h-[84vh] h-[87vh]">
          <div class="lg:ml-8 lg:mr-8 ml-4 mr-4">
            <div class="grid lg:grid-cols-12 lg:h-[748px] lg:grid-rows-6 lg:gap-x-8 lg:gap-y-0  grid-cols-4  gap-7 ">
              <div class=" lg:col-span-8 mt-4 lg:mt-0 lg:col-start-4 flex lg:row-start-2 rounded-lg lg:h-80 h-[90%]   items-center col-span-4 col-start-1  row-start-2 w-full">
               <img className=" " src={park} alt="" />
    
                
              </div>

              
              

              

           
              <div class="lg:col-span-2 lg:col-start-4 lg:row-start-6 col-start-1 col-span-4  row-start-4 flex justify-center items-center bg-[#51889D] rounded-lg h-[60px]">
                <button className="font-bolder text-white text-[20px] lg:text-[35px] ">Quiero PDF</button>
              </div>
              <div class="lg:col-span-2 lg:col-start-7 lg:row-start-6 col-start-1 col-span-4 row-start-5 flex justify-center items-center bg-[#51889D] rounded-lg h-[60px]">
                <button className="font-bolder text-white text-[20px] lg:text-[35px] ">Quiero Tarjeta</button>
              </div>

            </div>
          </div>
        </div>
      </Body>
    </>
  );
}
export default Admin;