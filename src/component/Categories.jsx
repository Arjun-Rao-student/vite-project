import React from 'react';
import Dup_categories from './Dup_categories';
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold hover:text-green-900 font-sans">Categories</h2>
        <hr className="mt-3 w-24 h-1 rounded mx-auto bg-green-400" />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-x-12">
        {/* First row */}
        <div className="flex flex-row justify-center mb-4 md:mb-0 gap-x-12">
          <Link to="vegetables"><Dup_categories img="Categories/vegitables.jpeg" alt="mint" name="Vegetables" /></Link>
          <Dup_categories img="Categories/milkproducts.jpeg" alt="Milk " name="Milk Products" />
        </div>

        {/* Second row */}
        <div className="flex flex-row justify-center mb-4 md:mb-0 gap-x-12">
          <Dup_categories img="Categories/rare1jpeg.jpeg" alt="Speacial Items" name="Speacial Items" />
          <Dup_categories img="Categories/grocery.jpeg" alt="Grocery" name="Groceries" />
        </div>
        <div className="flex flex-row justify-center mb-4 md:mb-0">
        <Dup_categories img="Categories/Organic.jpeg" alt="Organic" name="Coming Soon" />
        </div>
      </div>
    </>
  );
}

export default Categories;
