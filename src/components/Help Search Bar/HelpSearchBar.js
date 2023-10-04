import React from 'react'
import {BsSearch} from 'react-icons/bs'

function HelpSearchBar() {
  return (
    <div className='w-full' id='helpcenter'>
        <div className='py-16 max-w-5xl mx-auto flex flex-col justify-center items-center'>
            <div className='rounded-sm overflow-hidden shadow-sm flex items-center'>
                <input type='text'  className='py-3 px-2 md:w-[650px] border-none' placeholder='Search for a Question....'/>
                <button className='bg-[#FF6A00] text-white py-3 text-center px-9 font-bold hover:bg-[#FF8929] duration-300 '>
                    <span><BsSearch size={24}/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HelpSearchBar