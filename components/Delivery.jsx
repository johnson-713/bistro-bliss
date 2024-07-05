import React from "react";

export const Delivery = () => {
  return (
    <div className="bg-[#F9F9F7]  px-[150px] py-[120px] flex gap-[80px] justify-center items-center">
      <div className="flex gap-[24px]">
        <img className="pb-[30px]" src="/images/delivery-1.png" alt="" />
        <div className="flex flex-col gap-[24px] mt-[30px]">
          <img src="/images/delivery-2.png" alt="" />
          <img src="/images/deliver-3.png" alt="" />
        </div>
      </div>
      <div className="max-w-[460px] flex flex-col gap-[30px]">
        <p className="text-[55px]">Fastest Food Delivery in City</p>
        <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
        <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[20px] items-center">
            <img src="/images/clock.svg" alt="" />
            <p>Delivery within 30 minutes</p>
        </div>
        <div className="flex gap-[20px] items-center">
            <img src="/images/price.svg" alt="" />
            <p>Best Offer and Prices</p>
        </div>
        <div className="flex gap-[20px] items-center">
            <img src="/images/cart.svg" alt="" />
            <p>Online Service available</p>
        </div>
        </div>
      </div>
    </div>
  );
};
