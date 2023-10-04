import React from 'react'

function Order() {
    const arr = [
        {
          id: 1,
          para : "I accidentally ordered duplicate items. What should I do?"
        },
        {
          id: 2,
          para : "I accidentally ordered duplicate items. What should I do?"
        },
        {
          id: 3,
          para : "I got a notification stating my order has been cancelled. What do I do now?"
        },
        {
          id: 4,
          para : "Does Daraz have a mobile app?"
        },
        {
          id: 5,
          para : "Can I cancel my order for overseas products?"
        },
        {
          id: 6,
          para : "What are the features for products?"
        },
        {
          id: 7,
          para : "How would I know if my order has been confirmed?"
        },
        {
          id: 8,
          para : `Why am i getting "Something went wrong" error?`
        },
        {
          id: 9,
          para : "How to access AskDaraz?"
        },
        {
          id: 10,
          para : "How do I place corporate or bulk orders?"
        },
        {
          id: 11,
          para : "What is AskDaraz & How does it work?"
        },
        {
          id: 12,
          para : "How to add or remove the item(s) in the cart?"
        },
        {
          id: 13,
          para : "Why am I seeing different prices for the same product?"
        },
        {
          id: 14,
          para : " How to check the available flash sales?"
        },
        {
          id: 15,
          para : "Why am i unable to place an order ?"
        },
        {
          id: 16,
          para : "How is price difference calculated for ‘Best Price Guaranteed’ claim?"
        },
        {
          id: 17,
          para : "How to Rate and Review your product?"
        },
        {
          id: 18,
          para : "How do I submit a claim for Best Price Guaranteed?"
        },
        {
          id: 19,
          para : "What do the different order statuses in 'My Order' mean?"
        },
        {
          id: 20,
          para : " What is Best Price Guaranteed and how do I check if my purchase is eligible?"
        },
        {
          id: 21,
          para : "How to cancel the order?"
        },
    
    
      ]
  return (
    <>
        <div className="py-3 border-b text-gray-400 leading-[21px] md:text-[14px]"> 
            <span className=" hover:text-[#FF9B3E] cursor-pointer">
            Categories 
            </span>
            <span className="mx-1">
             / 
            </span>
            <span className="hover:text-[#FF9B3E] cursor-pointer">
             Order
            </span>
          </div>
          <div className="w-full h-10 bg-[#F6F6F6] my-5 hidden md:flex items-center text-[#FF9B3E] font-[400]">
              <button className=" px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Best Price Guaranteed</button>
              <button className="px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Order Placement</button>
              <button className="px-5 h-full hover:bg-[#FEF0D7] text-[12px]">Order Management</button>
          </div>
          <ul className="md:pl-5 custom-list-disc">
            {
              arr.map((list) => {
                return (
                  <li className="py-3 hover:text-[#FF7D4A] md:text-[14px] leading-[21px]" key={list.id}>
                  {list.para}
                  </li>
                )
              })
            }
              
          </ul>
    </>
  )
}

export default Order