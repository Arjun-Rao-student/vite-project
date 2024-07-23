import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import Cards from "./pages/Cards";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto bg-gray-200 justify-around p-8">
        <div>
          <a href="/">
            <h1 className="font-bold text-xl">LOGO</h1>
          </a>
          <ul className="py-4">
            <li className="flex items-center py-2">
              <FaRegAddressCard className="w-6 h-6 mr-2" />
              <span>Address: 4-38/2 VIJAYAWADA,AP</span>
            </li>
            <li className="flex items-center py-2">
              <FaPhoneAlt className="w-6 h-6 mr-2" />
              <span>Phone: +91 6302049295</span>
            </li>
            <li className="flex items-center py-2">
              <MdOutlineMail className="w-7 h-7 mr-2" />
              <span>Email: e-commerce@pub.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">SERVICES</h2>
          <ul className="py-4">
            <li className="py-2 hover:text-green-700">
              <a href="/">Home</a>
            </li>
            <li className="py-2 hover:text-green-700">
              <a href="/">About</a>
            </li>
            <li className="py-2 hover:text-green-700">
              <a href="/">Support</a>
            </li>
            <li className="py-2 hover:text-green-700">
              <a href="/">FaQ</a>
            </li>
            <li className="py-2 hover:text-green-700">
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">CATEGORIES</h2>
          <ul className="py-4">
            <li className="py-2 hover:text-green-700">
           <a href="/vegetables"Vegitables
            </li>
            <li className="py-2 hover:text-green-700">
              <a href="/">Grocery</a>
            </li>
            <li className="py-2 hover:text-green-700">
              <a href="/">Dairy Products</a>
            </li>
            <li className="py-2 hover:text-green-700">
              <a href="/">Natural Items</a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-1">
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32776.297300620245!2d83.1548703322435!3d17.741148764613946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967c285913e03%3A0x2f014d6c1013507e!2sMeghadri%20gedda%20waterfalls!5e0!3m2!1sen!2sin!4v1711099134412!5m2!1sen!2sin"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      </div>
      <div className="flex justify-center bg-gray-200 p-4">
        <p>© 2024 All Rights Reserved by</p>
        <strong>My Team</strong>
      </div>
    </>
  );
}

export default Footer;
