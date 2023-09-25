import { useState } from "react";
import { Link } from "react-router-dom";

const DonationDetail = ({ card }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    description,
    price,
  } = card || {};

  return (
    <div
      className="flex justify-center items-center mx-10 my-10"
      style={{ background: card_bg_color }}
    >
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border  shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <button
            className="mb-4 block text-white text-base font-semibold leading-relaxed tracking-normal  antialiased"
            style={{ background: category_bg_color }}
          >
            {category}
          </button>
          <h4 className="mb-2 block text-[#0B0B0B] text-2xl font-semibold leading-snug tracking-normal antialiased">
            {title}
          </h4>
          <p
            className="mb-8 block text-base font-semibold leading-relaxed antialiased"
            style={{ color: text_button_bg_color }}
          >
            ${price}
          </p>
          <Link className="inline-block" to={`/card/${id}`}>
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-[#FFF] text-center align-middle text-lg font-semibold  transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              style={{ backgroundColor: text_button_bg_color }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationDetail;
