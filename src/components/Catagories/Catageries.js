import React from "react";
import PromotionsLogo from '../../assets/images/PromotionLogo.png'
import AccountManagementLogo from '../../assets/images/Account Management Logo copy.png'
import DarazCategoriesLogo from '../../assets/images/Daraz Categories Logo.png'
import OrdersLogo from '../../assets/images/Orders Logo.png'
import ShippingDeliveryLogo from '../../assets/images/Shipping & Delivery Logo.png'
import PaymentsLogo from '../../assets/images/Payments Logo.png'
import SellonDarazLogo from '../../assets/images/Sell on Daraz Logo.png'

function Categories() {

  const arr = [
    {
      title : 'Promotions', 
      img : PromotionsLogo
    },
    {
      title : 'Account Management', 
      img : AccountManagementLogo
    },
    {
      title : 'Daraz Categories', 
      img : DarazCategoriesLogo
    },
    {
      title : 'Orders', 
      img : OrdersLogo
    },
    {
      title : 'Shipping & Delivery', 
      img : ShippingDeliveryLogo
    },
    {
      title : 'Payments', 
      img : PaymentsLogo
    },
    {
      title : 'Sell on Daraz', 
      img : SellonDarazLogo
    },
    
  ]
  return (
    <div className=" w-full py-10">
      <div className=" max-w-6xl mx-auto">
        <div className="py-5 flex justify-center items-center  text-gray-500 relative">
          <h1 className="text-center">Gatagories</h1>
          <hr className='w-7 h-1 font-md bg-[#FF6A00] absolute left-1/2 transform -translate-x-1/3 bottom-2'/>
        </div>
        <ul className='grid md:grid-cols-4 grid-rows-2 gap-5 mt-3'>
                {arr.map((list) => {
                    return (
                        <li className='px-5 py-3 border border-gray-200 text-center text-[#000000] text-[14px] leading-[21px] hover:bg-sky-100 flex flex-col items-center'>
                    <img width={50} src={list.img}/>
                    <h1 className="mt-3">
                        {list.title}
                    </h1>
                </li>
                    )
                })}
            </ul>
      </div>
    </div>
  );
}

export default Categories;
