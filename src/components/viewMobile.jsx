import CardCarsDown from "./cardCarsDown";
import CardCarsUp from "./cardCarsUp";

function ViewMobile({Reservations, SlotNumbers, setModalReservations, setLocation, Component }) {
    let indexA = 1;
    let indexB = 1;

    const ComponentsA = SlotNumbers.filter((item) =>
      item.slotNumber.startsWith("A")
    );
    const ComponentsB = SlotNumbers.filter((item) =>
      item.slotNumber.startsWith("B")
    );
    return ( 
        <>
        {ComponentsA.map((items, index) => {
          const start = `lg:col-start-${indexA}`;
          indexA++;
          console.log(items);
          let state;

          Reservations.forEach(element => {
            console.log(element.reservationSlotNumber)
            if (element.reservationSlotNumber == items.slotNumber) {
              state = true;
            }
          });

          return (
            <div className={start} key={index}>
              <CardCarsDown
                state={state}
                slot={Reservations}
                place={items.slotNumber}
                setModal={setModalReservations}
                setLocation={setLocation}
              />
            </div>
          );
        })}
        {ComponentsB.map((items, index) => {
          const starts = `lg:col-start-${indexB}`;
          indexB++;
          console.log(items);
          let state;

          Reservations.forEach(element => {
            console.log(element.reservationSlotNumber)
            if (element.reservationSlotNumber == items.slotNumber) {
              state = true;
            }
          });
  
          return (
            <div className={starts} key={index}>
              <CardCarsUp
                state={state}
                slot={Reservations}
                place={items.slotNumber}
                setModal={setModalReservations}
                setLocation={setLocation}
              />
            </div>
          );
        })}
      </>
    );
}

export default ViewMobile;