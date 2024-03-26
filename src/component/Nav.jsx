import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TfiLinkedin } from "react-icons/tfi";
import { FaPinterestP } from "react-icons/fa";

function Nav() {
  return (
    <div className="flex flex-col arjun md:flex-row items-center justify-between gap-y-6 p-3">
      {/* Navigation section for email and shipping info */}
      <div className="flex flex-col items-center md:items-start md:flex-row gap-y-2 md:gap-y-0 md:gap-x-6">
        <button>hello@ecommerce.com</button>
        <p>Free Shipping for all Orders of Rs 200</p>
      </div>

      {/* Navigation section for social icons, location, and login */}
      <div className="flex items-center md:justify-start md:flex-row gap-6">
        {/* Social icons */}
        <div className="flex gap-3">
          <FaFacebookF />
          <IoLogoTwitter />
          <TfiLinkedin />
          <FaPinterestP />
        </div>

        {/* Location button */}
        <button className="md:ml-auto">Location</button>

        {/* Login button */}
        <button className="font-bold">Login</button>
      </div>
    </div>
  );
}

export default Nav;
