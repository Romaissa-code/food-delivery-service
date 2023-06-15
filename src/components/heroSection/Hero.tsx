import React from "react";
import "./Hero.css";
import img from "../../assets/images/w.png";
import Comments from "./Comments";
import {BiMap} from "react-icons/bi"; 

import {MdGpsFixed} from "react-icons/md"
import {TiTick} from "react-icons/ti"; 
const Hero = () => {

  const clickHandler=(e)=>{
   e.preventDefault();
   console.log("clicked");
  }
  return (
    <div className=" bg-lightBlue flex items-center  justify-between px-28 mt-2 rounded-xl">
      <div className="w-6/12">
        <h2 className="font-bold text-5xl py-4">
          Order your best food anytime
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut rerum non
          pariatur nihil similique velit deleniti nostrum vel, itaque odio.
        </p>
        <form className="relative flex rounded-md shadow-sm my-6">
          <MdGpsFixed className="absolute  pointer-events-none  left-2 top-4 z-10 text-gray" />
          <input
            type="text"
            placeholder={"Enter your location"}
            className=" w-full h-full py-3 ps-8 px-2   border-none focus:outline-none rounded-s"
          />

          <button
            type="submit"
            className="bg-lightOrange py-1 px-4 text-white rounded-e hover:bg-lighterOrange"
            onClick={(e) => clickHandler(e)}
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <div className="relative">
          <img src={img} alt="heroImage" className="heroImg" />
          <div className="absolute top-16 left-44">
            <Comments
              color="#41C485"
              Icon={TiTick}
              txt={"confirm your order"}
            />
          </div>

          <div className="absolute top-16 -right-10">
            <Comments
              color="#41C485"
              Icon={BiMap}
              txt={"Your exact location"}
            />
          </div>
          <div className="absolute bottom-16 left-48">
            <Comments
              color="#41C485"
              Icon={TiTick}
              txt={"No shopping charges"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
