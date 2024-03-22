import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
function Footer() {
  return (
    <div className="flex   container mx-auto bg-slate-100 justify-center max-w-full">
      <div className="p-5">
        <a href="">
          {" "}
          <b>
            <h1>LOGO</h1>
          </b>
        </a>
        <div>
          <p className="pt-4 flex flex-row ">
            <FaRegAddressCard className="size-6 pr-2" />
            Address:4-38/2 kothapalem
          </p>
          <p className="pt-4 flex flex-row">
            <FaPhoneAlt className="size-6 pr-2" />
            Phone: +91 9553962593
          </p>
          <p className="pt-4 flex flex-row">
            <MdOutlineMail className="size-7 pr-2" />
            Email: e-commerce@pub.com
          </p>
        </div>
      </div>

      <div className="pl-20 pt-5 pb-5 pr-5">
        <h2>
          <b >SERVICES</b>
        </h2>
        <div className="flex flex-col ">
          <p className="pt-4 hover:text-green-700">
            <a href="">Home</a>
          </p>
          <p className="pt-4 hover:text-green-700">
            <a href="">About</a>
          </p>
          <p className="pt-4 hover:text-green-700">
            <a href="">Support</a>
          </p>
          <p className="pt-4 hover:text-green-700">
            <a href="">FaQ</a>
          </p>
          <p className="pt-4 hover:text-green-700">
            <a href="">Blog</a>
          </p>
        </div>
      </div>
      <div className="pl-20 pt-5 pb-5 pr-5">
        <h2>
          <b >CATEGORIES</b>
        </h2>
        <div className="flex flex-col ">
          <p className="pt-4 hover:text-green-700">
            <a href="">Vegitables</a>
          </p>
          <p className="pt-4 hover:text-green-700">
            <a href="">Grocery</a>
          </p>
          <p className="pt-4 hover:text-green-700">
            <a href="">Dairy Products</a>
          </p>
          <p className="pt-4  hover:text-green-700">
            <a href="">Natural Items</a>
          </p>
        </div>
      </div>
      <div className="pl-20 pt-5 pb-5 pr-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32776.297300620245!2d83.1548703322435!3d17.741148764613946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967c285913e03%3A0x2f014d6c1013507e!2sMeghadri%20gedda%20waterfalls!5e0!3m2!1sen!2sin!4v1711099134412!5m2!1sen!2sin"
          width="400"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
