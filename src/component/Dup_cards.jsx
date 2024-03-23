import React from 'react'
import { IoCartOutline } from "react-icons/io5";
function Dup_cards(props) {
  return (
    <>
      <div className="  w-60 p-2 mt-2 mb-2 bg-white rounded-xl hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mr-4 ">
      <div className='flex flex-col justify-center'>
      <img className="h-40 object-cover rounded-xl  "src={props.img} alt={props.alt}/>
      </div>
      <div className="text-center">
       <h2 className="font-bold text-lg mb-2">{props.name}</h2>
       <p className="text-xl mb-3 " style={{ fontWeight: 'bold', color: 'black', fontFamily: 'Bree serif' }}>
          RS/{props.Dcost}Kg
        </p>
        <span style={{ color: 'gray', textDecoration: 'line-through' }} className='mr-2 '>Rs.{props.Ocost}</span>
        <span style={{ backgroundColor: 'yellow', width: '30px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' , borderTopRightRadius: '10px' , borderBottomRadius: '10px',}}>Save {props.discount}</span>
      </div>
      <div class="flex flex-row justify-center m-2">
      <a role='button' href='#' class="text-black bg-transparent  px-3 py-1 rounded-md hover:bg-purple-700 mr-3  border border-blue-500">Add Cart</a>
      <a role='button' href='#' class="text-white bg-sky-500 px-3 py-1 rounded-md hover:bg-purple-700">Buy Now</a>
          </div>
      </div>
    </>
  );
    
}

export default Dup_cards
