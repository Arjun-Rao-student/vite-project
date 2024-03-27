import React from "react";
import Dup_showcase from "./Dup_showcase";

function Showcase(props) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col mt-5 sm:flex-row sm:justify-center sm:gap-20">
          <div className="flex flex-col">
            <div className="flex flex-col mt-10">
              <h2 className="justify-around font-bold text-2xl">
                Latest Products
              </h2>
              <div className="flex flex-col mt-10">
                <Dup_showcase img="../sample_cart/Cap.jpg" item="carrot" itemprice="40" />
                <Dup_showcase img="../sample_cart/leaf.jpg" item="tomato" itemprice="40" />
                <Dup_showcase img="../sample_cart/piece.jpg" item="potato" itemprice="40" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col mt-10">
              <h2 className="justify-around font-bold text-2xl">
                Local Products
              </h2>
              <div className="flex flex-col mt-10">
                <Dup_showcase img="../sample_cart/Cap.jpg" item="carrot" itemprice="40" />
                <Dup_showcase img="../sample_cart/leaf.jpg" item="tomato" itemprice="40" />
                <Dup_showcase img="../sample_cart/piece.jpg" item="potato" itemprice="40" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col mt-10">
              <h2 className=" justify-around font-bold text-2xl">
                Premium Products
              </h2>
              <div className="flex flex-col mt-10">
                <Dup_showcase img="../sample_cart/Cap.jpg" item="carrot" itemprice="40" />
                <Dup_showcase img="../sample_cart/leaf.jpg" item="tomato" itemprice="40" />
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