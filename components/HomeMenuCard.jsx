import React from 'react'

export const HomeMenuCard = ({image, title, desc}) => {
  return (
    <div className='border border-[#DBDFD0] rounded-[10px] flex flex-col items-center px-[32px] py-[40px] gap-[30px]'>
        <img src={image} alt='image' width={100} />
        <p>{title}</p>
        <p>{desc}</p>
        <p>Explore Menu</p>
    </div>
  )
}
