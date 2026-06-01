"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from "framer-motion";
import Footer from '@/app/components/footer/Footer';
import FooterClose from '@/app/components/footer/FooterClose';
import { BiChevronLeft } from 'react-icons/bi';
import {
    PiSuitcaseLight,
    PiFilmStrip,
    PiDownloadSimple,
    PiLightning,
    PiCloudArrowUp,
    PiDesktop,
    PiDeviceMobile
} from "react-icons/pi";
import { TbCopy } from "react-icons/tb";
import { MdDone, MdSchool, MdWarning } from "react-icons/md";
import confetti from 'canvas-confetti';
import copy from 'copy-to-clipboard';

const page = () => {

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
        <main ref={containerRef} className="flex bg-[#080808] flex-col items-center justify-between">
            <section className="max-w-3xl px-5 md:px-0 pb-96 md:pb-80 space-y-10 mt-10 w-full h-full">
                <Header />
                <Title />
                <ProjectGrid />
                <Cta />
            </section>
            <div className="w-full pointer-events-none fixed h-[100dvh] pb-5 flex flex-col justify-end items-center">
                {open && <Footer newPage={true} open={open} />}
                {!open && <FooterClose newPage={true} open={open} />}
            </div>
        </main>
    )
}

export default page

/* --- Components --- */

const Header = () => {
    return (
        <a href='/' className='flex flex-row items-center gap-1'>
            <div>
                <BiChevronLeft size={22} />
            </div>
            <div>
                <p className='text-sm font-medium'>Waleed Nasir</p>
                <p className='text-xs opacity-60'>Full Stack Developer</p>
            </div>
        </a>
    )
}

const Title = () => {
    return (
        <div >
            <div className='flex flex-col md:flex-row gap-5 justify-between items-start'>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center opacity-60'><PiSuitcaseLight /> <span>Project</span></div>
                    <p className='font-bold text-lg'>MatchCut</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center mb-1 opacity-60'><span>The Gist</span></div>
                    <p className='text-xs text-balance font-medium'>
                        A SaaS tool that automates the "Newspaper Match Cut" effect. I used Remotion to programmatically create video transitions and AWS Lambda to render them in the cloud. User inputs text, system gives back a video.
                    </p>
                </div>
            </div>
            <div className='my-5'>
                <p className='text-xs opacity-60 mb-1'>Stack</p>
                <div className='flex flex-row flex-wrap gap-2 items-center'>
                    {['Next.js', 'Remotion', 'AWS Lambda', 'Tailwind CSS', 'TypeScript'].map((item, index) => (
                        <React.Fragment key={index}>
                            <p className='text-xs'>{item}</p>
                            {index !== 4 && <div className='w-1 h-1 rounded-full bg-white' />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

/* --- THE GRID (Strictly following your brand guidelines) --- */
const ProjectGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* 1. Desktop Video (Spans 2 cols) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="md:col-span-2">
                <div className='flex items-center gap-2 mb-2 opacity-60 px-1'>
                    <PiDesktop /> <span className='text-xs'>The Builder UI</span>
                </div>
                {/* Fixed height to match the neighbor, object-cover ensures it fills nicely */}
                <div className='h-[300px] w-full'>
                    <video
                        src="/assets/projects/matchcut/tool.mp4"
                         autoPlay loop muted
                        className="rounded-xl w-full h-full object-cover border-[6px] border-white/10 shadow-2xl bg-[#121212]"
                    />
                </div>
            </motion.div>

            {/* 2. Mobile Video (Spans 1 col) - SHORTENED */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="md:col-span-1">
                <div className='flex items-center gap-2 mb-2 opacity-60 px-1'>
                    <PiDeviceMobile /> <span className='text-xs'>Mobile Output</span>
                </div>
                {/* Changed aspect ratio to fixed height to keep it short and aligned */}
                <div className="relative w-full h-[300px]">
                    <video
                        src="/assets/projects/matchcut/output.mp4"
                         autoPlay loop muted
                        className="rounded-xl w-full h-full object-cover border-[6px] border-white/10 shadow-2xl bg-[#121212]"
                    />
                </div>
            </motion.div>

            {/* 3. Tech Card: Remotion */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-between h-full min-h-[160px]">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-blue-500/80' />
                        <p className="text-sm font-medium">Remotion</p>
                    </div>
                    <p className="text-xs opacity-60">{"Code -> Video"}</p>
                </div>
                <p className="text-sm mt-2 opacity-90">
                    I used React components to design the video frames. CSS for styling the newspaper, and hooks for the zoom animation.
                </p>
            </motion.div>

            {/* 4. Tech Card: AWS Lambda */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-between h-full min-h-[160px]">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-orange-500/80' />
                        <p className="text-sm font-medium">AWS Lambda</p>
                    </div>
                    <p className="text-xs opacity-60">Serverless Rendering</p>
                </div>
                <p className="text-sm mt-2 opacity-90">
                    Rendering video is heavy. I offloaded it to Lambda functions to render frames in parallel, making it super fast.
                </p>
            </motion.div>

            {/* 5. Tech Card: Simple Usage */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-between h-full min-h-[160px]">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-purple-500/80' />
                        <p className="text-sm font-medium">The Workflow</p>
                    </div>
                    <p className="text-xs opacity-60">{"Config -> Download"}</p>
                </div>
                <p className="text-sm mt-2 opacity-90">
                    Users just upload an image and type text. The system handles all the complex masking and transitions automatically.
                </p>
            </motion.div>

            {/* 6. Status Card (Full Width) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="md:col-span-3 bg-[#181818] p-5 rounded-xl flex flex-col gap-2">
                <div className='flex items-center gap-2 text-yellow-500 mb-1'>
                    <MdSchool />
                    <span className='text-xs font-bold uppercase tracking-wider'>Project Paused</span>
                </div>
                <div className='flex flex-col md:flex-row gap-5 items-start'>
                    <div className='w-full'>
                        <p className="text-sm font-medium mb-1">The University Pivot</p>
                        <p className="text-sm opacity-90 text-balance leading-relaxed">
                            We had a working prototype and the rendering pipeline was solid. However, my university workload spiked, and I had to prioritize academics. While MatchCut isn't live publicly, building the Serverless Rendering Architecture with AWS Lambda taught me more about cloud infrastructure than any textbook.
                        </p>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export const Cta = () => {
    return (
        <div className='pb-20'>
            <div className="bg-[#181818] p-8 flex flex-row gap-2 items-center space-y-3 rounded-xl">
                <div className='space-y-2'>
                    <p className="text-2xl font-bold capitalize">
                        Need a video automation tool?
                    </p>
                    <p className="text-sm text-balance opacity-60">
                        I know my way around Remotion and AWS now. Let's chat if you have an idea.
                    </p>
                    <EmailBtn />
                </div>
            </div>
        </div>
    )
}

const EmailBtn = () => {

    const shootConfetti = () => {
        var defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
        };

        function shoot() {
            confetti({
                ...defaults,
                particleCount: 50,
                scalar: 1.4,
                shapes: ['star']
            });

            confetti({
                ...defaults,
                particleCount: 20,
                scalar: 0.95,
                shapes: ['circle']
            });
        }

        setTimeout(shoot, 0);
        setTimeout(shoot, 150);
        setTimeout(shoot, 250);
    }

    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCopied(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [isCopied]);

    return (
        <div className='bg-white text-black flex-col w-full max-w-[100px] min-h-[28px] flex justify-center items-center rounded-lg text-sm overflow-hidden cursor-pointer relative'>
            <motion.div initial={{ y: isCopied ? -100 : 0, opacity: 1 }} animate={{ y: isCopied ? -100 : 0, opacity: 1 }} transition={{ type: "smooth", duration: 0.3, ease: "easeInOut" }} onClick={() => {
                shootConfetti();
                setIsCopied(true);
                copy("waleeddotdev@gmail.com")
            }} className='flex flex-row gap-1 py-1 px-2 justify-center absolute top-0 items-center'>
                <TbCopy />  Email
            </motion.div>
            <motion.div initial={{ y: isCopied ? 0 : -100, opacity: 1 }} animate={{ y: isCopied ? 0 : -100, opacity: 1 }} transition={{ type: "smooth", duration: 0.3, ease: "easeInOut" }} className='flex flex-row gap-1 py-1 px-2 absolute top-0 justify-center items-center'>
                <MdDone />  Copied
            </motion.div>
        </div>
    )
}