import React from 'react'
import { HiOutlinePlus, HiOutlineCog } from 'react-icons/hi';
import SearchField from './SearchFeld';

const Header = () => {
  return (
    <div className='flex justify-between p-4 bg-white items-center'>
      <div className='flex justify-between items-center'>
        <h1 className='text-neutral-800 font-bold text-2xl'>Add New Post</h1>
        <a href="#" className="text-neutral-800  flex items-center rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><HiOutlinePlus size={20} /><span className='ml-2 text-md'>Add Content</span></a>
        <a href="#" className=" text-neutral-800 text-2xl flex items-center rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><HiOutlineCog size={20} /><span className='ml-2 text-md'>Settings</span></a>
      </div>
      <SearchField />
    </div>
  )
}

export default Header