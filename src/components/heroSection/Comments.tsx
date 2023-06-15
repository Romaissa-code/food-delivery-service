import React from 'react'
import { BiMap } from "react-icons/bi";
import { TiTick } from "react-icons/ti"; 
 const Comments = ({color,Icon,txt}) => {
  return (
    <>
      <div className="relative">
        <div className=" bg-white rounded-lg shadow-lg py-1 px-2">
         {txt}
        </div>
        <div
          className="rounded-full absolute w-6 h-6 -top-3 -right-3 flex items-center justify-center"
          style={{ background: color }}
        >
          <Icon className="text-white m-0"  />
        </div>
      </div>
    </>
  );
}

export default Comments;