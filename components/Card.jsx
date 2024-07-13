import { useState } from "react";

/* eslint-disable react/prop-types */
export const Card = ({
  image,
  date,
  price,
  title,
  desc,
  width,
  height,
  onclick,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={`flex rounded-[20px] flex-col cursor-pointer bg-white ${
        desc && price
          ? "max-h-[450px] w-[270px] border border-[#DBDFD0]"
          : "max-h-[732px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`${price ? "rounded-t-xl" : ""}`}
        width={width}
        height={height}
        src={image}
        alt=""
      />
      <div
        className={`flex flex-col gap-[20px] p-[10px] ${
          desc && price ? "w-[270px]" : "w-[530px]"
        }`}
      >
        {date && <p className="text-[#737865]">{date}</p>}
        {price && <p className="text-[#AD343E] text-[24px]">{price}</p>}
        <p className="text-[20px]">{title}</p>
        {desc && <p>{desc}</p>}
      </div>
      {
        isHovered && price && <button onClick={onclick} className="text-[#fff] rounded-b-xl bg-[#AD343E]">Add to Cart</button>
      }
    </div>
  );
};
