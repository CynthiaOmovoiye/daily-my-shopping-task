// components/Header.js

import React, { useState } from 'react';
import { HiHome, HiMenuAlt3, HiMenu, HiOutlineCog } from 'react-icons/hi';

const StackHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="min-h-full">
      <nav className="bg-neutral-900">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-2">
          <div className="flex h-16 items-center justify-between">


            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="#" className=" text-white flex items-center rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><HiHome /><span className='ml-2'>Home</span></a>
                <a href="#" className=" text-white flex items-center rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><HiMenu /><span className='ml-2'>Contents</span></a>
                <a href="#" className=" text-white flex items-center rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><HiMenuAlt3 /><span className='ml-2'>Categories</span></a>
                <a href="#" className=" text-white flex items-center rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><HiOutlineCog /><span className='ml-2'>Settings</span></a>

              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">


                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="flex  items-center rounded-full bg-white text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className='ml-2 p-2'>İsmail İhsan Bülbül</span>
                    </button>
                  </div>


                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden" onClick={toggleNav}>
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu open: "hidden", Menu closed: "block" */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Menu open: "block", Menu closed: "hidden" */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}

        <div className={`${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {/* Current: "bg-neutral-800 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a href="#" className="bg-neutral-800 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
              </div>

            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default StackHeader;
