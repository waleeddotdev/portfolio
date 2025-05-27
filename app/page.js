"use client"

import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Education from "./components/Education";
import Ending from "./components/Ending";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import { useScroll } from "framer-motion";
import FooterClose from "./components/footer/FooterClose";

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
            <section className="max-w-3xl py-5 pb-96 md:pb-80 space-y-10 mt-10 w-full  h-full">
                <Header />
                <About />
                <WorkExperience />
                <Education />
                <Skills />
                <MyProjects />
                <Ending />
            </section>
            <div className="w-full pointer-events-none  fixed h-[100dvh] pb-5 flex flex-col justify-end items-center">
                {open && <Footer open={open} />}
                {!open && <FooterClose open={open} />}
            </div>
        </main>
    );
}
