import { time } from "motion";
import { FiGlobe } from "react-icons/fi";


const MyProjects = () => {
    return (
        <div id="projects" className="py-10">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h4 className=" text-balance tracking-tight  leading-tight text-base hover:bg-white/80 transition-all duration-300 py-1 px-3 bg-white font-medium rounded-lg w-fit text-black">My Projects</h4>
                <h1 className="text-5xl text-balance leading-tight tracking-tight text-center font-bold">Check out my latest work</h1>
                <h2 className="text-xl opacity-60 text-balance text-center leading-tight">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </h2>
            </div>
            <div className="w-full grid-cols-1 sm:grid-cols-2 py-5 grid gap-5">
                <ProjectCard name={"Snappet"} img={"/assets/projects/snappet/Banner.png"} description={"Snappet is a web app that allows developers to generate beautiful images of their code, making it easy to share on social media platforms such as Instagram, Twitter, and LinkedIn. With Snappet, you can showcase your coding skills in an attractive, engaging way by converting raw code into visually appealing images."} tech={["Next.js", "Tailwind CSS", "Framer Motion", "ShadcnUI", "Monaco", "HTML to Image"]} />
                <ProjectCard name={"Tanisha Web3 Consultant"} img={"/assets/projects/tanisha/banner.png"} description={"I worked with Web3 consultant Tanisha Katara to create her personal website with a CMS for easy content updates. I also integrated Google Sheets API for form submissions and Nodemailer for real-time email notifications."} tech={["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS", "GoogleSheet Api", "Nodemailer", "Google Analytics"]} link={"https://tanishakatara.com/"} />

            </div>
        </div>
    )
}

export default MyProjects

const ProjectCard = ({ name, timeline, description, tech, link, img }) => {
    return (
        <div className="w-full rounded-lg group border h-fit border-white/15 overflow-hidden">

            <div style={{ backgroundImage: `url(${img})` }} className="bg-white  bg-cover transition-all duration-300 w-full h-[180px]">
            </div>

            <div className="flex flex-col h-full items-center justify-between">
                <div className="p-3 space-y-1 tracking-tight  leading-tight">
                    <p className="font-bold">{name}</p>
                    <p className="text-xs">{timeline}</p>
                    <p className="text-xs tracking-normal leading-tight opacity-60">{description}</p>
                </div>
                <div className="p-3 space-y-2">
                    <div className="flex flex-row gap-1 flex-wrap">
                        {tech?.map((item, index) => <Badge key={index}>{item}</Badge>)}
                    </div>
                    {link && <a href={link} target="_blank" className="text-xs font-medium cursor-pointer hover:bg-white/80 transition-all duration-300 text-black bg-white py-[2.5px] px-[8px] rounded-md w-fit flex flex-row gap-1 justify-center items-center">
                        <FiGlobe />  Website
                    </a>}
                    {!link && <div className="text-xs font-medium cursor-pointer hover:bg-white/80 transition-all duration-300 text-black bg-white py-[2.5px] px-[8px] rounded-md w-fit flex flex-row gap-1 justify-center items-center">Comming Soon</div>}
                </div>
            </div>
        </div>
    )
}

const Badge = ({ children }) => {
    return (
        <div className="text-[10px] hover:bg-white/5 transition-all duration-300 py-[2px] px-[6px] bg-white/15 font-bold rounded-md w-fit text-white">
            {children}
        </div>
    )
}