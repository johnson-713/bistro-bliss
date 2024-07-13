import { useState } from "react";
import { Card } from "./Card";

const filters = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

const cardData = [
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "All",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "Desserts",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "Drinks",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "Drinks",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "All",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "Main Dishes",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "Main Dishes",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "All",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "Breakfast",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "Breakfast",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "All",
  },
  {
    image: "/images/fried-eggs.png",
    title: "Fried Eggs",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
    price: "$ 10.00",
    category: "All",
  },
];

export const Menu = () => {
  const [category, setCategory] = useState("All");
  const filterData = cardData?.filter((item) => item?.category == category);
  const [selectedData, setSelectedData] = useState([]);

  const handleSelect = (card) => {
    setSelectedData([...selectedData, card]);
    localStorage.setItem("selectedMenus", JSON.stringify(selectedData))
  };

  return (
    <div className="text-center px-[120px]">
      <div className="flex flex-col gap-[30px] justify-center items-center">
        <p className="text-[100px]">Our Menu</p>
        <p className="text-[18px]">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
        <div className="flex gap-[20px]">
          {filters.map((filter, index) => (
            <button
              className={`px-[38px] py-[12px] rounded-3xl border ${
                category == filter ? "bg-[#AD343E] text-[#fff]" : ""
              }`}
              key={index}
              onClick={() => setCategory(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-[20px]">
          {filterData?.map((card, index) => (
            <Card
              key={index}
              price={card.price}
              title={card.title}
              desc={card.desc}
              image={card.image}
              onclick={() => handleSelect(card)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
