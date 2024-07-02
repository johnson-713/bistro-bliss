

export const Banner = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center gap-[32px] bg-[url('/images/banner.png')] bg-no-repeat bg-cover h-[85vh]">
        <div className="text-[100px]">
        <p>Best Food for</p>
        <p>your taste</p>
        </div>
        <div className="text-[20px]">
        <p>Discover delectable cuisine and unforgettable moments </p>
        <p>in our welcoming, culinary haven.</p>
        </div>
        <div className="flex gap-[30px]">
            <button className="bg-[#AD343E] py-[20px] px-[32px] text-[#fff] rounded-full">Book a Table</button>
            <button className="bg-[#fff] border-[#000] border py-[20px] px-[32px] text-[#000] rounded-full">Explore Menu</button>
        </div>
    </div>
  )
}
