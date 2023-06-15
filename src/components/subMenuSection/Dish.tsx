import React from "react";
import "./Dish.css";
import man1 from "../../assets/images/avtars/man1.jpg"; 
import man2 from "../../assets/images/avtars/man2.jpg";
import women2 from "../../assets/images/avtars/women2.jpg";
import {AiFillStar} from "react-icons/ai"; 

const Dish = ({ dish }) => {
  const { name, img, price,rating }=dish;
  return (
    <div className="dish h-auto relative  w-52 rounded-2xl p-5 shadow-lg  flex items-center justify-center place-self-center flex-col">
      <div className="flex flex-col items-center justify-center max-w-full  ">
        <figure className="max-w-lg relative">
          <img
            className="h-auto max-w-full rounded-lg"
            src={img}
            alt="image description"
          />
          <div className="absolute text-sm flex justify-center items-center bottom-2  border border-2 border-white p-1 right-1 z-10 rounded-full w-11 h-11 bg-lightOrange text-white">
            {price}
            <span className="text-xs">Da</span>
          </div>
        </figure>
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex my-2">
            <img
              className="border border-2 border-white rounded-full w-8 h-8"
              src={man1}
              alt={man1}
            />
            <img
              className="border border-2 border-white   z-10 rounded-full w-8 h-8 -ml-2"
              src={women2}
              alt={women2}
            />
            <img
              className="border border-2 border-white  z-10 rounded-full w-8 h-8 -ml-2"
              src={man2}
              alt={man2}
            />
          </div>
          <div className="flex items-center text-lightOrange text-sm">
            <AiFillStar />
            <span className="ml-1 ">({rating})</span>
          </div>
        </div>
      </div>
      <div className="text-center pb-2">
        <h1 className="font-bold ">{name}</h1>
        <p className="text-darkGray text-xs py-1">
          Lorem ipsum dolor sit dolor sit
        </p>
      </div>
      <button className="absolute -bottom-3 px-2 py-1 rounded-2xl bg-white hover:bg-lightOrange hover:text-white">
        order now
      </button>
    </div>
  );
};

export default Dish;
