import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="w-full flex justify-center items-center mx-auto py-5 ">
      <div className="flex items-center border border-gray-200 duration-300 hover:border hover:border-[#FF6A00] rounded-md">
      <div className="overflow-hidden shadow-sm border-none">
        <input
          type="text"
          className="py-3 px-2 md:w-[650px] border-none rounded-l-md  "
          placeholder="Search for a Question...."
        />
        
      </div>
      <div className="rounded-r-md overflow-hidden">
      <button className="bg-[#FF6A00] text-white py-3 text-center px-9 font-bold hover:bg-[#FF8929] duration-300">
          <span>
            <BsSearch size={24} />
          </span>
        </button>
      </div>
      </div>
    </div>
  );
}

export default SearchBar;
