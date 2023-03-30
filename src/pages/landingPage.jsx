import Header from "../components/header";
import Body from "../components/body";
import jaja from "../assets/images/land.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Contexto from "../context/context";

function handleClick() {
  console.log("El botón fue presionado");
}

function App() {

  const {sessionEntity, setSessionEntity} = useContext(Contexto);

  const getSession = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": "admin@admin.com",
      "password": "admin"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://ec2-100-24-11-98.compute-1.amazonaws.com:8080/token", requestOptions)
      .then(response => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", response.headers.get("Authorization"));
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
    
        fetch("http://ec2-100-24-11-98.compute-1.amazonaws.com:8080/session/session-id", requestOptions)
          .then(response => response.json())
          .then(result => {
            setSessionEntity({...sessionEntity, 
              "code": result.data.code
            })
            console.log(sessionEntity);
          }).catch(error => console.log('error', error));
    }).catch(error => console.log('error', error));

}

  useEffect(() =>{
    if(sessionEntity.code === ""){
      getSession();
    }
  },[])

  return (
    <>


      <Header>
        <div className="lg:col-span-3 lg:col-start-1 lg:mr-auto flex justify-center items-center">
          <button className="text-lg lg:text-4xl lg:font-bold">
            Breakig Park
          </button>
        </div>


        <Link to="/home/SignIn" className="lg:col-span-2 lg:col-start-11 text-center flex justify-center items-center col-start-3">
        <div className="lg:col-span-2 lg:col-start-11 text-center flex justify-center items-center col-start-3">
          <button className="text-lg lg:text-2xl lg:font-bold">Iniciar Sesion</button>
        </div>
        </Link>

        <Link to="/home/SignUp" className="lg:col-span-2 lg:col-start-9 lg:row-start-1 text-right flex justify-center items-center col-start-4">
        <div className="lg:col-span-2 lg:col-start-9 lg:row-start-1 text-right flex justify-center items-center col-start-4">
          <button className="text-lg lg:text-2xl lg:font-bold">Registrate</button>
        </div>
        </Link>
      </Header>

      <Body>
        <div className="bg-[#171B26] h-[87vh]">
          <div className=" lg:ml-8 lg:mr-8 ml-4 mr-4">
            <div className="grid lg:grid-cols-12 lg:h-[737px] lg:grid-rows-2 lg:gap-8  grid-cols-4  gap-4 grid-rows-6">
              <div className="lg:col-span-12 lg:col-start-1 flex justify-center items-center row-start-1  col-start-1 col-span-4  ">
                <div className="lg:row-span-1 lg:row-start-1 ">
                  <p className="font-bolder text-white lg:text-[50px]  text-center text-[21px] lg:h-4">
                     ¿Cansado de no encontrar lugar en el <br /> estacionamiento
                    ?{" "}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 lg:col-start-2  lg:row-start-3 row-start-4 col-start-1 col-span-4 ">
                <p className="font-bolder text-white lg:h-[full] lg:text-[30px]  flex text-[21px] text-center ">
                  {" "}
                  <br /><br /> " ¡Di adios a la busqueda eterna de estacionamiento y hola{" "}
                  <br /> a la comodidad con nuestro servicio!"
                </p>

              </div>

              <div className="lg:col-span-2 lg:col-start-3 text-right  col-start-3 col-span-2 lg:row-start-7 row-start-6">
              </div>
              
              <div className="lg:col-span-5 lg:col-start-8 lg:row-start-3 row-start-2 col-start-2 row-span-2   lg:h-2/3 col-span-2 lg:h-90 w-90">
                <br /><br /><img className="lg:h-90 lg:w-90 h-[100%]  w-[full]  "  src={jaja} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
}

export default App;
