import React from 'react';
import { MdBorderColor } from "react-icons/md";
import { Link } from 'react-router-dom';

const Bulk_Form = () => {
  return (
   <>
   
<div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
	<div class="bg-white dark:bg-gray-900 shadow-md rounded-3xl px-12 py-5 max-w-md">
		<h1 class="text-2x1 font-bold text-center mb-4 dark:text-gray-200"><MdBorderColor width={220} height={220} />Bulk Order Form</h1>
		<form action="#">
			<div class="mb-4">
				<label for="text" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
				<input type="text" id="text" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your Name" required/>
			</div>
			<div class="mb-4">
				<label for="Phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone No. </label>
				<input type="number" id="Phone number" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter phone number" required/>
			</div>
			<div class="mb-4">
				<label for="Comment" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message </label>
				<input type="textarea" id="textarea" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Add comment" />
				
			</div>
			<button  type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
		</form>
	</div>
</div>
   </>
  );
};

export default Bulk_Form;