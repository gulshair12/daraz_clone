import React from 'react'
import ChatNowLogo from '../../assets/images/Chat Now Logo.png'
import ChatKarainLogo from '../../assets/images/Chat Karain Logo.png'
import OtherOptionsLogo from '../../assets/images/Other Options Logo.png'
import SellerHelpCenterLogo from '../../assets/images/Seller Help Center Logo.png'

function StillLookingAnswers() {
  const Arr = [
  {
    title : "Chat Now" ,
    para : '24 hours, 7 days a week',
    img : ChatNowLogo,
  },
  {
    title : "Chat Karain" ,
    para : '24 Ghantay, Haftay ke 7 Din',
    img : ChatKarainLogo,
  },
  {
    title : "Other Options" ,
    para : 'Other option',
    img : OtherOptionsLogo,
  },
  {
    title : "Seller Help Center" ,
    para : 'Get your answers now',
    img : SellerHelpCenterLogo,
  },

  ]
  return (
    <div className=" w-full py-10">
      <div className=" max-w-5xl mx-auto">
        <div className="py-5 flex justify-center items-center  text-gray-500 relative">
          <h1 className="text-center">Still looking for answers? Ask Daz anytime, day or night, Click on 'Chat Now' for English or 'Chat Karain' for Urdu to connect with us 24/7</h1>
          <hr className='w-7 h-1 font-md bg-[#FF6A00] absolute left-1/2 transform -translate-x-1/3 bottom-2'/>
        </div>
        <ul className="md:grid grid-cols-4 grid-rows-2 gap-5 mt-3">
          {Arr.map((list) => {
            return (
              <li className="shadow-md px-3 py-2 border border-gray-200  hover:shadow-xl flex space-x-3">
            <div>
              <img width={50} src={list.img}/>
            </div>
            <div className=''>
              <h1 className='text-[16px]'>
                {list.title}
              </h1>
              <p className='text-[14px]'>
                {list.para}
              </p>
            </div>
          </li>
            )
          })}
          
        </ul>
      </div>
    </div>
  )
}

export default StillLookingAnswers