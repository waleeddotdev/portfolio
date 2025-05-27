"use client";

import { scrollToElement } from "@/utils/ScrollTo";
import { AnimatePresence, motion } from "framer-motion";
import { BiUserCircle, BiBriefcase, BiCode, BiBookOpen } from "react-icons/bi";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Tooltip = ({ content, children }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative flex flex-col items-center"
        >
            {children}
            <AnimatePresence mode="wait">
                {hovered && (
                    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-white text-black rounded">
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FooterClose = ({ open, newPage = false }) => {

    const router = useRouter()

    return (
        <>
            {!open && (
                <motion.footer
                    layoutId="menu"
                    layout
                    layoutScroll={true}
                    layoutDependency={false}
                    style={{
                        borderRadius: "16px",
                    }}
                    className="pointer-events-auto bg-[#181818] relative  w-fit  p-5 flex flex-row justify-between shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] z-50 "
                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                >
                    {!open && (
                        <motion.div
                            className="flex flex-row text-sm font-medium gap-7 w-fit text-white justify-between"
                        >
                            <Tooltip content="About">
                                <motion.p
                                    onClick={() => {
                                        if (newPage) {
                                            router.push("/#about")
                                        } else {
                                            scrollToElement("about", "smooth", "center")
                                        }
                                    }}
                                    layout
                                    layoutScroll={true}
                                    layoutDependency={false}
                                    className="cursor-pointer flex flex-col items-center gap-1"
                                    layoutId="aboutLink"
                                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                                >
                                    <BiUserCircle className="h-[24px] w-[24px]" />
                                </motion.p>
                            </Tooltip>
                            <Tooltip content="Experience">
                                <motion.p
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
                                    className="cursor-pointer flex flex-col items-center gap-1"
                                    layoutId="experienceLink"
                                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                                >
                                    <BiBriefcase className="h-[24px] w-[24px]" />
                                </motion.p>
                            </Tooltip>
                            <Tooltip content="Education">
                                <motion.p
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
                                    className="cursor-pointer flex flex-col items-center gap-1"
                                    layoutId="educationLink"
                                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                                >
                                    <BiBookOpen className="h-[24px] w-[24px]" />
                                </motion.p>
                            </Tooltip>
                            <Tooltip content="Projects">
                                <motion.p
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
                                    className="cursor-pointer flex flex-col items-center gap-1"
                                    layoutId="projectsLink"
                                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                                >
                                    <BiCode className="h-[24px] w-[24px]" />
                                </motion.p>
                            </Tooltip>
                            <Tooltip content="Contact">
                                <motion.p
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
                                    className="cursor-pointer flex flex-col items-center gap-1"
                                    layoutId="contactLink"
                                    transition={{ duration: 0.5, type: "spring", damping: 18 }}
                                >
                                    <BiUserCircle className="h-[24px] w-[24px]" />
                                </motion.p>
                            </Tooltip>
                        </motion.div>
                    )}
                </motion.footer>
            )}
        </>
    );
};

export default FooterClose;
