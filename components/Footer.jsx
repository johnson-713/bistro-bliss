

export const Footer = () => {
    const socialiconsData = [
        {
            image: '/icons/facebook-f.svg',
        },
        {
            image: '/icons/twitter-f.svg',
        },
        {
            image: '/icons/instagram-f.svg',
        },
        {
            image: '/icons/github-f.svg',
        },
    ]
  return (
    <div className="bg-[#474747] px-[150px] py-[120px] flex gap-[300px] text-[#fff]">
        <div className="flex flex-col gap-[30px] max-w-[290px]">
            <img src='/icons/logo-white.svg' alt='logo' />
            <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
            <div className="flex gap-[10px]">
                {
                    socialiconsData.map((i, ind) => (
                        <img key={ind} src={i?.image} alt='icons' />
                    ))
                }
            </div>
        </div>
        <div className="flex flex-col gap-[20px]">
            <p className="mb-[20px]">Pages</p>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Pricing</p>
            <p>Blog</p>
            <p>Contact</p>
        </div>
        <div className="flex flex-col gap-[20px]">
            <p className="mb-[20px]">Utility Pages</p>
            <p>Start Here</p>
            <p>Styleguide</p>
            <p>Password protected</p>
            <p>404 not found</p>
            <p>Licences</p>
            <p>Changelog</p>
        </div>
        <div className="flex flex-col gap-[20px]">
            <p className="mb-[20px]">Follow us on Instagram</p>
            <div className="grid grid-cols-2 gap-[20px]">
                <img className="rounded-[12px]" src="/images/follow-1.png" alt="" />
                <img className="rounded-[12px]" src="/images/follow-2.png" alt="" />
                <img className="rounded-[12px]" src="/images/follow-3.png" alt="" />
                <img className="rounded-[12px]" src="/images/follow-4.png" alt="" />
            </div>
        </div>
    </div>
  )
}
