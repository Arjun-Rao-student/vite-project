import React from "react";

function Dup_showcase(props) {
  return (
    <div className="flex flex-row gap-5 ">
      <img src={props.img} width={150} height={150}  />
      <div className="ml-5 my-auto">
        <h6 className="flex ">{props.item}</h6>
        <h5 className="font-bold">₹{props.itemprice}</h5>
      </div>
    </div>
  );
}

export default Dup_showcase;
