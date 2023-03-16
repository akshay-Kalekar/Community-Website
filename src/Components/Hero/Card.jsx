import React from "react";

const Card = ({Title,Description,Color}) => {
  return (

    <div className={`w-[40vw] h-[40vh] ${Color ? 'bg-[#B1AFFF]' : 'bg-[#FFC4DC]' } border-black border-2 rounded-2xl flex gap-2 items-center justify-center shadow-[0_10px_10px_0px_rgba(0,0,0,1)]  `}>
      {/*Left side */}
      <div className="w-[45%]]">
      <img src="./moto1.png" className="w-full"/>
      </div>

      {/*Right Side*/}
      <div className="w-[55%]  h-[50vh] flex flex-col gap-3 items-center justify-center">
        {/*Heading*/}
        <div className="text-5xl bold ">{Title}</div>

        {/*Description*/}
        <div className="bold">{Description}</div>
      </div>
    </div>
  );
};

export default Card;
