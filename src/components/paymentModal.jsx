import Swal from "sweetalert2";

function PaymentModal({setModal, setModalReservations}) {

    const CloseModal = () =>{
        setModal(false)
    }

    const Success =()=>{
                Swal.fire({
            position: 'center',
            icon: 'success',
            text: '',
            title: 'Pago realizado',
            showConfirmButton: false,
            background: '#263744',
            color: '#FFFFFF',
            timer: 1800,
            willClose: () =>{
                setModal(false),
                setModalReservations(false)
            }
          })
    }

    const Acep = () =>{
        let timerInterval;
        Swal.fire({
          title: "Procesando pago....",
          heightAuto: true,
          timer: 2000,
          timerProgressBar: false,
            background: '#263744',
            color: '#FFFFFF',
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            clearInterval(timerInterval);
            Success()
          },
        });
    }

  return (
    <>
      <div className="fixed h-[105vh] w-screen bg-[#171B26] bg-opacity-80 z-20 overflow-hidden">
        <div className="grid grid-cols-4 gap-4 ml-4 mr-4 lg:grid-cols-12 lg:gap-8 lg:ml-8 lg:mr-8 h-full">
          <div className="flex justify-center items-center col-start-1 col-span-4 lg:col-start-4 lg:col-span-6">
            <div className="w-[90%] lg:w-[80%] h-[40%] lg:h-[30%] animate-opac bg-[#263744] grid-cols-4 gap-4 rounded-lg grid lg:grid-cols-6">
                <div className="col-span-4 lg:col-span-6 font-bolder flex flex-col lg:flex-row">
                    <p className="h-[50%] w-[100%] lg:h-full lg:w-[70%] text-white lg:text-[25px] text-[20px] flex justify-center items-center">Precio de la reservacion: </p>
                    <p className="h-[50%] w-[100%] lg:h-full lg:w-[30%] text-white lg:text-[25px] text-[20px] flex justify-center items-start lg:items-center">15 Pesos</p>
                </div>
                <div className="col-span-4 lg:col-span-6 font-bolder flex flex-col lg:flex-row">
                    <p className="h-[50%] w-[100%] lg:h-full lg:w-[70%] text-white lg:text-[25px] text-[20px] flex justify-center items-center">Precio por hora o fraccion: </p>
                    <p className="h-[50%] w-[100%] lg:h-full lg:w-[30%] text-white lg:text-[25px] text-[20px] flex justify-center items-start lg:items-center">10 Pesos</p>
                </div>
                <div className="col-span-4 lg:col-span-6 flex justify-around ">
                    <button className="w-[40%] h-[60%] lg:h-[80%] text-white lg:w-[30%] bg-[#51889D] rounded-md font-bolder text-[17px] lg:text-[20px]" onClick={Acep}>Aceptar</button>
                    <button className="w-[40%] h-[60%] lg:h-[80%] text-white lg:w-[30%] bg-[#51889D] rounded-md font-bolder text-[17px] lg:text-[20px]" onClick={CloseModal}>Cancelar</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentModal;
