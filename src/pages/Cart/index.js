import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import deleteicon from "../../assets/images/deleteIcon.png";
import decorimage from "../../assets/images/decorimage.jpg";
import hearticon from "../../assets/images/heartIcon.png";

const Cart = () => {
  const cartItems = [
    {
      decorimage: decorimage,
      title: "Antique Gifts Center",
      description:
        "6 Pcs 3D Mirror Wall Sticker Hexagon, Home Decor DIY Self-adhesive Mirror Stickers Wall Decoration - Antique Gifts Center",
      subHeading: "Antique Gifts Center, Color Family:Blue 80mm",
      actualPrice: "RS.190",
      reducedPrice: "RS.380",
      dicount: "-50%",
      hearticon: hearticon,
      deleteicon: deleteicon,
      checked: false,
    },

    {
      decorimage: decorimage,
      title: "Antique Gifts Center",
      description:
        "6 Pcs 3D Mirror Wall Sticker Hexagon, Home Decor DIY Self-adhesive Mirror Stickers Wall Decoration - Antique Gifts Center",
      subHeading: "Antique Gifts Center, Color Family:Blue 80mm",
      actualPrice: "RS.190",
      reducedPrice: "RS.380",
      dicount: "-50%",
      hearticon: hearticon,
      deleteicon: deleteicon,
      checked: false,
    },
    {
      decorimage: decorimage,
      title: "Antique Gifts Center",
      description:
        "6 Pcs 3D Mirror Wall Sticker Hexagon, Home Decor DIY Self-adhesive Mirror Stickers Wall Decoration - Antique Gifts Center",
      subHeading: "Antique Gifts Center, Color Family:Blue 80mm",
      actualPrice: "RS.190",
      reducedPrice: "RS.380",
      dicount: "-50%",
      hearticon: hearticon,
      deleteicon: deleteicon,
      checked: false,
    },
    {
      decorimage: decorimage,
      title: "Antique Gifts Center",
      description:
        "6 Pcs 3D Mirror Wall Sticker Hexagon, Home Decor DIY Self-adhesive Mirror Stickers Wall Decoration - Antique Gifts Center",
      subHeading: "Antique Gifts Center, Color Family:Blue 80mm",
      actualPrice: "RS.190",
      reducedPrice: "RS.380",
      dicount: "-50%",
      hearticon: hearticon,
      deleteicon: deleteicon,
      checked: false,
    },
  ];

  const [items, setItems] = useState(cartItems);
  const [itemQuantities, setItemQuantities] = useState(items.map(() => 1));
  const [selectAll, setSelectAll] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee] = useState(100);
  const [total, setTotal] = useState(0);

  const toggleSelectAll = () => {
    const updatedItems = items.map((item) => {
      return { ...item, checked: !selectAll };
    });
    setItems(updatedItems);
    setSelectAll(!selectAll);
  };

  const increaseQuantity = (index) => {
    const updatedQuantities = [...itemQuantities];
    updatedQuantities[index] += 1;
    setItemQuantities(updatedQuantities);
  };

  const decreaseQuantity = (index) => {
    const updatedQuantities = [...itemQuantities];
    if (updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
      setItemQuantities(updatedQuantities);
    }
  };

  const toggleCheckbox = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  const deleteSelectedItems = () => {
    const updatedItems = items.filter((item) => !item.checked);
    setItems(updatedItems);
  };

  useEffect(() => {
    let newsubTotal = 0;
    items.forEach((item, index) => {
      if (item.checked) {
        newsubTotal +=
          parseFloat(item.actualPrice.replace("RS.", "")) *
          itemQuantities[index];
      }
    });
    setSubtotal(newsubTotal);
  }, [items, itemQuantities]);

  useEffect(() => {
    const newTotal = subtotal + shippingFee;
    setTotal(newTotal);
  }, [subtotal, shippingFee]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-200 p-4 text-black">
        <div className="py-2">
          <div className="flex flex-col md:flex-row">
            {/* list of checkout items */}

            <div className="w-3/4 md:w-1/2 md:float-none md:mr-2 lg:mr-4 ml-12">
              <div className="bg-white py-1 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="pl-2">
                    <input
                      className="w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4"
                      type="checkbox"
                      checked={selectAll}
                      onChange={toggleSelectAll}
                    />
                  </span>
                  <p className="text-slate-500 text-xs md:text-sm lg:text-sm  pl-3">
                    SELECT ALL ({items.length} ITEM(S))
                  </p>
                </div>
                <button
                  className="flex items-center pl-2"
                  onClick={() => deleteSelectedItems()}
                >
                  <img
                    className="h-5 md:h-5 lg:h-5 "
                    src={deleteicon}
                    alt="Deleteicon"
                  />
                  <span className="text-slate-500 text-sm md:text-sm lg:text-sm  pr-2">
                    DELETE
                  </span>
                </button>
              </div>
              {items.map((item, index) => (
                <div key={index} className="bg-white mt-2 py-2">
                  <div className="flex">
                    <span className="pl-2">
                      <input
                        className="w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 "
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => toggleCheckbox(index)}
                      />
                    </span>
                    <p className="text-xs md:text-sm lg:text-sm pl-4 mb-2">
                      {item.title}
                    </p>
                  </div>
                  <hr />
                  <div className="flex mt-4 pb-4">
                    <span className="pl-2 flex items-center justify-center">
                      <input
                        className="w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 "
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => toggleCheckbox(index)}
                      />
                    </span>
                    <img
                      className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20"
                      src={item.decorimage}
                      alt="product"
                    />
                    <div className="flex flex-col pl-3">
                      <div className="text-xs md:text-sm xl:text-base">
                        {item.description}
                      </div>
                      <div className="text-slate-500 text-xxs md:text-xs xl:text-sm">
                        {item.subHeading}
                      </div>
                    </div>
                    <div className="flex flex-col pl-1 pr-1 ">
                      <p className="font-semibold text-orange text-xs md:text-sm xl:text-base">
                        {item.actualPrice}
                      </p>
                      <del>
                        <p className="text-xs md:text-sm xl:text-base text-slate-500">
                          {item.reducedPrice}
                        </p>
                      </del>
                      <p className="text-xs md:text-sm xl:text-base">
                        {item.dicount}
                      </p>
                      <div className="flex space-x-1">
                        <img
                          className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5"
                          src={item.hearticon}
                          alt="heart icon"
                        />
                        <img
                          className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5"
                          src={item.deleteicon}
                          alt="delete icon"
                          onClick={() => deleteSelectedItems()}
                        />
                      </div>
                    </div>
                    <div className="flex ml-8 space-x-1 pr-4 md:pr-8 xl:pr-12">
                      <button
                        className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 border border-gray-300 bg-gray-200 flex items-center justify-center"
                        onClick={() => decreaseQuantity(index)}
                      >
                        -
                      </button>
                      <span className="text-xs md:text-sm xl:text-base">
                        {itemQuantities[index]}
                      </span>
                      <button
                        className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 border border-gray-300 bg-gray-200 flex items-center justify-center"
                        onClick={() => increaseQuantity(index)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* checkout card */}
            <div className="w-/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mt-4 md:mt-0">
              <div className="bg-white p-4">
                <h2 className="text-lg font-semibold">Order Summary</h2>
                <div className="flex justify-between mt-2">
                  <p className="text-slate-500 sm:text-sm md:text-sm lg:text-sm xl:text-sm">
                    Subtotal of selected items
                  </p>
                  <p className="sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold">
                    RS.{subtotal}
                  </p>
                </div>
                <div className="flex justify-between mt-2 ">
                  <p className="text-slate-500 sm:text-sm md:text-sm lg:text-sm xl:text-sm ">
                    Shipping Fee
                  </p>
                  <p className="sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold">
                    RS.{shippingFee}
                  </p>
                </div>
                <div className="flex mt-4">
                  <Input
                    classes="shadow-none w-full sm:text-sm md:text-sm lg:text-sm xl:text-sm"
                    type={Text}
                    placeholder={"Enter Voucher Code"}
                  ></Input>
                  <Button
                    variant="naked"
                    size="large"
                    className=" bg-fluorescentBlue text-white ml-2 border rounded-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm"
                  >
                    Apply
                  </Button>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="sm:text-sm md:text-sm lg:text-sm xl:text-sm">
                    Total
                  </p>
                  <p className="sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold text-orange">
                    RS.{total}
                  </p>
                </div>
                <Button
                  size="small"
                  variant="naked"
                  className="mt-4 w-full py-2 bg-orange border rounded-sm text-white  shadow-sm focus:outline-none sm:text-sm md:text-sm lg:text-sm xl:text-sm "
                >
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
