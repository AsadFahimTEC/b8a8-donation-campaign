import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            
           <h1 className="text-center text-[#0B0B0B] text-5xl md:text-3xl font-bold">I Grow By Helping People In Need</h1>
        <div className="w-2/5 flex mt-5 gap-5 mx-auto">
            
          <input
            type="text"
            name="name"
            id=""
            className="flex-1 p-2 rounded-lg border-[1px solid #DEDEDE] bg-[#FFF] text-[rgba(11, 11, 11, 0.40)] text-sm"
            placeholder  ="Search here...."
          />
          <button
            className="bg-[#FF444A] text-[#FFF] text-base font-semibold py-2 px-4 rounded-lg"
          >
            <input type="submit" value="Search" />
          </button>
        </div>
        {/* <img src="./Clothing.png" alt="" className="absolute inset-0 w-full h-[300px] object-cover opacity-10 bg-cover  bg-center" /> */}
      </div>
    );
};

export default Banner;