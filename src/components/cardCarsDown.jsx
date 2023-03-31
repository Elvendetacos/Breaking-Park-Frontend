import Car from "../assets/images/car.png";

function CardCarsDown({slot, state, place, item, setModal, setLocation }) {
  // let text = {SlotNumbers};
  console.log(slot);
  
  console.log(place);
  const openModal = () => {
    setModal(true);
    setLocation(place);
  };
  return (
    <>
      <div className="lg:col-start-3 col-span-1 h-[90%] lg:col-span-1 lg:h-[90%] bg-gradient-to-b from-[#263744] rounded-xl">
        {state ? (
          <div className="flex justify-center items-center pt-8 pb-4 w-full lg:pt-8 lg:pb-4 lg:w-full h-[70%]">
            <img
              src={Car}
              className="animate-wiggle h-full rotate-180 object-contain"
            />
          </div>
        ) : (
          <div className="pt-8 pb-4 w-full lg:pt-8 lg:pb-4 lg:w-full h-[70%]">
            <p className="animate-text h-full rotate-90 font-bolder flex justify-center items-center text-white text-[20px]">
              Disponible
            </p>
          </div>
        )}
        <div className="h-[30%] w-full">
          <button
            className="h-full w-full bg-[rgb(52,82,98)] rounded-xl text-[20px] lg:text-[35px] font-bolder text-white"
            onClick={openModal}
          >
            {place}
          </button>
        </div>
      </div>
    </>
  );
}

export default CardCarsDown;
