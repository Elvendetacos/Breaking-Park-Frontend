function ModalCancel({onClose}) {
const close = () =>{
    onClose(false);
    
}

    return ( 
        <>
        <div className="py-6 px-6 lg:px-8 text-center gap-4">
         <div className="text-3xl text-center text-white gap-4 m-5 px-6">
            <p className="">CONFIRMAR</p> 
            <p>CANCELACIÓN</p>
        </div>
        <div className="text-xl text-center text-white gap-4 m-5 px-6">
            <p className="">¿DESEA CANCELAR LA </p>
            <p>RESERVACIÓN?</p>
        </div>
        <div className="grid lg:grid-cols-2 text-lg text-center text-white  ">
        <div className=" lg:col-star-2 lg:col-span-1 m-5">
            <button className="bg-[#51889D] rounded-lg" >ACEPTAR</button>
        </div> 
        <div className=" lg:col-start-5 lg:col-span-1 m-5 ">
             <button  className="bg-[#51889D] rounded-lg" onClick={close} >CANCELAR</button>
        </div>
        </div>
         </div>
        </>
     );
}

export default ModalCancel;