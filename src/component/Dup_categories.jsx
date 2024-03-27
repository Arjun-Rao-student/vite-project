import React from 'react'
  function Dup_categories(props) {
    return (
         <div className="flex flex-row justify-center">
            <div className="flex flex-col  mt-2 md:flex md:flex-col  md:justify-center  ">
                <img src={props.img} alt={props.alt} className="w-40 h-40  rounded-full gap-x-4" />
           <button className=" hover:text-green-400 text-black font-bold py-3 px-3  text-lg font-serif	">{props.name}</button>
            </div>
        </div> 
    );
}

  export default Dup_categories
