import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState('home')
  const navigate = useNavigate()
  console.log('active button', active)
  return (
    <div className="">
      <div className="bg-[#474747] px-[150px] py-[10px] flex justify-between text-[#fff]">
        <div className="flex gap-[28px]">
          <div className="flex gap-[10px] items-center">
            <img src="/icons/mobile.svg" width={15} height={15} alt="icon" />
            <p className="text-red">(+91) 78965 80989</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src="/icons/email.svg" width={15} height={15} alt="icon" />
            <p className="">bistrobliss@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-[10px]">
          <img src="/icons/facebook.svg" alt="icon" />
          <img src="/icons/instagram.svg" alt="icon" />
          <img src="/icons/twitter.svg" alt="icon" />
        </div>
      </div>
      <div className="flex justify-between py-[10px] px-[150px] items-center">
        <div className="flex gap-[5px] items-center">
          <img src="/icons/logo.svg" alt="icon" />
          <img src="/icons/logo-name.svg" alt="icon" />
        </div>
        <div className="flex gap-[180px]">
          <div className="flex gap-[24px]">
            <p className={`${active == 'home' ? 'text-[#AD343E] font-bold' : ''}`} onClick={() => setActive('home')}>Home</p>
            <p className={`${active == 'about' ? 'text-[#AD343E] font-bold' : ''}`} onClick={() => setActive('about')}>About</p>
            <p className={`${active == 'menu' ? 'text-[#AD343E] font-bold' : ''}`} onClick={() => setActive('menu')}>Menu</p>
            <p className={`${active == 'contact' ? 'text-[#AD343E] font-bold' : ''}`} onClick={() => setActive('contact')}>Contact</p>
            <p className={`${active == 'blogs' ? 'text-[#AD343E] font-bold' : ''}`} onClick={() => setActive('blogs')}>Blogs</p>
          </div>
          <button className="border border-[#000] px-[14px] py-[4px] rounded-2xl">Book a Table</button>
        </div>
      </div>
    </div>
  );
};
