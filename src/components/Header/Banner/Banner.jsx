import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Banner = () => {


    return (
        <div>
            
           <h1 className="text-center text-[#0B0B0B] md:text-5xl  font-bold">I Grow By Helping People In Need</h1>
        <div className="w-2/5 flex mt-5 gap-5 mx-auto">
            
        
        </div>
        <img src="./Clothing.png" alt="" className="absolute inset-0 -z-10 w-full h-[300px] object-cover opacity-5 bg-cover  bg-center" />
      </div>
    );
};

export default Banner;