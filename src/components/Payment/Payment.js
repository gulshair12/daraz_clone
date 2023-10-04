import React from 'react'

function Payment() {
    const arr = [
        {
          id: 1,
          para : "What is HBL tap and Pay?"
        },
        {
          id: 2,
          para : "Why am I being charged for withdrawals?"
        },
        {
          id: 3,
          para : "How to activate Daraz Wallet?"
        },
        {
          id: 4,
          para : "What should I check when making online payment at daraz?"
        },
        {
          id: 5,
          para : "How to pay with Daraz Wallet?"
        },
        {
          id: 6,
          para : "How to change my installment plan?"
        },
        {
          id: 7,
          para : "What are the terms and conditions when paying through Easy Monthly Instalment (EMI) ?"
        },
        {
          id: 8,
          para : `Why i am unable to withdraw refunds from the wallet?`
        },
        {
          id: 9,
          para : "I am getting “couldn’t complete your payment error”, what should I do?"
        },
        {
          id: 10,
          para : "What is Daraz Wallet?"
        },
        {
          id: 11,
          para : "What are the FAQs for HBL Tap and Pay?"
        },
        {
          id: 12,
          para : "What payment options are available at daraz?"
        },
        {
          id: 13,
          para : "I am unable to pay through EasyPaisa Direct, what should I do?"
        },
        {
          id: 14,
          para : " Are vouchers and discounts applicable on installments?"
        },
        {
          id: 15,
          para : "What is Daraz Wallet Rebate?"
        },
        {
          id: 16,
          para : "What is Easy Monthly Instalment (EMI)?"
        },
        {
          id: 17,
          para : "What is the processing fees for EMI plans?"
        },
        {
          id: 18,
          para : "I am getting Risk Scanning Error, what should I do?"
        },
        {
          id: 19,
          para : "What payment methods can be used to top-up Daraz wallet?"
        },
        {
          id: 20,
          para : "How to pay through Easy Monthly Instalments (EMI)?"
        },
      ]
  return (
    <>
        <div className="py-3 border-b text-gray-400 leading-[21px] text-[14px]"> 
            <span className=" hover:text-[#FF9B3E] cursor-pointer">
            Categories 
            </span>
            <span className="mx-1">
             / 
            </span>
            <span className="hover:text-[#FF9B3E] cursor-pointer">
            Payments
            </span>
          </div>
          <div className=" w-full h-10 bg-[#F6F6F6] my-5 flex items-center text-[#FF9B3E] font-[400]">
              <button className=" px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Payment Method</button>
              <button className="px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Daraz Wallet</button>
              <button className="px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Easy Monthly Installme</button>
          </div>
          <ul className="pl-5 custom-list-disc">
            {
              arr.map((list) => {
                return (
                  <li className="py-3 hover:text-[#FF7D4A] text-[14px] leading-[21px]" key={list.id}>
                  {list.para}
                  </li>
                )
              })
            }
              
          </ul>
    </>
  )
}

export default Payment