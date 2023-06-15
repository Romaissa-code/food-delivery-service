import React from 'react'
import Dish from './Dish';
import pizza from "../../assets/images/hottestDishes/pizza.png"; 
import burger from "../../assets/images/hottestDishes/burger.png"; 

const SubMenu = () => {
  const dishes = [
    { name: "burger", img: burger, price: "20", rating: "4.5" },
    { name: "pizza", img: pizza, price: "20", rating: "5.0" },
    { name: "pizza", img: pizza, price: "20", rating: "4.5" },
    { name: "pizza", img: pizza, price: "20", rating: "5.0" },
    { name: "burger", img: burger, price: "20", rating: "4.5" },
  ];  
  return (
    <div>
      <div className="m-5 p-4 flex ">
        <h2 className="title  font-bold text-2xl w-6/12 ">
          Our New Hottest Dishes
        </h2>
        <div className="flex gap-3 justify-end w-full">
          <button className="bg-gray rounded-md rounded-b-none text-white text-center py-1 px-2 shadow hover:bg-lightOrange">
            Breakfast
          </button>
          <button className="bg-gray rounded-md rounded-b-none text-white text-center py-1 px-2 shadow hover:bg-lightOrange">
            lunch
          </button>
          <button className="bg-gray rounded-md rounded-b-none text-white text-center py-1 px-2 shadow hover:bg-lightOrange">
            dinner
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 my-5 gap-5 mx-auto w-full ">
        {dishes.map((dish, idx) => {
          return <Dish key={idx} dish={dish}/>;
        })}
      </div>
    </div>
  );
}

export default SubMenu; 