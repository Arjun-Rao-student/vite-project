import React from 'react'

function Dup-categories(props) {
  return (
    <>
    <div>
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
                <div className="p-8">
                    <div className="image">
                        <img src={props.img} alt={props.alt} className="w-40 h-40 object-cover rounded-full" />
                        <div className="name mt-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{props.name}</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
    </div>
    </>
  )
}

export default Dup-categories
