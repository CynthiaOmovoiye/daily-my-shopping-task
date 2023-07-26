import React from 'react'
import { AiOutlineShopping, AiOutlineShop } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-4 gap-4 p-4'>
      <div className='lg:col-span-1 col-span-1 bg-white flex items-center w-full border p-4 rounded-lg'>
        <div className='rounded-lg p-3'>
          <AiOutlineShopping size={50} className='text-orange-600' />
        </div>
        <div>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-gray-600'>Total sales</p>
            <p className='text-2xl font-bold'>$2,456</p>

          </div>
        </div>
      </div>
      <div className='lg:col-span-1 col-span-1 bg-white flex items-center w-full border p-4 rounded-lg'>
        <div className='rounded-lg p-3'>
          <AiOutlineShop size={50} className='text-purple-800' />
        </div>
        <div>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-gray-600'>Total Expenses</p>
            <p className='text-2xl font-bold'>$3,326</p>
          </div>
        </div>
      </div>
      <div className='lg:col-span-1 col-span-1 bg-white flex items-center w-full border p-4 rounded-lg'>
        <div className='rounded-lg p-3'>
          <BsPeople size={50} className='text-emerald-600' />
        </div>
        <div>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-gray-600'>Total Visitors</p>
            <p className='text-2xl font-bold'>5,325</p>
          </div>
        </div>
      </div>
      <div className='lg:col-span-1 col-span-1 bg-white flex items-center w-full border p-4 rounded-lg'>
        <div className='rounded-lg p-3'>
          <BiMenuAltRight size={50} className='text-purple-800' />
        </div>
        <div>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-gray-600'>Total Orders</p>
            <p className='text-2xl font-bold'>1,326</p>

          </div>

        </div>

      </div>
    </div>
  )
}

export default TopCards