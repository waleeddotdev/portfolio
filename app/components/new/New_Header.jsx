import Image from "next/image";
import {FiArrowUpRight} from "react-icons/fi";
import {AnimatePresence, motion, useScroll} from "framer-motion";
import {useEffect, useRef, useState} from "react";

const New_Header = () => {

    const containerRef = useRef()
    const [sectionToShow, setSectionToShow] = useState(1);

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    useEffect(()=>{
        scrollYProgress.on("change", (e) => {
            if(e <= 0.5)
            setSectionToShow(1)
            else if(e <= 1)
            setSectionToShow(2)
        })
    },[])

    return (
        <div className="flex flex-row relative  justify-between w-full items-start gap-20">
            <div className={"max-w-[250px]  pt-10 sticky top-0 z-50 w-full"}>
                <h1 className="text-3xl flex flex-row gap-2 text-balance leading-tight tracking-tight">
                    Waleed Nasir
                </h1>
                <h1 className="text-2xl flex flex-row gap-2 opacity-50 text-balance leading-tight tracking-tight">
                    Full Stack Developer
                </h1>
                <Image width={600} height={600} className={"rounded-xl h-[300px] object-cover mt-3"} src={"/assets/profile-pic.png"} alt={"Waleed Nasir"}/>
            </div>
            <div ref={containerRef} className={"h-[250svh]  relative"}>
                <div className={"w-full flex  pt-10 sticky top-0 flex-col gap-5 pb-[30svh]"}>
                    <AnimatePresence mode={"wait"}>
                    {sectionToShow === 1 && (
                       <>
                           <motion.div layout={true} layoutScroll={true} layoutDependency={false} className={"flex flex-row gap-5 justify-between items-center "}>
                               <div className={"flex flex-col justify-center items-start"}>
                                   <p className={"font-medium cursor-pointer w-fit flex flex-row  justify-center items-center tracking-tight leading-tight text-5xl"}>Email <FiArrowUpRight size={60} className={"opacity-50"} /></p>
                                   <p className={"font-medium cursor-pointer w-fit flex flex-row justify-center items-center tracking-tight leading-tight text-5xl"}>Whatsapp <FiArrowUpRight size={60} className={"opacity-50"} /></p>
                               </div>
                               <div className={"flex flex-col justify-center items-end"}>
                                   <p className={"font-medium cursor-pointer w-fit flex flex-row justify-center items-center tracking-tight leading-tight text-5xl"}>Instagram <FiArrowUpRight size={60} className={"opacity-50"} /></p>
                                   <p className={"font-medium cursor-pointer w-fit flex flex-row justify-center items-center tracking-tight leading-tight text-5xl"}>Blogs <FiArrowUpRight size={60} className={"opacity-50"} /></p>
                               </div>
                           </motion.div>
                           <motion.p layout={true} layoutId={"heading-1"} layoutScroll={true} layoutDependency={true} className={"text-3xl opacity-50 leading-tight tracking-tight"}>I specialize in creating seamless functionality, dynamic interactions, and polished interfaces.</motion.p>
                           <motion.p layout={true} layoutId={"heading-2"} layoutScroll={true} layoutDependency={true} className={"text-2xl opacity-50 leading-tight tracking-tight"}>Currently a Freelance Full-Stack Developer</motion.p>
                       </>
                    )}

                    {sectionToShow === 2 && (
                        <>   <motion.p layout={true} layoutId={"heading-1"} layoutScroll={true} layoutDependency={true} className={"text-3xl  leading-tight tracking-tight"}>I specialize in creating seamless functionality, dynamic interactions, and polished interfaces.</motion.p>
                            <motion.p layout={true} layoutId={"heading-2"} layoutScroll={true} layoutDependency={true} className={"text-2xl  leading-tight tracking-tight"}>Currently a Freelance Full-Stack Developer</motion.p>
                            <p className={"text-xl font-light leading-tight tracking-tight opacity-50 "}>I’ve developed and launched front-end solutions from concept to completion, working with diverse clients to bring their products to life and enhance their online presence.</p>
                            <p className={"text-xl font-light leading-tight tracking-tight opacity-50 "}>My focus has been on transforming complex challenges into elegantly crafted, intuitive interfaces. I’m passionate about the details and continuously seek to expand my skills.</p>
                            <p className={"text-xl font-light leading-tight tracking-tight opacity-50 "}>A self-taught developer, I began my coding and design journey at the age of 14. Since then, I’ve learned extensively and remain dedicated to exploring new, innovative technologies.</p>
                        </>
                    )}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    )
}

export default New_Header