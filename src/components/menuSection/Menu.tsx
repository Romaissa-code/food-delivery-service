import React from 'react'
import "./Menu.css";
import MenuItem from './MenuItem/MenuItem';
 import { GiChickenOven, GiFullPizza, GiHamburger } from "react-icons/gi";
 import {FaFish} from "react-icons/fa";
import {GiSandwich} from "react-icons/gi";


//  import { BiSolidDrink } from "react-icons/bi"; 

const Menu = () => {
   const menuItems = [
     { name: "pizza", icon: GiFullPizza },
     { name: "burger", icon: GiHamburger },
     //  { name: "drinks", icon: BiSolidDrink},
     { name: "chiken", icon: GiChickenOven },
     { name: "fish", icon: FaFish },
     { name: "sandwich", icon: GiSandwich },
   ]; 

  return (
    <div className='m-5 p-4'>
   <h2 className='title mx-auto font-bold text-2xl' >Our Menu</h2>
   <div className='grid grid-cols-5 my-5 gap-6'>
    {
        menuItems.map((item,idx)=>{
            return (
                <MenuItem key={idx} name={item.name} Icon={item.icon}/>
            )
        })
    }
   </div>

    </div>
  )
}

export default Menu