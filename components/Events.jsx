import React from 'react'

const cardData = [
    {
        img: '/images/events-1.png',
        title: "Caterings",
        desc: "In the new era of technology we look in the future with certainty for life.",
    },
    {
        img: '/images/events-2.png',
        title: "Weddings",
        desc: "In the new era of technology we look in the future with certainty for life.",
    },
    {
        img: '/images/events-3.png',
        title: "Birthdays",
        desc: "In the new era of technology we look in the future with certainty for life.",
    },
    {
        img: '/images/events-4.png',
        title: "Events",
        desc: "In the new era of technology we look in the future with certainty for life.",
    },
]

export const Events = () => {
  return (
    <div className='py-[120px]'>
        <p className='text-[55px]'>We also offer unique</p>
        <p className='text-[55px]'>services for your events</p>
        <div className='flex gap-[40px] mt-[70px]'>
            {
                cardData.map((item, index) => (
                    <div className='flex flex-col gap-[20px]' key={index}>
                        <img className='w-[306px] h-[320px] rounded-lg' src={item.img} alt="" />
                        <p className='text-[24px]'>{item.title}</p>
                        <p>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
