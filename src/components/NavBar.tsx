import React from 'react'
 import { GiChickenOven } from "react-icons/gi";
const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-3 pt-1  bg-white">
        <div className="flex justify-center items-center">
          <GiChickenOven style={{ fontSize: "30px" }} />
          <span className="ms-1 text-lg font-bold ">QuickServe</span>
        </div>
        <div className="flex justify-between space-x-24 items-center">
          <nav className="flex space-x-8 ">
            <a href="#">Home</a>
            <a href="#">Order</a>
            <a href="#">About-us</a>
          </nav>
          <button className="bg-lightOrange hover:bg-lighterOrange text-white py-2 px-3 shadow-md rounded">
            order now!
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;