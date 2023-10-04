import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function ListButton(props) {
    const {onClick, title , rotateHook , listHookOpen , dataArr} = props;
  return (
    <>
    <div
            className="flex py-2 justify-between leading-[44px] items-center pl-5 pr-1 bg-[#393939] cursor-pointer"
            onClick={onClick}
          >
            <h1>{title}</h1>
            <span>
              <IoIosArrowDown
                className={`duration-300 ${rotateHook ? "rotate-180" : ""}`}
              />
            </span>
          </div>
          <ul
          className={`bg-[#474747] duration-300 ${listHookOpen ? "" : "hidden"}`}
        >
          {dataArr.map((list, index) => (
            <li
              key={index}
              className="py-2 pl-10 text-[14px] leading-[44px] hover:bg-[#FF6A00]"
            >
              {list.title}
            </li>
          ))}
        </ul>
        </>
  )
}

export default ListButton