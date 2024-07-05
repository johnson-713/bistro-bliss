import React from "react";

export const CommonImageContainer = ({ image }) => {
  return (
    <div className="bg-[#F9F9F7] px-[150px] py-[120px] flex gap-[80px] justify-center items-center">
      <div className="relative">
        <img
          className="rounded-[12px]"
          src={image}
          alt=""
          width={800}
        />
        <div className="bg-[#474747] absolute bottom-[-40px] right-[-40px] px-[30px] py-[30px] max-w-[400px] text-[#fff] flex flex-col rounded-[12px] gap-[25px]">
          <p className="text-[24px]">Come and visit us</p>
          <div className="flex gap-[10px] items-center">
            <img src="/icons/mobile.svg" width={15} height={15} alt="icon" />
            <p className="text-red">(+91) 78965 80989</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src="/icons/email.svg" width={15} height={15} alt="icon" />
            <p className="">bistrobliss@gmail.com</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src="/icons/location.svg" width={15} height={15} alt="icon" />
            <p className="">
              Lorem ipsum dolor sit amet elit.t tempore repudiandae!
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[550px] flex flex-col gap-[20px]">
        <p className="text-[55px]">We provide healthy food for your family.</p>
        <p className="text-[18px]">
          Our story began with a vision to create a unique dining experience
          that merges fine dining, exceptional service, and a vibrant ambiance.
          Rooted in city's rich culinary culture, we aim to honor our local
          roots while infusing a global palate.
        </p>
        <p>
          At place, we believe that dining is not just about food, but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </p>
        <button className="border w-[40%] border-[#000] px-[14px] py-[10px] rounded-3xl">
          More About Us
        </button>
      </div>
    </div>
  );
};
