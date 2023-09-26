

const Banner = () => {
  return (
    <div>
      <h1 className="text-center text-[#0B0B0B] md:text-5xl  font-bold">
        I Grow By Helping People In Need
      </h1>
      <div className="w-full md:w-2/5 flex flex-col items-center mt-5 md:mt-0 md:gap-5 mx-auto"></div>
      <img
        src="./Rectangle-4281.png"
        alt=""
        className="absolute inset-0 -z-10 w-full h-[300px] object-cover opacity-10 bg-cover  bg-center"
      />
    </div>
  );
};

export default Banner;
