import Car from "../assets/images/car-left.png";
import Arrow from "../assets/images/arrow.png";
import WheelChair from "../assets/images/wheelchair.png";

function ModalReservation({setTime, setDate ,setModal, location, setModalPayment }) {

  const Payment = () => {
    setModalPayment(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="fixed h-[105vh] w-screen bg-[#171B26] bg-opacity-80 z-10 overflow-hidden">
        <div className="grid grid-cols-4 gap-4 ml-4 mr-4 lg:grid-cols-12 lg:gap-8 lg:ml-8 lg:mr-8 h-full">
          <div className="flex justify-center items-center col-start-1 col-span-4 lg:col-start-4 lg:col-span-6">
            <div className="w-full h-[70%] lg:h-[80%] animate-opac bg-[#263744] grid-cols-4 gap-4 rounded-lg grid lg:grid-cols-6 lg:gap-8">
              <div className="col-start-1 col-span-4 lg:col-start-2 lg:col-span-4 h-full">
                <div className="flex justify-center items-center h-[10%]">
                  <p className="font-bolder text-white text-[30px]">{`Informacion del lugar ${location}:`}</p>
                </div>
                <div className="flex justify-center items-center h-[15%] mt-[5%]">
                  <img src={Car} className="h-full w-full object-contain" />
                </div>
                <div className="flex h-[10%] mt-[10%] justify-center items-center">
                  <img
                    src={Arrow}
                    className="h-full w-10 lg:w-1/6 object-contain"
                  />
                  <p className="w-1/6 flex justify-center items-center font-bolder text-white lg:text-[30px] text-[20px]">
                    3 M
                  </p>
                  <img
                    src={Arrow}
                    className="h-full w-10 lg:w-1/6 object-contain rotate-90"
                  />
                  <p className="w-1/6 flex justify-center items-center font-bolder text-white lg:text-[30px] text-[20px]">
                    6 M
                  </p>
                  <img
                    src={WheelChair}
                    className="h-full w-10 lg:w-1/6 object-contain brightness-0"
                  />
                  <p className="w-1/6 flex justify-center items-center font-bolder text-white lg:text-[30px] text-[20px]">
                    No
                  </p>
                </div>
                <div className="flex h-[20%] mt-[5%] flex-wrap">
                  <p className="w-1/2 h-1/2 flex justify-center items-center font-bolder text-white text-[30px]">
                    Fecha:
                  </p>
                  <p className="w-1/2 h-1/2 flex justify-center items-center font-bolder text-white text-[30px]">
                    Hora:
                  </p>
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    className="ml-[5%] w-2/5 h-2/5 rounded-md font-bolder text-center text-white bg-[#345262] text-[20px]"
                  />
                  <input
                    type="time"
                    onChange={(e) => setTime(e.target.value)}
                    className="ml-[10%] w-2/5 h-2/5 rounded-md font-bolder text-center text-white bg-[#345262] text-[20px]"
                  />
                </div>
                <div className="flex h-[7%] mt-[10%] justify-around">
                  <button
                    className="w-1/3 h-full bg-[#51889D] text-white font-bolder text-[20px] rounded-md"
                    onClick={Payment}
                  >
                    Aceptar
                  </button>
                  <button
                    className="w-1/3 h-full bg-[#51889D] text-white font-bolder text-[20px] rounded-md"
                    onClick={closeModal}
                  >
                    Cancelar
                  </button>
                </div>
                <div className="flex h-[10%] mt-[3%]">
                  <p className="text-white text-[15px] text-center">
                    El pago de la reservacion se hara para tener una hora
                    apartada una vez en el lugar se le cobrara por tiempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalReservation;
