import React from 'react'

function ShippingDelivery() {
    const arr = [
        {
          id: 1,
          para : "Can I cancel the Pick up point order?"
        },
        {
          id: 2,
          para : "Why are my items shipped separately?"
        },
        {
          id: 3,
          para : "Will somebody contact me before delivering the package to my location?"
        },
        {
          id: 4,
          para : "Which products take longer shipping time?"
        },
        {
          id: 5,
          para : "What is the delivery timeline of Daraz Verified products?"
        },
        {
          id: 6,
          para : "In which cities Express Deliveries are operational?"
        },
        {
          id: 7,
          para : "Does Daraz deliver all over Pakistan?"
        },
        {
          id: 8,
          para : `What happens if I don't collect the package within the given time?`
        },
        {
          id: 9,
          para : "How can a Daraz Shop representative help me?"
        },
        {
          id: 10,
          para : "How does Daraz verify products?"
        },
        {
          id: 11,
          para : "Does Daraz deliver orders internationally?"
        },
        {
          id: 12,
          para : "What is a Daraz Shop?"
        },
        {
          id: 13,
          para : "How to find the details of Daraz shop?"
        },
        {
          id: 14,
          para : "How do I track my order?"
        },
        {
          id: 15,
          para : "My city is not listed in your order list?"
        },
        {
          id: 16,
          para : "How do I choose the logistics partner for my shipment?"
        },
        {
          id: 17,
          para : "What type of products can be collected through daraz pick-up point?"
        },
        {
          id: 18,
          para : "Can I change my shipping address after my order is placed?"
        },
        {
          id: 19,
          para : "What is Daraz Pick up point?"
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
            Shipping & Delivery
            </span>
          </div>
          <div className=" w-full h-10 bg-[#F6F6F6] my-5 flex items-center text-[#FF9B3E] font-[400]">
              <button className=" px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Shipping Journey</button>
              <button className="px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Daraz Verified</button>
              <button className="px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Daraz Shop</button>
              <button className="px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Daraz Express</button>
              <button className="px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Daraz Pick up Points</button>
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

export default ShippingDelivery