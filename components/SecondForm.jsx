import React from 'react';

const SecondForm = () => {
    return (
        <div className='md:col-span-2 p-4  rounded-lg bg-white'>
            <h2 className='text-2xl font-bold text-neutral-800'>Form title</h2>
            <p className='text-neutral-800'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="col-span-full">
                                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Label Title</label>
                                <div className="mt-2">
                                    <input type="text" name="" id="" autoComplete="" placeholder='Placeholder Content' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Label Title</label>
                                <div className="mt-2">
                                    <select id="" name="" autoComplete="" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>Choose</option>


                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Label Title</label>
                                <div className="mt-2">
                                    <input type="text" name="" id="" autoComplete="" placeholder='PlaceHolder Content' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Label Title</label>
                                <div className="mt-2">
                                    <input type="text" name="" id="" autoComplete="" placeholder='PlaceHolder Content' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Label Title</label>
                                <div className="mt-2">
                                    <textarea id="" name="" rows="3" placeholder='PlaceHolder Content' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>


            </form>


        </div>

    );
};

export default SecondForm;
