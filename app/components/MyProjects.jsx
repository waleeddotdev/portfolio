
import Image from "next/image";
import Link from "next/link";
import { BiBookOpen } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";



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
                <ProjectCard
                    name={"AI Captioning Tool"}
                    img={"/assets/projects/caption.jpg"}
                    description={"I built this full-stack SaaS to solve a problem I faced as a video editor. It uses Remotion for programmatic video creation and AWS Lambda for serverless rendering, allowing creators to generate professional animated captions automatically and save hours of work."}
                    tech={["Next.js", "Supabase", "Remotion", "Tailwind CSS", "AWS Lambda", "Cloudflare R2", "Stripe", "React"]}
                    casestudy={'/project/caption'}
                />
                <ProjectCard
                    name={"Snappet CLI"}
                    img={"/assets/projects/snappetcli/cover.png"}
                    description={"To expand on my original Snappet app, I built this CLI version as an NPM package. This Node.js tool uses Puppeteer for headless browser automation, allowing developers to generate code screenshots directly from their terminal for a much faster workflow."}
                    tech={["JavaScript", "Node.js", "Puppeteer", "DOM"]}
                    link={"https://github.com/waleeddotdev/Snappet-CLI"}
                />
                <ProjectCard
                    name={"HinglishMagic"}
                    img={"/assets/projects/hinglishmagic.jpeg"}
                    description={"As a user of the Submagic tool, I needed Hinglish captions, but the app only generated Hindi. I took the initiative to build this Chrome extension to solve my own problem. It converts the Hindi output into easy-to-read Hinglish. The CEO of Submagic loved the idea and later added the feature to their official product."}
                    tech={["JavaScript", "Chrome Extension", "Gemini API", "DOM"]}
                    link={"https://github.com/waleeddotdev/HinglishMagic"}
                />
                <ProjectCard
                    name={"Match-Cut AI (Micro Saas)"}
                    img={"/assets/projects/matchcut/cover.png"}
                    description={"Creating cinematic match cuts is a huge challenge for video editors. This in-progress tool solves that by using AI to generate them automatically. It uses Remotion for programmatic video creation and AWS Lambda for serverless rendering, allowing creators to generate professional match cuts automatically and save hours of work."}
                    tech={["Next.js", "Supabase", "Remotion", "Tailwind CSS", "AWS Lambda", "Cloudflare R2", "Stripe", "React", "ShadcnUI"]}
                // casestudy={'/project/caption'}
                />
                <ProjectCard name={"Snappet"} img={"/assets/projects/snappet/Banner.png"} description={"As a developer, I wanted a better way to share code snippets online. I built this tool with Next.js and Framer Motion to create a polished, engaging UI. The core feature converts styled HTML directly into a downloadable image, which was a fun frontend challenge."} tech={["Next.js", "Tailwind CSS", "Framer Motion", "ShadcnUI", "Monaco", "HTML to Image"]} link={"https://snappetio.netlify.app/"} />
                <ProjectCard name={"Tanisha Web3 Consultant"} img={"/assets/projects/tanisha/banner.png"} description={"I delivered a complete website solution for a client who needed full control over her content. By integrating a Sanity CMS and automating her contact form with Google Sheets and Nodemailer, I built a system that empowered her to manage her business independently."} tech={["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS", "GoogleSheet Api", "Nodemailer", "Google Analytics"]} link={"https://tanishakatara.com/"} />
            </div>
        </div>
    )
}

export default MyProjects

const ProjectCard = ({ name, timeline, description, tech, link, img, casestudy }) => {
    if (casestudy || link) {
        return (
            <Link href={link ? link : casestudy} target={link ? "_blank" : "_self"} className="w-full hover:scale-[1.01] rounded-lg group h-fit hover:ring-[6px] ring-[1px] ring-white/15 overflow-hidden transition-all">
                <Image alt={name} style={{ objectFit: "cover", maxHeight: "205px", width: "100%", scale: "1.04" }} src={img} width={400} height={400} />
                <div className="flex flex-col h-full items-center justify-between group-hover:bg-gradient-to-t group-hover:from-white/10 group-hover:to-transparent transition-all duration-300">
                    <div className="p-4 space-y-1 tracking-tight  leading-tight">
                        <p className="font-bold">{name}</p>
                        <p className="text-xs">{timeline}</p>
                        <p className="text-xs tracking-normal leading-tight opacity-60">{description}</p>
                    </div>
                    <div className="p-4 w-full space-y-2 ">
                        <div className="flex w-full flex-row gap-1 flex-wrap">
                            {tech?.map((item, index) => <Badge key={index}>{item}</Badge>)}
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            {(link || casestudy) ? <div className="text-xs font-medium cursor-pointer hover:bg-white/80 transition-all duration-300 text-black bg-white py-[2.5px] px-[8px] rounded-md w-fit flex flex-row gap-1 justify-center items-center">
                                {link ? <FiGlobe /> : <BiBookOpen />}  {link ? 'Website' : 'Case Study'}
                            </div> : <div className="text-xs font-medium cursor-pointer hover:bg-white/80 transition-all duration-300 text-black bg-white py-[2.5px] px-[8px] rounded-md w-fit flex flex-row gap-1 justify-center items-center">Coming Soon</div>}
                            <GoArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
                        </div>

                    </div>
                </div>
            </Link>
        )
    } else {
        return (
            <div href={link ? link : casestudy} target={link ? "_blank" : "_self"} className="w-full hover:scale-[1.01] rounded-lg group h-fit hover:ring-[6px] ring-[1px] ring-white/15 overflow-hidden transition-all">
                <Image alt={name} style={{ objectFit: "cover", maxHeight: "205px", width: "100%", scale: "1.04" }} src={img} width={400} height={400} />
                <div className="flex flex-col h-full items-center justify-between group-hover:bg-gradient-to-t group-hover:from-white/10 group-hover:to-transparent transition-all duration-300">
                    <div className="p-4 space-y-1 tracking-tight  leading-tight">
                        <p className="font-bold">{name}</p>
                        <p className="text-xs">{timeline}</p>
                        <p className="text-xs tracking-normal leading-tight opacity-60">{description}</p>
                    </div>
                    <div className="p-4 w-full space-y-2 ">
                        <div className="flex w-full flex-row gap-1 flex-wrap">
                            {tech?.map((item, index) => <Badge key={index}>{item}</Badge>)}
                        </div>
                        <div className="text-xs font-medium cursor-pointer hover:bg-white/80 transition-all duration-300 text-black bg-white py-[2.5px] px-[8px] rounded-md w-fit flex flex-row gap-1 justify-center items-center">Coming Soon</div>

                    </div>
                </div>
            </div>
        )
    }
}


const Badge = ({ children }) => {
    return (
        <div className="text-[10px] hover:bg-white/5 transition-all duration-300 py-[2px] px-[6px] bg-white/15 font-bold rounded-md w-fit text-white">
            {children}
        </div>
    )
}
