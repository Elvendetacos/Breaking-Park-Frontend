const Component = [
  {
    key: "A-1",
    status: false,
  },
  {
    key: "A-2",
    status: false,
  },
  {
    key: "A-3",
    status: false,
  },
  {
    key: "A-4",
    status: false,
  },
  {
    key: "A-5",
    status: false,
  },
  {
    key: "A-6",
    status: false,
  },
  {
    key: "A-7",
    status: false,
  },
  {
    key: "A-8",
    status: false,
  },
  {
    key: "B-1",
    status: false,
  },
  {
    key: "B-2",
    status: false,
  },
  {
    key: "B-3",
    status: false,
  },
  {
    key: "B-4",
    status: false,
  },
  {
    key: "B-5",
    status: false,
  },
  {
    key: "B-6",
    status: false,
  },
  {
    key: "B-7",
    status: false,
  },
  {
    key: "B-8",
    status: false,
  },
];

function modalMap({setModal}) {

  const closeModal = () =>{
    setModal(false);
  }


  const ComponentsA = Component.filter(item => item.key.startsWith('A'))
  const ComponentsB = Component.filter(item => item.key.startsWith('B'))

  const MapsParking = [];
  for (let i = 0; i < Component.length / 2; i++) {
    MapsParking.push(
      <>
        <div className="border-r-4 border-b-2 border-t-2 flex justify-center items-center font-bolder border-white"><p className="text-white text-[20px]">{Component[i].key}</p></div>
        <div className="border-l-4 border-b-2 border-t-2 flex justify-center items-center font-bolder border-white"><p className="text-white text-[20px]">{Component[i+Component.length/2].key}</p></div>
      </>
    );
  }

  let indexMap = 1;
  return (
    <>
      <div className="fixed h-[105vh] w-screen bg-[#171B26] bg-opacity-80 z-10 overflow-hidden" onClick={closeModal}>
        <div className="grid grid-cols-4 gap-4 ml-4 mr-4 lg:grid-cols-12 lg:gap-8 lg:ml-8 lg:mr-8 h-full">
          <div className="flex justify-center items-center col-start-1 col-span-4 lg:col-start-4 lg:col-span-6">
            <div className="w-full h-[70%] animate-opac bg-[#263744] grid-cols-4 gap-4 rounded-lg grid lg:grid-cols-6 lg:gap-8">
              <p className="pl-5 pt-2 text-center text-white font-bolder text-[20px]">Entrada&gt;&gt;</p>
              <div className="col-start-2 col-span-2 h-[80%] mt-auto mb-auto grid grid-cols-2 grid-rows-8">
              {MapsParking}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default modalMap;
