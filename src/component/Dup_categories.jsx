import React from 'react'
  function Dup_categories(props) {
    return (
         <div className="flex flex-row justify-center">
            <div className="flex flex-col  mt-2 md:flex md:flex-col  md:justify-center ">
                <img src={props.img} alt={props.alt} className="w-20 h-20  rounded-full px-5" />
           <button className=" hover:text-green-400 text-black font-bold py-3 px-3  text-lg font-serif	">{props.name}</button>
            </div>
        </div> 
    );
}

  export default Dup_categories
