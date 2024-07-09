import React from "react";
import { Card } from "./Card";

const filters = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"]

const cardData = [
    {
      image: "/images/fried-eggs.png",
      title:
        "Fried Eggs",
      desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
      price: "$ 10.00",
    },
    {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
      {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
      {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
      {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
      {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
      {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
      {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
      {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
      {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
      {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
      {
        image: "/images/fried-eggs.png",
        title:
          "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        price: "$ 10.00",
      },
  ];

export const Menu = () => {
  return (
    <div className="text-center px-[120px]">
      <div className="flex flex-col gap-[30px] justify-center items-center">
      <p className="text-[100px]">Our Menu</p>
      <p className="text-[18px]">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>
      <div className="flex gap-[20px]">
        {
            filters.map((filter, index) => (
                <button className="px-[38px] py-[12px] rounded-3xl border" key={index}>{filter}</button>
            ))
        }
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        {
            cardData?.map((card, index) => (
                <Card key={index} price={card.price} title={card.title} desc={card.desc} image={card.image} />
            ))
        }
      </div>
      </div>
      
    </div>
  );
};
