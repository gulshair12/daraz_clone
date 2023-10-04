import React from "react";
import { Form } from "react-router-dom";

const selectsData = [
  {
    label: "Province",
    placeholder: "Select Your Province",
    options: [
      "Azad Kashmir",
      "Balochistan",
      "Federally Administered Tribal Areas",
      "Punjab",
    ],
  },
  {
    label: "City",
    placeholder: "Select Your City",
    options: ["Bahawalpur", "Multan", "Lodhran", "AhmedPur"],
  },
  {
    label: "Area",
    placeholder: "Select Your Area",
    options: [
      "Faisal Colony Sharqi",
      "Goheer Town",
      "Haqqi Centre",
      "Qasim Town",
      "Riaz Colony",
    ],
  },
];

const AddressModal = ({ showModal, setShowModal }) => {
  return (
    <div
      className={`w-screen fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-40 ${
        showModal ? "" : "hidden"
      }`}
    >
      <div className="w-[800px]  h-[650px] bg-white text-sm rounded-md ">
        <div className="flex justify-between items-center w-full p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <h1 className="text-xl">Add New Delivery Address</h1>
          <button
            className="text-lg text-gray-400"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>
        <Form method="post">
          <div className="flex flex-col md:flex-row">
            {/* First half of the form */}
            <div className="md:basis-1/2 p-6">
              {/* Name input */}
              <div className="mb-4">
                Enter Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter here"
                  className="w-full p-2 border rounded-md outline-none text-base"
                />
              </div>
              {/* Mobile input */}
              <div className="mb-4">
                Mobile Number
                <input
                  type="text"
                  name="number"
                  placeholder="Enter here"
                  className="w-full p-2 border rounded-md outline-none text-base"
                />
              </div>
              {/* drop down inputs from Province ---> City ---> Area */}
              {selectsData.map((select, index) => (
                <div key={index} className="mb-4">
                  <label>{select.label}</label>
                  <select
                    name={select.label.toLowerCase()}
                    className="w-full p-2 border rounded-md outline-none text-base"
                  >
                    <option disabled>{select.placeholder}</option>
                    {select.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            {/* Second Half of the form */}
            <div className="md:basis-1/2 p-6">
              {/* Address input */}
              <div className="mb-4">
                Address
                <input
                  type="text"
                  name="address"
                  placeholder="Enter here"
                  className="w-full p-2 border rounded-md outline-none text-base"
                />
              </div>
              {/* Landmark input */}
              <div className="mb-4">
                Landmark
                <input
                  type="text"
                  name="landmark"
                  placeholder="Enter here"
                  className="w-full p-2 border rounded-md outline-none text-base"
                />
              </div>
              {/* Input button for selection */}
              Select a label for effective delivery:
              <div className="flex justify-evenly my-4">
                <div className="px-14 py-2 border rounded-md">Home</div>
                <div className="px-14 py-2 border rounded-md">Office</div>
              </div>
              <div>
                {/* Checkbox for delivery and billing address */}
                Default Address (Optional)
                <div className="border grid grid-cols-1 mt-4 py-4 pl-2 rounded-md">
                  <label>
                    <input type="checkbox" className="w-4 h-4 mb-2" />
                    <span className="ml-2">Default delivery address</span>
                  </label>
                  <label>
                    <input type="checkbox" className="w-4 h-4 mb-2" />
                    <span className="ml-2">Default billing address</span>
                  </label>
                  <p className="text-xs text-gray-500 pr-0.5">
                    Your existing default address setting will be replaced if
                    you make some changes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex justify-end mx-10 my-10 ">
            <button
              className="px-16 py-3 border bg-primary text-white rounded-md"
              type="submit"
              onClick={() => setShowModal(false)}
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddressModal;
