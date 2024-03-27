import React, { useState } from 'react';
import { IoIosHeart } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row bgr_clr justify-between my-auto py-5">
      <div className="flex items-center gap-x-20 pl-10 my-auto">
        <button className="font-bold hover:text-green-500">Home</button>
        <button className="font-bold hover:text-green-500">Categories</button>
        <button className="font-bold hover:text-green-500">Blog</button>
        <button className="font-bold hover:text-green-500">About</button>
        <button className="font-bold hover:text-green-500"> <Link to='bulkOrder'>Bulk Order </Link></button>
        <div className=" my-auto">
          <input type="text" placeholder='Search Here'  className="p-1 my-auto rounded-l-lg" />
          <button className="p-1 bg-blue-300  rounded-r-lg">Search</button>
        </div>
      </div>
      <div className='flex items-center  mr-10 gap-x-4'>
        <IoIosHeart className='size-6'/>
        <button className="flex flex-row "><FaCartPlus className='size-6'/></button>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col w-full gap-y-2 p-2 bg-gray-100">
          <button className="font-bold hover:text-green-500">Home</button>
          <button className="font-bold hover:text-green-500">Categories</button>
          <button className="font-bold hover:text-green-500">Blog</button>
          <button className="font-bold hover:text-green-500">About</button>
          <button className="font-bold hover:text-green-500">Bulk Order</button>
        </div>
      )}
    </div>
  );
}

export default Header;
