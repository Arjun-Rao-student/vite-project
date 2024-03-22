import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
function Dup_Featured(props ) {
  return (
    <div>
         <div className='flex flex-row justify-center m-8 gap-x-5 '>
        <div className='flex flex-col '>
       <img src={props.img} alt={props.alt} width={180} height={180} />
        <p className='flex justify-center'>{props.name}</p>
        <h1 className='flex justify-center font-bold'>₹{props.price} </h1>
       <div className='flex flex-row justify-center gap-x-4 mt-3'> 
       <button className='p-1 hover:text-green-500'>
        <AiFillHeart />
        </button>
        <button  className='p-1 hover:text-green-500' >
       <FaCartShopping />
       </button>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Dup_Featured