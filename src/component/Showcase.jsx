import React from "react";
import Dup_showcase from "./Dup_showcase";
Dup_showcase

function Showcase(props) {
  return (
    <>
    <div className="flex flex-row justify-center mt-5 gap-20">
    <div className="">
      <div classname="flex flex-col ">
        <h2 className="justify-around font-bold text-2xl">
          Latest Products
        </h2>
        <div className="flex flex-col mt-10 my-auto">
          <Dup_showcase img="../sample_cart/Cap.jpg" item="carrot" itemprice="40" /><br />
          <Dup_showcase img="../sample_cart/leaf.jpg" item="tomato" itemprice="40" /><br />
          <Dup_showcase img="../sample_cart/piece.jpg" item="potato" itemprice="40" />
        </div>
      </div>
    </div>


      <div className="flex flex-row ml-20 text-sm">
        <div className="flex flex-col justify-center">
          <h2 className="justify-around font-bold text-2xl">
            Local Products
          </h2>
          <div className="flex flex-col mt-10">
            <Dup_showcase img="../sample_cart/Cap.jpg" item="carrot" itemprice="40" /><br />
            <Dup_showcase img="../sample_cart/leaf.jpg" item="tomato" itemprice="40" /><br />
            <Dup_showcase img="../sample_cart/piece.jpg" item="potato" itemprice="40" />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-5 justify-around horizontal-scroll-container ml-20 text-sm">
        <div>
          <h2 className=" justify-around font-bold text-2xl">
            Premium Products
          </h2>
          <div className="flex flex-row scroll-auto w-64">
            <div className="flex flex-col mt-10">
              <Dup_showcase img="../sample_cart/Cap.jpg" item="carrot" itemprice="40" /><br />
              <Dup_showcase img="../sample_cart/leaf.jpg" item="tomato" itemprice="40" /><br />
              <Dup_showcase img="../sample_cart/piece.jpg" item="potato" itemprice="40" />
            </div>
        </div>
      </div>
      </div>
      </div>
      </>
  );
}

export default Showcase;