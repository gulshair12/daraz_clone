import React, { useEffect, useState } from "react";
import AddressModal from "../Components/AddressModal";
import { useActionData } from "react-router-dom";
import AccountSideBar from "../Components/Sidebar";
import Header from "../../../components/Header/index";

const initialAddresses = [
  {
    name: "Shahzaib",
    number: "03417700190",
    province: "Punjab",
    city: "Bahawalpur",
    area: "Madina Colony",
    address: "Khanqah Sharif",
    landmark: "Street No.2",
  },
  {
    name: "Zohaib Aslam",
    number: "03417700190",
    province: "Punjab",
    city: "Bahawalpur",
    area: "Madina Colony",
    address: "Khanqah Sharif",
    landmark: "Street No.2",
  },
];
export const action = async ({ request }) => {
  const addresses = await request.formData();
  const address = Object.fromEntries(addresses);
  return address;
};
let AddressBook = () => {
  let [showModal, setShowModal] = useState(false);
  let [addresses, setAddresses] = useState(initialAddresses);
  let newAddress = useActionData();
  useEffect(() => {
    if (newAddress) {
      setAddresses([...addresses, newAddress]);
    }
  }, [newAddress]);

  return (
    <div>
      <Header/>
      <AddressModal showModal={showModal} setShowModal={setShowModal} />
    <div className="flex justify-evenly bg-gray-200">
      <div className="m-4">
      <AccountSideBar/>  
      </div>
      <div className="w-3/5 mb-4">
        <header className="flex justify-between items-center my-4">
          <p className="text-gray-700 md:text-3xl text-lg">Address Book</p>
          <button onClick={() => setShowModal(true)}>
            <span className="text-2xl text-orange-500">+</span>Add New Address
          </button>
        </header>
        <main className="bg-white flex flex-col md:flex-row md:flex-wrap content-start p-3 md:h-[500px] ">
          {addresses.map((data) => (
            <div key={data.number} className="md:w-1/2">
              <div className="border rounded-md hover:shadow-xl transition ease-out delay-200 mx-2 mb-2">
                <div className="text-sm mx-4">
                  <div className="flex justify-between items-center mt-2">
                    <div className="">{data.name}</div>
                    <button
                      className="text-blue-500"
                      onClick={() => setShowModal(true)}
                    >
                      Edit
                    </button>
                  </div>
                  <div className="mt-2">{data.number}</div>
                  <div className="mt-2">
                    <p>{`${data.province}, ${data.city}, ${data.landmark} ${data.address} ${data.area}`}</p>
                  </div>
                </div>
                <div className="flex text-xs my-4 mx-4 gap-1">
                  <div className="text-blue-500 bg-blue-50 rounded-sm">
                    Home
                  </div>
                  <div className="bg-gray-100 rounded-sm">
                    DEFAULT DELIVERY ADDRESS
                  </div>
                  <div className="bg-gray-100 rounded-sm">
                    DEFAULT BILLING ADDRESS
                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
    </div>
  );
};
export default AddressBook;
