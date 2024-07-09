
import { CommonImageContainer } from "./CommonImageContainer";

const data = [
  {
    text: "Locations",
    numbers: "3",
  },
  {
    text: "Founded",
    numbers: "1995",
  },
  {
    text: "Staff members",
    numbers: "65+",
  },
  {
    text: "Satisfied customers",
    numbers: "100%",
  },
];

export const About = () => {
  return (
    <div>
      <CommonImageContainer image={"/images/common-2.png"} />
      <div className='flex flex-col gap-[30px] justify-center items-center h-[70vh] bg-[url("/images/background-video.png")]'>
        <div className="flex flex-col justify-center gap-[30px] text-center items-center w-[600px]">
          <img src="/images/Play.png" alt="" width={60} />
          <p className="text-[#fff] text-[55px]">
            Feel the authentic & original taste from us
          </p>
        </div>
      </div>
      <div className="flex gap-[70px] bg-[#F9F9F7] py-[120px] px-[150px]">
        <div className="flex flex-col gap-[20px]">
          <p className="text-[55px]">
            A little information for our valuable guest
          </p>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <div className="flex flex-wrap mt-[60px] gap-[20px]">
            {data.map((i, ind) => (
              <div
                className="flex w-[200px]  px-[20px] py-[30px]  rounded-md flex-col bg-[#fff] justify-center items-center"
                key={ind}
              >
                <p>{i.numbers}</p>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/images/cook.png"
          alt=""
          height={680}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
