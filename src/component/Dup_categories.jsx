import React from 'react'
  function Dup_categories(props) {
    return (
         <div className="flex flex-row p-6">
            <div className="flex flex-col justify-center  mt-2">
                <img src={props.img} alt={props.alt} className="w-40 h-40 object-cover rounded-full" />
           <button className=" hover:text-green-400 text-black font-bold py-3 px-3  text-lg font-serif	">{props.name}</button>
            </div>
        </div> 
    );
}

  export default Dup_categories
