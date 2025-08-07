const strongSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "Firebase",
    "Git",
    "GitHub",
    "Electron.js",
    "Figma",
    "Zustand",
    "Remotion",
    "Stripe",
    "Cloudflare R2",
    "Supabase",
    "MongoDB",
    "Sanity CMS",
    "Contentful CMS",
    "Vercel",
    "Netlify"
];


const learningSkills = [
    "Bun",
    "Hono",
    "Web Sockets",
    "C",
    "Python",
    "Java",
    "OOP",
    "DSA",
    "Linux & CLI",
];



const Skills = () => {
    return (
        <div className="pb-4">
            <h4 className="text-xl text-balance font-bold leading-tight">Skills</h4>
            <div className="py-4 flex flex-row gap-1.5 flex-wrap">
                {strongSkills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                ))}
            </div>
        </div>
    )
}

export default Skills

const Badge = ({ children, isLearning }) => {
    return (
        <div className={`text-xs  transition-all duration-300 py-[3px] px-[8px] ${isLearning ? "text-white bg-white/15 hover:bg-white/25" : "text-black bg-white hover:bg-white/80"} font-bold rounded-lg w-fit`}>
            {children}
        </div>
    )
}

export const SkillsImCurrentlyLearning = () => {
    return (
        <div className="pb-4">
            <h4 className="text-xl text-balance font-bold leading-tight">Skills I'm Currently Learning</h4>
            <div className="py-4 flex flex-row gap-1.5 flex-wrap">
                {learningSkills.map((skill) => (
                    <Badge isLearning key={skill}>{skill}</Badge>
                ))}
            </div>
        </div>
    )
}
