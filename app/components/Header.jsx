const Header = () => {
    return (
        <div className="flex flex-row justify-between w-full items-start gap-0">
            <div className="w-full">
                <div className="text-4xl md:text-6xl flex flex-row gap-2 text-balance leading-tight tracking-tight font-bold">
                    Hi, I'm Waleed
                    {/* <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" /> */}
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" className="size-14" />
                </div>
                <h2 className=" text-base md:text-xl text-balance leading-tight">Full-Stack Developer Building High-Performing Web Applications</h2>
            </div>
            <div className="flex items-center justify-center min-w-[130px] h-[130px]">
                <img src="/assets/profile-pic.png" alt="profile picture"
                    className="w-full h-full object-cover rounded-full bg-white/10 border border-white/15" />
            </div>
        </div>
    )
}

export default Header