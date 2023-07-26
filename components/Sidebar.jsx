import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {RxDashboard} from 'react-icons/rx';
import { HiChevronDown, HiChevronUp, HiArrowNarrowRight, HiArrowNarrowLeft, HiPlus } from 'react-icons/hi';
import { useTheme } from 'next-themes';

const Sidebar = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);



  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle sidebar collapse based on screen size
  const handleWindowResize = () => {
    console.log(window.innerWidth)
    setIsSidebarOpen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('resize', handleWindowResize);

     // Call the function once to initialize the sidebar state
     handleWindowResize();

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const menuItems = [
    {
      label: 'Dashboard',
      subMenu: [
        {
          label: 'Commerce',
          path: '/',
        },
        {
          label: 'Analytics',
          path: '/',
        },
        {
          label: 'Crypto',
          path: '/',
        },
        {
          label: 'Help Desk',
          path: '/',
        },
        {
          label: 'Monitoring',
          path: '/',
        },
        {
          label: 'Fitness',
          path: '/',
        },
      ],
      icon: <RxDashboard />,
    },
   
    {
      label: 'Applications',
      path: '/',
      icon: <RxDashboard />,
    },
   
    {
      label: 'Elements',
      path: '/',
      icon: <RxDashboard />,
    },
    {
      label: 'Forms',
      path: '/',
      icon: <RxDashboard />,
    },
    {
      label: 'Plugins',
      path: '/',
      icon: <RxDashboard />,
    },
    {
      label: 'Data Drid',
      path: '/',
      icon: <RxDashboard />,
    },
    {
      label: 'Settings',
      icon: <RxDashboard />,
      path: '/',
    },
  ];

  return (
    <div className='flex'>
    <div className={`flex flex-col ${isSidebarOpen ? 'lg:flex-row' : ''} bg-neutral-800`}>
      <div className={`flex flex-col ${isSidebarOpen ? 'w-64' : 'w-16'} bg-neutral-800`}>
        <div className="flex flex-col items-center justify-between h-16 border-b border-neutral-800">
        <button className={`lg:hidden flex self-end`} onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <HiArrowNarrowLeft className="w-6 h-6 text-gray-200" />
            ) : (
              <HiArrowNarrowRight className="w-6 h-6 text-gray-200" />
            )}
          </button>
        
          {isSidebarOpen ? (
             <button className={`bg-white flex w-56 mt-2 p-2 rounded-md text-neutral-800 font-bold`} onClick={toggleSidebar}>
             <HiPlus className="w-6 h-6 text-dark" /> <span>New Item</span>
           </button>
            ) : (
              <HiPlus className="w-6 h-6 text-gray-200" />
            )}
         
          
         
        </div>
        {isSidebarOpen ? (
          <div className="flex flex-col flex-grow p-4 overflow-auto">
            {menuItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.subMenu ? (
                  <div className="group border-b border-gray-900">
                    <button
                      onClick={toggleSubMenu}
                      className="flex items-center px-4 py-2 text-white hover:bg-gray-700 rounded-md"
                    >
                      {item.icon}
                      {isSidebarOpen && <span className="ml-2">{item.label}</span>}
                      {isSubMenuOpen ? (
                        <HiChevronUp className="ml-auto mt-2 w-5 h-5 text-white" />
                      ) : (
                        <HiChevronDown className="ml-auto mt-2 w-5 h-5 text-white" />
                      )}
                    </button>
                    {isSubMenuOpen && (
                      <div className="pl-8">
                        {item.subMenu.map((subItem) => (
                          <Link href={subItem.path} key={subItem.label}>
                            <span className="block px-4 py-2 text-white hover:bg-gray-700 rounded-md">
                              {subItem.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.path}>
                    <span className={`flex items-center px-4 py-2 text-white border-b border-gray-900 hover:bg-gray-700 rounded-md ${isSidebarOpen ? '' : 'justify-center'}`}>
                      {item.icon}
                      {isSidebarOpen && <span className="ml-2 flex items-center">{item.label} <HiChevronDown className="ml-auto mt-2 w-5 h-5 text-white" /></span>}
                    </span>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        ):(  
        <div className='flex flex-col items-center mt-3'>
          <Link href='/'>
            <div className='border-b border-gray-900 cursor-pointer hover:bg-gray-700 rounded-md text-white p-3 rounded-lg inline-block'>
            <RxDashboard size={20} />
            </div>
          </Link>
          
          <Link href='/'>
            <div className='border-b border-gray-900 cursor-pointer hover:bg-gray-700 rounded-md text-white p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='border-b border-gray-900 cursor-pointer hover:bg-gray-700 rounded-md text-white p-3 rounded-lg inline-block'>
            <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='border-b border-gray-900 cursor-pointer hover:bg-gray-700 rounded-md text-white p-3 rounded-lg inline-block'>
            <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='border-b border-gray-900 cursor-pointer hover:bg-gray-700 rounded-md text-white p-3 rounded-lg inline-block'>
            <RxDashboard size={20} />
            </div>
          </Link>
        </div>
      )}
     
      </div>
      
    </div>
    <main className='w-full'>{children}</main>
    </div>
  );
};



export default Sidebar;
