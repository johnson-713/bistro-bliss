import { Banner } from "./Banner";
import {AppContainer} from "./AppContainer"
import {HomeMenuCard} from "./HomeMenuCard"
import { CommonImageContainer } from "./CommonImageContainer";
import { Events } from "./Events";
import { Delivery } from "./Delivery";

const menuData = [
  {
    img: '/icons/breakfast.svg',
    title: 'Breakfast',
    desc: 'In the new era of technology we look in the future with certainty and pride for our life.'
  },
  {
    img: '/icons/main-dishes.svg',
    title: 'Main Dishes',
    desc: 'In the new era of technology we look in the future with certainty and pride for our life.'
  },
  {
    img: '/icons/drinks.svg',
    title: 'Drinks',
    desc: 'In the new era of technology we look in the future with certainty and pride for our life.'
  },
  {
    img: '/icons/desserts.svg',
    title: 'Desserts',
    desc: 'In the new era of technology we look in the future with certainty and pride for our life.'
  },
]

export const Home = () => {
  return (
    <>
      <Banner />
      <AppContainer>
        <div className="flex items-center flex-col py-[90px]">
          <p className="text-[55px] mb-[54px]">Browse Our Menu</p>
          <div className="flex gap-[30px]">
          {
            menuData.map((item, index) => (
              <HomeMenuCard image={item?.img} title={item.title} desc={item.desc} key={index} />
            ))
          }
          </div>
        </div>
      </AppContainer>
      <CommonImageContainer image={'/images/common-image-1.png'} />
      <AppContainer>
        <Events />
      </AppContainer>
      <Delivery />
    </>
  );
};
