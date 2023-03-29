import Header from "../components/header";
import Body from "../components/body";
import jaja from "../assets/images/land.png";
import { Link } from "react-router-dom";

function handleClick() {
  console.log("El botón fue presionado");
}

function App() {
  return (
    <>
      <Header>
        <div className="lg:col-span-3 lg:col-start-1 lg:mr-auto flex justify-center items-center">
          <Link className="lg:col-span-3 lg:col-start-1 lg:mr-auto flex justify-center items-center">
            <button
              className="text-lg lg:text-4xl lg:font-bold"
              onClick={handleClick}
            >
              Breakig Park
            </button>
          </Link>
        </div>

        <div className="lg:col-span-2 lg:col-start-11 lg:row-start-1 text-right flex justify-center items-center col-start-4">
        
        <Link to="/home/SingIn">
          <button className="text-lg lg:text-4xl lg:font-bold">
            Iniciar Sesion
          </button>
          </Link>

        </div>
      </Header>
      <Body>
        <div className="bg-[#171B26] h-[84vh]">
          <div className=" lg:ml-8 lg:mr-8 ml-4 mr-4">
            <div className="grid lg:grid-cols-12 lg:h-[748px] lg:grid-rows-2 lg:gap-8  grid-cols-4  gap-4 grid-rows-6">
              <div className="lg:col-span-12 lg:col-start-1 flex justify-center items-center row-start-1  col-start-1 col-span-4  ">
                <div className="lg:row-span-1 lg:row-start-1 ">
                  <p className="font-bolder text-white lg:text-[70px]  text-center text-[20px] lg:h-4">
                    ¿Cansado de no encontrar lugar en el <br /> estacionamiento
                    ?{" "}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 lg:col-start-2   lg:row-start-4 row-start-4 col-start-1 col-span-4 ">
                <p className="font-bolder text-white lg:h-[full] lg:text-[40px]  flex text-[20px] text-center">
                  {" "}
                  " ¡Di adios a la busqueda eterna de estacionamiento y hola{" "}
                  <br /> a la comodidad con nuestro servicio!"
                </p>
              </div>

              <div className="lg:col-span-2 lg:col-start-4 text-right  col-start-2 col-span-2 lg:row-start-5 row-start-6">
                <Link to="/home">
                  <button
                    onClick={handleClick}
                    className="bg-[#51889D] text-white w-full h-[70px] rounded-lg lg:text-[35px]">
                    Comenzar
                  </button>
                </Link>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 lg:row-start-4 row-start-2 col-start-2  lg:h-2/3 col-span-2 lg:h-90 w-90">
                <img className="h-[100]  w-90  " src={jaja} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
}

export default App;
