import React from 'react'

function TopQuestions () {
  return (
    <div className=' w-full py-10'>
        <div className=' max-w-6xl mx-auto'>
            <div className='py-5 flex justify-center items-center text-gray-500 relative'>
                <h1>
                Top Questions
                </h1>
                <hr className='w-7 h-1 font-md bg-[#FF6A00] absolute left-1/2 transform -translate-x-1/3 bottom-2'/>
            </div>  
            <ul className='text-gray-400 text-md md:grid grid-rows-2 grid-cols-3 gap-3 content-center sm:text-center  p-6 custom-list-disc'>
                <li className=' hover:text-[#FFB37D] cursor-pointer'>
                How to cancel the order?
                </li>
                <li className=' hover:text-[#FFB37D] cursor-pointer'>
                What is Daraz's refund policy?
                </li>
                <li className=' hover:text-[#FFB37D] cursor-pointer'>
                How do I track my order?
                </li>
                <li className=' hover:text-[#FFB37D] cursor-pointer'>
                What are the expected delivery timelines?
                </li>
                <li className=' hover:text-[#FFB37D] cursor-pointer'>
                How can I avail weekly payment partner discount?
                </li>
                <li className=' hover:text-[#FFB37D] cursor-pointer'>
                How can I learn more about the upcoming campaigns and the discounts?
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TopQuestions