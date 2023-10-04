import React from 'react'
import MyOrderLogo from '../../assets/images/MyOrderLogo.png'
import MyReturnLogo from '../../assets/images/MyReturnsLogo.png'
import MyCancellationsLogo from '../../assets/images/MyCancaltionLogo.png'
import MyPaymentOptionsLogo from '../../assets/images/PaymentOptionsLogo.png'
import MyResetPasswordLogo from '../../assets/images/ResetPasswordLogo.png'
import MyProfileLogo from '../../assets/images/MyProfileLogo.png'
import MyAddressBookLogo from '../../assets/images/AddressbookLogo.png'
import MyDarazWalletLogo from '../../assets/images/DarazWalletLogo.png'

function SelfServiceTool() {
    const arr = [
        {
            title : 'My Orders',
            img : MyOrderLogo
        },
        {
            title : 'My Returns',
            img : MyReturnLogo
        },
        {
            title : 'My Cancellations',
            img : MyCancellationsLogo
        },
        {
            title : 'My Payment Options',
            img : MyPaymentOptionsLogo
        },
        {
            title : 'Reset Password',
            img : MyResetPasswordLogo
        },
        {
            title : 'My Profile',
            img : MyProfileLogo
        },
        {
            title : 'Address Book',
            img : MyAddressBookLogo
        },
        {
            title : 'Daraz Wallet',
            img : MyDarazWalletLogo
        },
    ]
  return (
    <div className='w-full py-10'>
        <div className='max-w-6xl mx-auto'>
            <div className='py-5 flex justify-center items-center text-gray-500 relative'>
                <h1 className='text-center'>
                Self Service Tool
                </h1>
                <hr className='w-7 h-1 font-md bg-[#FF6A00] absolute left-1/2 transform -translate-x-1/3 bottom-2'/>
            </div>
            <ul className='grid md:grid-cols-4 grid-rows-2 gap-5 mt-3'>
                {arr.map((list) => {
                    return (
                        <li className='px-5 py-5 border border-gray-200 text-center text-[#000000] text-[14px] leading-[21px] hover:bg-sky-100 flex flex-col items-center'>
                    <img src={list.img}/>
                    <h1 className='mt-3'>
                        {list.title}
                    </h1>
                </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default SelfServiceTool