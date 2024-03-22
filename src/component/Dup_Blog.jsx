import React from 'react'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";


function Dup_Blog(props) {
  return (
    <div>
      <div className="bg-green-50 max-w-sm p-3">
        <img src={props.img} alt={props.alt} className="mb-5 w-full size-40" />
        <div className="flex flex-row my-3">
          <IoCalendarNumberOutline size={25} />
          <p className="ml-2 mr-10">{props.date}</p>
          <FiMessageCircle size={25} />
          <p className="ml-2 mr-10">{props.count}</p>
        </div>
        <h1 className="font-bold text-xl text-justify">{props.heading}</h1>
        <p className="text-justify">{props.text}</p>
        <div className="p-3">
          <button className=" p-1 rounded-xl outline-none flex flex-row my-auto ">
            <h4>Read More</h4> <HiArrowLongRight className="my-auto ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dup_Blog
