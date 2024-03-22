import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TfiLinkedin } from "react-icons/tfi";
import { FaPinterestP } from "react-icons/fa";
function Nav() {
  return (
    <div className="flex flex-row w-screen bg-gray-300 gap-x-10 p-3 justify-around">
      <div className="flex flex-row gap-x-20 my-auto">
        <button>hello@ecommerce.com</button>
        <p>Free Shipping for all Order of Rs200</p>
      </div>

      <div className="flex flex-row gap-x-20 my-auto">
      <div className="flex flex-row gap-x-3">
      <FaFacebookF />
      <IoLogoTwitter />
      <TfiLinkedin />
      <FaPinterestP />
      </div>
        <button>Location</button>

        <button className="font-bold">Login</button>
      </div>
    </div>
  );
}
export default Nav;