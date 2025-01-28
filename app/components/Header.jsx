const Header = () => {
    return (
        <div className="flex flex-row justify-between w-full items-start gap-0">
            <div className="w-full">
                <div className="text-4xl md:text-6xl flex flex-row gap-2 text-balance leading-tight tracking-tight font-bold">
                    Hi, I'm Waleed
                    {/* <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" /> */}
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" className="size-14" />
                </div>
                <h2 className=" text-base md:text-xl text-balance leading-tight">From code to design, bringing concepts to life with simplicity, style, and passion
                </h2>
            </div>
            <div className="">
                <div
                    style={{ backgroundImage: "url(/assets/profile-pic.png)", backgroundSize: "110%" }}
                    className="size-[130px] bg-cover bg-center rounded-full bg-white/10 border border-white/15">
                </div>
            </div>
        </div>
    )
}

export default Header