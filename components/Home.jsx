import { Banner } from "./Banner";
import { AppContainer } from "./AppContainer";
import { HomeMenuCard } from "./HomeMenuCard";
import { CommonImageContainer } from "./CommonImageContainer";
import { Events } from "./Events";
import { Delivery } from "./Delivery";
import { Card } from "./Card";

const menuData = [
  {
    img: "/icons/breakfast.svg",
    title: "Breakfast",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    img: "/icons/main-dishes.svg",
    title: "Main Dishes",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    img: "/icons/drinks.svg",
    title: "Drinks",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    img: "/icons/desserts.svg",
    title: "Desserts",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
];

const cardData = [
  {
    image: "/images/blog-1.png",
    date: "January 3, 2023",
    width: 536,
    width: "630px",
    height: 456,
    title:
      "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    desc: "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
  },
  {
    image: "/images/blog-1.png",
    date: "January 3, 2023",
    width: 273,
    height: 212,
    width: "320px",
    title:
      "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    // desc: 'Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.',
  },
  {
    image: "/images/blog-1.png",
    date: "January 3, 2023",
    width: 343,
    height: 212,
    width: "320px",
    title:
      "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    // desc: 'Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.',
  },
  {
    image: "/images/blog-1.png",
    date: "January 3, 2023",
    width: 273,
    height: 212,
    width: "320px",
    title:
      "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    // desc: 'Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.',
  },
  {
    image: "/images/blog-1.png",
    date: "January 3, 2023",
    width: 273,
    height: 212,
    width: "320px",
    title:
      "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    // desc: 'Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.',
  },
];

export const Home = () => {
  return (
    <>
      <Banner />
      <AppContainer>
        <div className="flex items-center flex-col py-[90px]">
          <p className="text-[55px] mb-[54px]">Browse Our Menu</p>
          <div className="flex gap-[30px]">
            {menuData.map((item, index) => (
              <HomeMenuCard
                image={item?.img}
                title={item.title}
                desc={item.desc}
                key={index}
              />
            ))}
          </div>
        </div>
      </AppContainer>
      <CommonImageContainer image={"/images/common-image-1.png"} />
      <AppContainer>
        <Events />
      </AppContainer>
      <Delivery />

      <div className="bg-[#F9F9F7] px-[120px] py-[120px]">
        <div className="flex justify-between items-center">
          <p className="text-[55px]">Our Blog & Articles</p>
          <button className="bg-[#AD343E] py-[20px] px-[32px] text-[#fff] rounded-full">
            Read Articles
          </button>
        </div>
        <div className="flex gap-[20px]">
        <div>
          {cardData.slice(0, 1).map((item, index) => (
            <Card
              key={index}
              height={item.height}
              width={item.width}
              image={item.image}
              date={item.date}
              title={item.title}
              desc={item.desc}
              maxWidth={item.maxWidth}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-[25px]">
          {cardData.slice(1, 5).map((item, index) => (
            <Card
              key={index}
              height={item.height}
              width={item.width}
              image={item.image}
              date={item.date}
              title={item.title}
              desc={item.desc}
              maxWidth={item.maxWidth}
            />
          ))}
        </div>
        </div>
      </div>
    </>
  );
};
