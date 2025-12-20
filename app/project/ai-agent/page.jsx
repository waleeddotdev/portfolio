"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from "framer-motion";
import Footer from '@/app/components/footer/Footer';
import FooterClose from '@/app/components/footer/FooterClose';
import { BiChevronLeft } from 'react-icons/bi';
import { PiSuitcaseLight } from "react-icons/pi";
import { TbCopy } from "react-icons/tb";
import {MdDone, MdEdit, MdSecurity} from "react-icons/md";
import confetti from 'canvas-confetti';
import copy from 'copy-to-clipboard';
import {SiN8N} from "react-icons/si";

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
        <main ref={containerRef} className="flex bg-[#080808]   flex-col items-center justify-between">
            <section className="max-w-3xl px-5 md:px-0 pb-96 md:pb-80 space-y-10 mt-10 w-full  h-full">
                <Header />
                <Title />
                <BentoGrid/>
                <Cta />
            </section>
            <div className="w-full pointer-events-none  fixed h-[100dvh] pb-5 flex flex-col justify-end items-center">
                {open && <Footer newPage={true} open={open} />}
                {!open && <FooterClose newPage={true} open={open} />}
            </div>
        </main>
    )
}

export default page

export const Cta = () => {
    return (
        <div className='pb-20'>
            <div className="bg-[#181818] p-8 flex flex-row gap-2 items-center space-y-3   rounded-xl">
                <div className='space-y-2'>
                    <p className="text-2xl font-bold capitalize">
                        Let's build your next automation
                    </p>
                    <p className="text-sm text-balance opacity-60">
                        Reach out if you'd like to collaborate on AI agents or Web3 automations. I'm all ears.
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

    const stack = ['n8n', 'Next.js', 'Twitter API', 'Tailwind CSS', 'Supabase', 'Gemini API', 'OpenAI', 'GraphQL', 'Snapshot API'];

    return (
        <div >
            <div className='flex flex-col md:flex-row gap-5 justify-between items-start'>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center  opacity-60'><PiSuitcaseLight /> <span>Project</span></div>
                    <p className='font-bold text-lg'>Web3 Governance Agent</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center mb-1 opacity-60'><span>Introduction</span></div>
                    <p className='text-xs text-balance font-medium'>
                        A custom AI agent built for Web3 consultant Tanisha Katara. It autonomously monitors governance proposals across major chains like Ethereum, Mantle, and Arbitrum. The agent detects new proposals or status changes, drafts tweets, and allows for human-in-the-loop approval before posting, ensuring she stays ahead of the news cycle without the manual fatigue.
                    </p>
                </div>
            </div>
            <div className='my-5'>
                <p className='text-xs opacity-60 mb-1'>Stack</p>
                <div className='flex flex-row flex-wrap gap-2 items-center'>
                    {stack.map((item, index) => (
                        <React.Fragment key={index}>
                            <p className='text-xs'>{item}</p>
                            {index !== stack.length - 1 && <div className='w-1 h-1 rounded-full bg-white' />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

const BentoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1: Main Visual (Large, spans 2 columns, 2 rows) */}
            {/* AESTHETIC: Thick border on media, rounded-xl */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-2 md:row-span-2 h-full">
                <img
                    src="/assets/projects/ai-agent/dashboard.png"
                    className="rounded-xl h-full w-full object-cover border-[6px] border-white/10 shadow-2xl"
                    alt="Dashboard Interface"
                />
            </motion.div>

            {/* Card 2: The Problem (Text Card) */}
            {/* AESTHETIC: bg-[#181818], p-5, rounded-xl, text-sm font-medium titles */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-between h-full min-h-[200px]">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-red-500/80' />
                        <p className="text-sm font-medium">The Noise</p>
                    </div>
                    <p className="text-xs opacity-60">Manual Tracking is Impossible</p>
                </div>
                <p className="text-sm mt-2 opacity-90">
                    Monitoring 10+ protocols like Arbitrum and Mantle manually means missing critical votes. We needed an observer that never sleeps.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-between h-full min-h-[200px]">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-blue-500/80' />
                        <p className="text-sm font-medium">The Brain</p>
                    </div>
                    <p className="text-xs opacity-60">n8n + Gemini</p>
                </div>
                <p className="text-sm mt-2 opacity-90">
                    I built workflows in n8n to scrape Tally & Snapshot. The data feeds into Gemini to draft tweets that sound exactly like Tanisha.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-evenly h-full">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-purple-500/80' />
                        <p className="text-sm font-medium">Full Coverage</p>
                    </div>
                    <p className="text-xs opacity-60">Tally, Snapshot & GitHub</p>
                </div>
                <p className="text-sm mt-2 opacity-90 text-balance">
                    It doesn't just watch one source. The agent monitors <strong>Snapshot</strong> for sentiment checks, <strong>Tally</strong> for on-chain execution, and <strong>GitHub</strong> for technical proposal discussions.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 relative rounded-xl overflow-hidden border-[6px] border-white/10 min-h-[280px]">

                <img src={"/assets/projects/ai-agent/n8n.png"} className={"absolute inset-0 w-full h-full object-cover opacity-60"} />

                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent to-50% p-5 flex flex-col justify-start">
                    <p className="text-sm font-medium text-white drop-shadow-md">Live Execution</p>
                    <p className="text-xs opacity-80 text-white drop-shadow-md">
                        Real-time proposal detection and tweet generation workflow running in n8n.
                    </p>
                </div>
            </motion.div>

            {/* Card 5: Stats/Live (Small) */}

            {/* Card 6: Dashboard Feature (Wide Bottom) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="md:col-span-3 bg-[#181818] p-5 rounded-xl flex flex-col  gap-6 items-center">
                <div className="w-full space-y-2">
                    <p className="text-sm font-medium">Human-in-the-Loop</p>
                    <p className="text-xs opacity-60">Trust but Verify</p>
                    <p className="text-sm opacity-90 text-balance">
                        The AI doesn't post blindly. I built a custom dashboard where drafts sit in a queue. Tanisha can edit, approve, or reject them. It gives her the speed of AI with the safety of manual review.
                    </p>
                </div>
                <div className="w-full">
                    <video
                        src="/assets/projects/ai-agent/video.mp4"
                        autoPlay loop muted
                        className="rounded-lg w-full h-auto border-[5px] border-white/5"
                    />
                </div>
            </motion.div>

        </div>
    )
}
