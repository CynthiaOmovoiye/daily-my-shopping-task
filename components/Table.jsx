import React, { useState, useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { BiSave } from 'react-icons/bi';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Table = () => {
    const pageSize = 10; // Number of items to show per page
    const [currentPage, setCurrentPage] = useState(1);
    // Sample data for the table
    const data = [
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 },
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 },
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 },
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 },
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 },
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 },
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 },
        // Add more data as needed
    ];

    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / pageSize);

    // Calculate the starting index and ending index of the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);

    // Get the items to display on the current page
    const currentPageItems = data.slice(startIndex, endIndex);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const PaginatedTable = () => {
        return (
            <div className="flex flex-col items-center">
                <table className="table-auto border-collapse border border-gray-400 mt-8 w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            {/* Table headers go here */}
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Age</th>
                            <th className="px-4 py-2">Actions</th>
                            {/* Add more headers as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageItems.map((item, index) => (
                            <tr key={item.id} className={`text-center ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                {/* Table data goes here */}
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{item.name}</td>
                                <td className="border px-4 py-2">{item.age}</td>
                                <td className="border px-4 py-2"><div className='flex justify-center'><button className='bg-blue-700 flex items-center text-white p-2 rounded-md mr-3'><BiSave /><span>Edit</span></button><button className='bg-amber-600 flex items-center text-white p-2 rounded-md'><BiSave /><span>Delete</span></button></div></td>
                                {/* Add more data as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4">
                    <div className="inline-flex">
                        {/* Previous button */}
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-white text-neutral-800 rounded-md mr-2"
                        >
                            <RiArrowLeftSLine size={20} />
                        </button>

                        {/* Page numbers */}
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-neutral-800 border border-neutral-800'
                                    } rounded-md mr-2`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        {/* Next button */}
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-white text-neutral-800 rounded-md mr-2"
                        >
                            <RiArrowRightSLine size={20} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }





    return (

        <div className='p-4 grid gap-4'>
            <div className='w-full md:col-span-1 relative m-auto p-4 border rounded-lg bg-white'>
                <h2 className='text-2xl font-bold text-neutral-800'>Form title</h2>
                <p className='text-neutral-800'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
                <div className="relative flex items-center bg-red-50 border border-red-400 px-6 text-red-900 p-3 mt-3 rounded-md">
                    <FiAlertCircle className='mr-2' />

                    Senectus malesuada suspendisse bibendum elit amet vitae.
                </div>
                <PaginatedTable />
            </div>
        </div>
    );
};

export default Table;
