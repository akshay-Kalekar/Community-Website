import React from "react";

const Card = ({Title,Description}) => {
  return (
    <div>
      {/*Left side */}
      <div></div>

      {/*Right Side*/}
      <div>
        {/*Heading*/}
        <div>{Title}</div>

        {/*Description*/}
        <div>{Description}</div>
      </div>
    </div>
  );
};

export default Card;
