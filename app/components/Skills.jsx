import { Children } from "react"

const Skills = () => {
    return (
        <div className="pb-4">
            <h4 className="text-xl text-balance font-bold leading-tight">Skills</h4>
            <div className="py-4 flex flex-row gap-1.5 flex-wrap">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Javascript</Badge>
                <Badge>Node.js</Badge>
                <Badge>Express.js</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Python</Badge>
                <Badge>C</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>SQLite</Badge>
                <Badge>Postgres</Badge>
                <Badge>Supabase</Badge>
                <Badge>Firebase</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Selenium</Badge>
                <Badge>Puppeteer</Badge>
                <Badge>Figma</Badge>
                <Badge>Framer Motion</Badge>
                <Badge>Zustand</Badge>
                <Badge>Sanity CMS</Badge>
                <Badge>Firebase Messaging</Badge>
                <Badge>Git</Badge>
                <Badge>GitHub</Badge>
                <Badge>Postman</Badge>
                <Badge>Java</Badge>
                <Badge>Node.js</Badge>
                <Badge>Cloudflare</Badge>

            </div>
        </div>
    )
}

export default Skills

const Badge = ({ children }) => {
    return (
        <div className="text-xs hover:bg-white/80 transition-all duration-300 py-[3px] px-[8px] bg-white font-bold rounded-lg w-fit text-black">
            {children}
        </div>
    )
}