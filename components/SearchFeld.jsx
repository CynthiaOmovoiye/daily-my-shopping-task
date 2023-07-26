import React from 'react';
import { HiOutlineSearch} from 'react-icons/hi';

const SearchField = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 w-48 sm:w-64"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <HiOutlineSearch/>
      </div>
    </div>
  );
};

export default SearchField;
