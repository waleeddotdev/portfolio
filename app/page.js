"use client"

import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Ending from "./components/Ending";
import Footer from "./components/footer/Footer";
import MyProjects from "./components/MyProjects";
import { useScroll } from "framer-motion";
import FooterClose from "./components/footer/FooterClose";
import New_Header from "@/app/components/new/New_Header";
import WorkExperience from "@/app/components/WorkExperience";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import Header from "@/app/components/Header";

export default function Home() {

    const containerRef = useRef(null);
    const [open, setOpen] = useState(false)

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    useEffect(() => {
        scrollYProgress.on("change", (e) => {
            if (e >= 0.98) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        });
    }, []);

    return (
        <main ref={containerRef} className="flex bg-[#080808] min-h-screen  flex-col items-center justify-between">
            <section className="max-w-3xl px-5 space-y-5 md:px-0  pb-96 md:pb-80 w-full  h-full">
                {/*<New_Header />*/}
                <Header/>
                <About />
                <WorkExperience />
                <Education />
                <Skills />
                {/*<SkillsImCurrentlyLearning />*/}
                <MyProjects />
                <Ending />
            </section>
            <div className="w-full pointer-events-none  fixed h-[100svh] pb-5 flex flex-col justify-end items-center">
                {open && <Footer open={open} />}
                {!open && <FooterClose open={open} />}
            </div>
        </main>
    );
}
