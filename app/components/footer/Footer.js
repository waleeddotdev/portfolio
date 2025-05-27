"use client";

import { scrollToElement } from "@/utils/ScrollTo";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";


const Footer = ({ open, newPage = false }) => {

    const router = useRouter()

    return (
        <>
            {open && (
                <motion.footer
                    style={{
                        borderRadius: "16px",
                    }}
                    className=" bg-[#181818]  relative overflow-hidden w-full max-w-3xl p-10 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] pointer-events-auto  z-50"
                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                    layoutId="menu"
                    layout
                    layoutScroll={true}
                    layoutDependency={false}
                >
                    <div className="flex w-full flex-wrap gap-4 flex-row justify-between">
                        <AnimatePresence mode="popLayout">
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-wrap flex-col justify-between"
                                >
                                    <div className="text-white flex flex-wrap flex-col">
                                        <span className="text-sm font-medium">Waleed Nasir</span>
                                        <span className="text-sm text-white/60">
                                            Full Stack Developer
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap flex-col">
                                        <span className="text-sm text-white/60">&copy;</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {open && (
                            <motion.div

                                className="flex flex-col text-sm font-medium gap-4 w-fit text-white justify-start"
                            >
                                <motion.p
                                    className="cursor-pointer"
                                    onClick={() => {
                                        if (newPage) {
                                            router.push("/#about")
                                        } else {
                                            scrollToElement("about", "smooth", "center")
                                        }
                                    }
                                    }
                                    layout
                                    layoutScroll={true}
                                    layoutDependency={false}
                                    layoutId="aboutLink"
                                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                                >
                                    About
                                </motion.p>
                                <motion.p
                                    className="cursor-pointer"
                                    onClick={() => {
                                        if (newPage) {
                                            router.push("/#experience")
                                        } else {
                                            scrollToElement("experience", "smooth", "center")
                                        }
                                    }}
                                    layout
                                    layoutScroll={true}
                                    layoutDependency={false}
                                    layoutId="experienceLink"
                                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                                >
                                    Experience
                                </motion.p>
                                <motion.p
                                    className="cursor-pointer"
                                    onClick={() => {
                                        if (newPage) {
                                            router.push("/#education")
                                        } else {
                                            scrollToElement("education", "smooth", "center")
                                        }
                                    }}
                                    layout
                                    layoutScroll={true}
                                    layoutDependency={false}
                                    layoutId="educationLink"
                                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                                >
                                    Education
                                </motion.p>
                                <motion.p
                                    className="cursor-pointer"
                                    onClick={() => {
                                        if (newPage) {
                                            router.push("/#projects")
                                        } else {
                                            scrollToElement("projects", "smooth", "center")
                                        }
                                    }}
                                    layout
                                    layoutScroll={true}
                                    layoutDependency={false}
                                    layoutId="projectsLink"
                                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                                >
                                    Projects
                                </motion.p>
                                <motion.p
                                    className="cursor-pointer"
                                    onClick={() => {
                                        if (newPage) {
                                            router.push("/#contact")
                                        } else {
                                            scrollToElement("contact", "smooth", "center")
                                        }
                                    }}
                                    layout
                                    layoutScroll={true}
                                    layoutDependency={false}
                                    layoutId="contactLink"
                                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                                >
                                    Contact
                                </motion.p>
                            </motion.div>
                        )}

                        <AnimatePresence mode="popLayout">
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-wrap text-sm gap-4 text-white/60 flex-col justify-start"
                                >
                                    <span>Let's Connect</span>
                                    <a
                                        href="mailto:waleeddotdev@gmail.com"
                                        target="_blank"
                                        className=" hover:text-white transition-all duration: 0.5 flex flex-row gap-1 items-center"
                                    >
                                        Email <IoIosArrowForward size={15} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/waleeddotdev/"
                                        target="_blank"
                                        className=" hover:text-white transition-all duration: 0.5 flex flex-row gap-1 items-center"
                                    >
                                        Instagram <IoIosArrowForward size={15} />
                                    </a>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=923281663366&text=Hi%20Waleed%2C%20I%27m%20amazed%20by%20your%20work!%20%F0%9F%98%8A"
                                        target="_blank"
                                        className=" hover:text-white transition-all duration: 0.5 flex flex-row gap-1 items-center"
                                    >
                                        Whatsapp <IoIosArrowForward size={15} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/waleeddotdev"
                                        target="_blank"
                                        className=" hover:text-white transition-all duration: 0.5 flex flex-row gap-1 items-center"
                                    >
                                        Linkedin <IoIosArrowForward size={15} />
                                    </a>
                                    <a
                                        href="https://github.com/waleeddotdev"
                                        target="_blank"
                                        className=" hover:text-white transition-all duration: 0.5 flex flex-row gap-1 items-center"
                                    >
                                        Github <IoIosArrowForward size={15} />
                                    </a>
                                    <a
                                        href="/assets/resume.pdf"
                                        target="_blank"
                                        className=" hover:text-white transition-all duration: 0.5 flex flex-row gap-1 items-center"
                                        download >
                                        Resume <IoIosArrowForward size={15} />
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>



                        {/* <AnimatePresence mode="popLayout">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-wrap text-sm gap-4 text-white/60 flex-col justify-start"
                            >
                                <span>Currently 🎧</span>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/watch?v=hOHKltAiKXQ"
                                >
                                    <img
                                        src="https://i.scdn.co/image/ab67616d0000b273d9afe5c70c43cb2bd34605ea"
                                        className="rounded-lg"
                                        width={200}
                                        height={200}
                                    />
                                </a>
                            </motion.div>
                        </AnimatePresence> */}
                    </div>
                </motion.footer>
            )}
        </>
    );
};

export default Footer;
