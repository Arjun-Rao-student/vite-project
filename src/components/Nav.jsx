import React from "react";

function Nav() {
  return (
    <div className="flex flex-row w-screen bg-gray-300 gap-x-10 p-3 justify-around">
      <div className="flex flex-row gap-x-20 my-auto">
        <button>hello@ecommerce.com</button>
        <p>Free Shipping for all Order of Rs200</p>
      </div>
      <div className="flex flex-row gap-x-20 my-auto">
        <button>Location</button>
        <button className="font-bold">Login</button>
      </div>
    </div>
  );
}
export default Nav;