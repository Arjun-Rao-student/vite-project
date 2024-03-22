import React from 'react'
import { IoIosHeart } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";




function Header() {
  return (
    <div className="flex flex-row bgr_clr justify-around my-auto py-5">
        <div className="flex flex-row gap-x-20 pl-10 my-auto">
          <button className="font-bold hover:text-green-500">Home</button>
          <button className="font-bold  hover:text-green-500"> Categories</button>
          <button className="font-bold  hover:text-green-500">Blog</button>
          <button className="font-bold hover:text-green-500">About</button>
          <div className=" my-auto">
            <input type="text" placeholder='Search Here'  className="p-1 my-auto rounded-l-lg" />
            <button className="p-1 bg-blue-300  rounded-r-lg">Search</button>
          </div>
        </div>
        <div className='flex flex-row justify-end hea ml-8 gap-x-1'><IoIosHeart  className='size-6'/>
          <button className="flex flex-row "><FaCartPlus className='size-6'/></button>
        </div>
      </div>
  );
}

export default Header
