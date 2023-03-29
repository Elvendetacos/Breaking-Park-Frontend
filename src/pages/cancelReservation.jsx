import { useState } from "react"
import Header from "../components/header";
import Body from "../components/body";
import { Link } from "react-router-dom";



function CancelReservation() {
    const [showModalito, setShowModalito] = useState(false);

    

    const reservas = [
        { nombre: 'Reserva 1', fecha: '2023-04-01', hora: '14:00', lugar: "A-1" },
        { nombre: 'Reserva 2', fecha: '2023-04-02', hora: '16:00', lugar: "A-7" },
        { nombre: 'Reserva 3', fecha: '2023-04-03', hora: '18:00', lugar: "B-1" },
      ];

    return ( 
        <>
        <Header>



        <div className="lg:col-span-4 lg:col-start-1 flex justify-start items-center col-start-1 col-span-1">
          <Link to="/home">
          <p className="lg:text-[30px] text-[20px] ">BREKING PARK</p>
          </Link>
        </div>
        



        <div className="lg:col-span-2 lg:col-start-11 flex justify-center items-center col-start-4 col-span-1">
          <p className="lg:text-center lg:text-[30px] text-[20px]" id="user">User</p>
        </div>
        </Header>
        <Body>
        <div className="grid w-full lg:grid-cols-12 lg:gap-8 h-[110vh] sm:grid-cols-4 sm:gap-4 ">
                <div className="lg:col-start-2 lg:col-span-4 lg:gap-8 sm:col-span-2 sm:gap-4 h-[80%] mt-auto mb-auto">
                    <h1 className="text-white lg:text-center xl:text-4xl text-center md:text-4xl text-xl items-center justify-center flex m-3 font-bolder">RESERVACIONES</h1>
                    <div className="w-[80%] ml-auto mr-auto h-auto text-white" id="error" >
                    <div className="w-full h-screen overflow-auto">
      {reservas.map((reserva, index) => (
        <div className="h-[21%] border-4 w-full font-bolder text-[25px] mb-8" key={index}>
          <h2 className="text-center">{reserva.nombre}</h2>
          <p className="text-center">
            Fecha: {reserva.fecha} - Hora: {reserva.hora} - Lugar: {reserva.lugar}
          </p>
          <button  className="bg-[#51889D] text-center w-full">Cancelar</button>
         
        </div>
      ))}
    </div>



                    </div>

                </div>
                <div className= "mt-auto mb-auto lg:col-start-7 lg:col-span-6 sm:col-span-2 sm:gap-4 col-span-2 col-strar-2 h-[80%] items-center justify-center">
                <div className=" bg-[#263744] grid w-full lg:grid-cols-4 lg:gap-8 h-full sm:grid-cols-4 sm:gap-4 text-white border-[#171B26] border-8 justify-center items-center ">
                    <div className=" lg:col-start-2 lg:col-span-1 lg:gap-8 sm:col-span-2 sm:gap-4 my-8 col-span-1 col-start-2 text-center text-xl">
                    <p className="text-2xl">FILA A</p>
                    <p className="w-40 h-10 m-3 border-4 border-[#263744] border-r-indigo-50 border-y-indigo-50 " id="A1">A-1</p>
                    <p className="w-40 h-10 m-3 border-4 border-[#263744] border-r-indigo-50 border-y-indigo-50" id="A2">A-2</p>
                    <p className="w-40 h-10 m-3 border-4 border-[#263744] border-r-indigo-50 border-y-indigo-50" id="A3">A-3</p>
                    <p className="w-40 h-10 m-3 border-4 border-[#263744] border-r-indigo-50 border-y-indigo-50" id="A4">A-4</p>
                    <p className="w-40 h-10 m-3 border-4 border-[#263744] border-r-indigo-50 border-y-indigo-50" id="A5">A-5</p>
                    <p className="w-40 h-10 m-3 border-4 border-[#263744] border-r-indigo-50 border-y-indigo-50" id="A6">A-6</p>
                    <p className="w-40 h-10 m-3 border-4 border-[#263744] border-r-indigo-50 border-y-indigo-50" id="A7">A-7</p>
                    <p className="w-40 h-10 m-3 border-4 border-[#263744] border-r-indigo-50 border-y-indigo-50" id="A8">A-8</p>
                    </div>
                    <div className="lg:col-start-3 lg:col-span-1 lg:gap-8 sm:col-span-2 sm:gap-4 my-8 col-start-3 col-span-1 text-center text-xl">
                        <p className="text-2xl">FILA B</p>
                        <p className="w-40 h-10 m-3 border-4 border-[#263744] border-l-indigo-50 border-y-indigo-50 " id="B1">B-1</p>
                        <p className="w-40 h-10 m-3 border-4 border-[#263744] border-l-indigo-50 border-y-indigo-50" id="B2">B-2</p>
                        <p className="w-40 h-10 m-3 border-4 border-[#263744] border-l-indigo-50 border-y-indigo-50" id="B3">B-3</p>
                        <p className="w-40 h-10 m-3 border-4 border-[#263744] border-l-indigo-50 border-y-indigo-50" id="B4">B-4</p>
                        <p className="w-40 h-10 m-3 border-4 border-[#263744] border-l-indigo-50 border-y-indigo-50" id="B5">B-5</p>
                        <p className="w-40 h-10 m-3 border-4 border-[#263744] border-l-indigo-50 border-y-indigo-50" id="B6">B-6</p>
                        <p className="w-40 h-10 m-3 border-4 border-[#263744] border-l-indigo-50 border-y-indigo-50" id="B7">B-7</p>
                        <p className="w-40 h-10 m-3 border-4 border-[#263744] border-l-indigo-50 border-y-indigo-50" id="B8">B-8</p>
                         
                        </div>
                    </div>
                </div>
            
            </div>
        </Body>
        </>
     );
}

export default CancelReservation;