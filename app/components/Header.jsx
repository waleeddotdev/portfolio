const Header = () => {
    return (
        <div className="flex flex-row justify-between w-full items-start gap-0">
            <div className="w-full">
                <h1 className="text-6xl text-balance leading-tight tracking-tight font-bold">Hi, I'm Waleed 👋</h1>
                <h2 className="text-xl text-balance leading-tight">From code to design, bringing concepts to life with simplicity, style, and passion
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