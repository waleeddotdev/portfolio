import { IoIosArrowForward } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";


const WorkExperience = () => {
    return (
        <div id="experience" className="">
            <h4 className="text-xl text-balance font-bold leading-tight">Work Experience</h4>
            <div className="flex flex-col gap-5 py-4">
                <WorkCard company={"Freelancer"} points={[
                    "Worked directly with clients to plan project goals and turn their ideas into clear requirements.",
                    "Focused on building responsive websites that work perfectly on desktops, tablets, and phones.",
                    "Helped clients improve their existing sites by fixing bugs, boosting performance, and adding new features.",
                    "Developed my professional portfolio and online presence to showcase my work and find new projects."
                ]} icon={<BsGlobe2 />} jobTitle={"Web Development & UI/Ux"} description={"I work as a freelancer, growing my brand on social media and partnering with clients to bring their ideas to life. My expertise lies in transforming concepts into fully functional and responsive web apps, ensuring they are tailored, efficient, and visually appealing."} timeline={"2024 - Present"} />
                <WorkCard company={"Fiverr"} jobTitle={"Web Development & UI/Ux"} points={[
                    "Finished 20+ web projects for different clients, earning a perfect 5-star rating for my work and communication.",
                    "Turned designs from tools like Figma into real, working websites using React, Next.js, and other modern technologies.",
                    "Built custom features for clients, including login systems, databases (with Supabase), and connecting to other online services (APIs).",
                    "Handled projects from start to finish, from talking with clients about their ideas to building and launching the final product."
                ]} description={"On Fiverr, I’ve worked as a full-stack developer and designer, completing 20+ projects with a perfect 5-star rating. I specialize in designing and building custom web solutions, turning concepts into fully functional and visually appealing websites. My goal is to deliver high-quality results that match your vision and needs."} timeline={"2021 - 2024"} />
            </div>
        </div>
    )
}

export default WorkExperience

const WorkCard = ({ company, jobTitle, description, timeline, icon, points }) => {
    return (
        <div className="flex cursor-pointer w-full flex-row group gap-4">
            <div>
                {icon ? <div
                    className="size-[50px] text-3xl text-black/80 bg-cover bg-center flex justify-center items-center rounded-full bg-white border border-white/15">
                    {icon}
                </div> : <div
                    className="size-[50px] text-white/30 bg-cover bg-center flex justify-center items-center rounded-full bg-white/10 border border-white/15">
                    {company[0]}
                </div>}
            </div>
            <div className="space-y-2 w-full">
                <div className="flex flex-row justify-between items-start w-full">
                    <div className="space-y-[1px]">
                        <h5 className="text-sm font-bold flex flex-row items-center">{company} <span><IoIosArrowForward className="group-hover:opacity-100  transition-all duration-300 group-hover:translate-x-1 opacity-0" strokeWidth={20} /></span></h5>
                        <h6 className="text-xs">{jobTitle}</h6>
                    </div>
                    <div className="opacity-60 text-sm">{timeline}</div>
                </div>
                {!points ? <div className="opacity-60 text-sm">{description}</div> : <ul style={{ listStyleType: 'disc' }} className="flex flex-col">
                    {points.map((item, index) => <li key={index} className="text-sm opacity-60">{item}</li>)}
                </ul>}
            </div>
        </div>
    )
}