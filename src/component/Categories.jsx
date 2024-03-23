import React from 'react'
import Dup_categories from './Dup_categories'
import {Link} from "react-router-dom";
function Categories() {
  return (
    <>
     <div className="text-center my-8">
            <h2 className="text-3xl font-bold  hover:text-green-900 font-sans">Categories</h2>
            <hr className="mt-3 w-24 h-1 rounded mx-auto bg-green-400"/>
        </div>
      <div className="flex flex-row  justify-center">
        <Dup_categories img="public/Categories/vegitables.jpeg" alt="mint" name="Vegetables"/>
        <Dup_categories img="public/Categories/milkproducts.jpeg" alt="Milk " name="Milk Products"/>
        <Dup_categories img="public/Categories/rare1jpeg.jpeg" alt="Speacial Items" name="Speacial Items"/>
        <Dup_categories img="public/Categories/grocery.jpeg" alt="Grocery" name="Groceries"/>
        <Dup_categories img="public/Categories/Organic.jpeg" alt="Organic" name="Comming Soon"/>
    </div>
     </>
  );
}

export default Categories
