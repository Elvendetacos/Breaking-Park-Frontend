import CardCarsDown from "./cardCarsDown";
import CardCarsUp from "./cardCarsUp";

function CardWeb({
  SlotNumbers,
  setModalReservations,
  setLocation,
  Component,
  Reservations,
}) {
  let indexA = 3;
  let indexB = 3;
  let hola = [];
  // for (let i = 0; i < SlotNumbers.length; i++){
  //   if(SlotNumbers[i].slotNumber.startsWith('A')){
  //     SlotNumbers[i].slotNumber.push
  //   }
  // }
  // console.log(SlotNumbers)
  console.log(Reservations);
  const ComponentsA = SlotNumbers.filter((item) =>
    item.slotNumber.startsWith("A")
  );
  const ComponentsB = SlotNumbers.filter((item) =>
    item.slotNumber.startsWith("B")
  );

  //   const URI = "http://ec2-100-24-11-98.compute-1.amazonaws.com:8080";

  //   const connect = () => {
  //     let Sock = new SockJS(URI + "/ws");
  //     stompClient = over(Sock);
  //     stompClient.connect({}, onConnected, onError);
  //   };

  // const onConnected = () => {
  //   let getReservations = {
  //     date: moment().format('YYYY-MM-DD')
  //   };

  // }
  // if(Reservations != undefined){
  //   for (let i = 0; i < slot.length; i++){
  //     Reservations[i].reservationSlotNumber == Reservations ? state = true : state = false;
  //   }
  // }

  return (
    <>
      {ComponentsA.map((items, index) => {
        const start = `lg:col-start-${indexA}`;
        indexA++;
        let state;
        console.log(items.slotNumber);
  
        Reservations.forEach(element => {
          console.log(element.reservationSlotNumber)
          if (element.reservationSlotNumber == items.slotNumber) {
            state = true;
          }
        });

        return (
          Reservations && (
            <div className={start} key={index}>
              <CardCarsDown
                state={state}
                slot={Reservations}
                place={items.slotNumber}
                item={items.key}
                setModal={setModalReservations}
                setLocation={setLocation}
              />
              {index != 0 && index < Component.length && (
                <>
                  <div className="absolute inset-y-0 transform -translate-x-5 bg-white w-[6px] rounded-sm"></div>
                </>
              )}
            </div>
          )
        );
      })}
      {ComponentsB.map((items, index) => {
        const starts = `lg:col-start-${indexB}`;
        let state;
        indexB++;
        console.log(items);
        Reservations.forEach(element => {
          console.log(element.reservationSlotNumber)
          if (element.reservationSlotNumber == items.slotNumber) {
            state = true;
          }
        });

        return (
          Reservations && (
            <div className={starts} key={index}>
              <CardCarsUp
                slot={Reservations}
                place={items.slotNumber}
                item={items.slotNumber}
                state={state}
                setModal={setModalReservations}
                setLocation={setLocation}
              />
              {index < Component.length - 1 && (
                <div className="absolute inset-x-0 top-1/2 transform -translate-x-[-17%] -translate-y-1/2 bg-white w-3/4 h-[6px] rounded-sm"></div>
              )}
            </div>
          )
        );
      })}
    </>
  );
}

export default CardWeb;
