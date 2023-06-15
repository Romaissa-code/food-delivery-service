import React from 'react'
import { GiChickenOven, GiFullPizza, GiHamburger } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi"; 
import { FaFish } from "react-icons/fa";
import { GiSandwich } from "react-icons/gi";

import {AiOutlineArrowRight} from "react-icons/ai"; 
 import "./MenuItem.css"
const MenuItem = ({name,Icon}) => {
    

  return (
    <div className="h-36 rounded bg-lightBlue p-5 shadow-sm hover:text-white  hover:bg-lightOrange  hover:cursor-pointer flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white rounded-full w-16 h-16 items-center justify-center flex">
          <Icon style={{ color: "black", fontSize: "35px" }} />
        </div>
        <div className="flex items-center ">
          <h1>{name}</h1>
            <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

export default MenuItem; 

