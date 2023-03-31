import Body from "../components/body";
import Header from "../components/header";
import Arrow from "../assets/images/arrow-left-short.svg";
import ViewWeb from "../components/viewWeb";
import ModalReservation from "../components/modalReservation";
import { useContext, useState, useEffect } from "react";
import ViewMobile from "../components/viewMobile";
import ModalMap from "../components/modalMap";
import PaymentModal from "../components/paymentModal";
import { Link } from "react-router-dom";
import Contexto from "../context/context";
import SockJS from "sockjs-client";
import { over } from "stompjs";

var stompClient = null;
const Component = [
  {
    key: 1,
    status: false,
  },
  {
    key: 2,
    status: true,
  },
  {
    key: 3,
    status: false,
  },
  {
    key: 4,
    status: true,
  },
  {
    key: 5,
    status: true,
  },
  {
    key: 6,
    status: false,
  },
  {
    key: 7,
    status: false,
  },
  {
    key: 8,
    status: false,
  },
];


function reservation() {
  const URI = "http://ec2-54-157-239-178.compute-1.amazonaws.com:8080"
  const {sessionEntity, setSessionEntity} = useContext(Contexto);
  const [ScreenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [ModalReservations, setModalReservations] = useState(false);
  const [ModalMaps, setModalMaps] = useState(false);
  const [location, setLocation] = useState();
  const [ModalPayment, setModalPayment] = useState(false);
  const [SlotNumber, setSlotNumber] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [Reservation, setReservation] = useState(null);

  const connect = () => {
    let sock = new SockJS(URI + "/ws");
    stompClient = over(sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = fecha.getMonth() + 1; // Agregar 1 ya que los meses en JavaScript comienzan desde 0
    const day = fecha.getDate();

    const javaDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

    let getlist = {
      session_id: "erer8516"//sessionEntity.code,
    };
    let resList = {
      date: javaDate,
      session_id: "erer8516"
    }
    stompClient.subscribe("/response/" + "erer8516" + "/private",onResponse);
    stompClient.subscribe("/response/" + "erer8516" + "/reservations",onResponsedos);
    stompClient.send("/ag/get-slots", {}, JSON.stringify(getlist));
    stompClient.send("/ag/get-reservation", {}, JSON.stringify(resList));
    console.log("[INFO] - stomp conected");


    //console.log(credentials);
  };

  const onError = (e) => {
    console.log(e);
  };

  const onResponse = (payload) => {
    console.log(payload)
    let payloadData = JSON.parse(payload.body);
    if(payloadData.success){
      //aqui deberias hacer cosas con la lista creo xd
      setSlotNumber(payloadData.data)
    }
  }

  const onResponsedos = (payload) => {
    let payloadData = JSON.parse(payload.body);
    if(payloadData.success){
      //aqui deberias hacer cosas con la lista creo xd
      setReservation(payloadData.data)
    }else{
      setReservation([{}]);
    }
  }

  /*const stompInit = () => {
    console.log("[INFO] - Initializing stomp");
    connect();
  };*/

  useEffect(() => {
    //Se toma el tamaño actual de la pantalla
    connect();
    function updateScreenSize() {
      setScreenSize((prevSize) => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }

    
    updateScreenSize(); 
    
    window.addEventListener("resize", updateScreenSize);
    
    return () => {
      window.removeEventListener("resize", updateScreenSize); 
    };
  }, []);

  const maps = () =>{
    setModalMaps(true);
  }
  
  return (
    <>
    {ModalPayment && 
      <PaymentModal location={location} time={time} date={date} setModal={setModalPayment} setModalReservations={setModalReservations}/>
    }
    { ModalMaps && 
      <ModalMap setModal={setModalMaps}/>
    }
      {ModalReservations && (
        <ModalReservation setDate={setDate} setTime={setTime} setModal={setModalReservations} location={location} setModalPayment={setModalPayment} />
      )}
      <Header>
        <div className="lg:col-span-4 lg:col-start-1 flex justify-start items-center col-start-1 col-span-1">
          <p className="lg:text-[30px] text-[20px]">Eustaquio</p>
        </div>
        <div className="lg:col-span-2 lg:col-start-11 flex justify-center items-center col-start-4 col-span-1">
          <p className="lg:text-center lg:text-[30px] text-[20px]">198 MXN</p>
        </div>
      </Header>
      <Body>
        <div className="ml-4 mr-4  grid-cols-4 gap-4 h-[60px] lg:ml-[32px] lg:mr-[32px] lg:gap-8 lg:h-[100px] grid lg:grid-cols-12 c">


          <Link to="/home" >
          <div >
            <img
              src={Arrow}
              className="h-3/4 w-3/4 lg:h-3/4 lg:w-3/4 invert cursor-pointer"
            />
          </div>
          </Link>



          <div className="lg:col-start-5 lg:col-span-4 flex justify-center items-center col-span-2 col-start-2">
            <p className="font-bolder text-white lg:text-[30px] text-[20px] ">
              Selecciona un lugar
            </p>
          </div>
        </div>
        {
            ScreenSize.width < 1024 && (
                <div className="mr-4 ml-4 h-[40px]">
                    <button className="w-1/3 h-full font-bolder text-white text-[20px] underline underline-offset-1" onClick={maps}>Ver mapa</button>
                </div>
            )
        }
        <div></div>
        <div className="ml-4 mr-4 h-auto lg:ml-8 lg:mr-8 lg:h-[80vh] flex justify-center items-center">
          <div className="mt-4 mb-10 lg:mt-0 lg:mb-0 grid grid-cols-4 gap-4 h-[80%] lg:grid-cols-12 lg:gap-8 lg:h-[80%] relative">
            {ScreenSize.width >= 1024 ? (
                //contiene los elementos a renderizar para las vistas web
              SlotNumber &&
              Reservation &&
              <ViewWeb
                Reservations={Reservation}
                SlotNumbers={SlotNumber}
                Component={Component}
                setModalReservations={setModalReservations}
                setLocation={setLocation}
              />
            ) : (
              SlotNumber &&
              Reservation &&
                <ViewMobile
                Reservations={Reservation}
                SlotNumbers={SlotNumber}
                Component={Component}
                setModalReservations={setModalReservations}
                setLocation={setLocation}
                />
            )}
          </div>
        </div>
      </Body>
    </>
  );
}

export default reservation;
