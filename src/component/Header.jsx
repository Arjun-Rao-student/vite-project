import React from 'react'
import { IoIosHeart } from "react-icons/io";
import { FaCartbuttonlus } from "react-icons/fa";




function Headder() {
  return (
    <>
    <div className='flex flex-row bg-slate-300 justify-around '>
        <div className='flex flex-row gap-x-9 '>
            <button>Home</button>
            <button>Categories</button>
            <button>Blog</button>
            <button>About Us</button>
        </div>
    </div>
      
      </>
  );
}

export default Headder
