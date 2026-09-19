"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from "framer-motion";
import Footer from '@/app/components/footer/Footer';
import FooterClose from '@/app/components/footer/FooterClose';
import { BiChevronLeft } from 'react-icons/bi';
import { FiGlobe } from 'react-icons/fi';
import { PiSuitcaseLight } from "react-icons/pi";
import { TbCopy } from "react-icons/tb";
import { MdDone } from "react-icons/md";
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
                <BentoGrid />
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

export const Cta = () => {
    return (
        <div className='pb-20'>
            <div className="bg-[#181818] p-8 flex flex-row gap-2 items-center space-y-3 rounded-xl">
                <div className='space-y-2'>
                    <p className="text-2xl font-bold capitalize">
                        Let's build your next AI app
                    </p>
                    <p className="text-sm text-balance opacity-60">
                        Reach out if you'd like to collaborate on AI agents, RAG architectures, or programmatic video tools.
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
            }} className='flex flex-row gap-1 py-1 px-2 justify-center absolute top-0 items-center font-medium'>
                <TbCopy /> Email
            </motion.div>
            <motion.div initial={{ y: isCopied ? 0 : -100, opacity: 1 }} animate={{ y: isCopied ? 0 : -100, opacity: 1 }} transition={{ type: "smooth", duration: 0.3, ease: "easeInOut" }} className='flex flex-row gap-1 py-1 px-2 absolute top-0 justify-center items-center font-medium'>
                <MdDone /> Copied
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
    const stack = ['Next.js', 'Remotion', 'Vercel AI SDK', 'Gemini API', 'Quran API', 'Tailwind CSS', 'Local Storage', 'RAG / AI Agent'];

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 justify-between items-start'>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center opacity-60'><PiSuitcaseLight /> <span>Project</span></div>
                    <p className='font-bold text-lg'>QuranVid</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center mb-1 opacity-60'><span>The Gist</span></div>
                    <p className='text-xs text-balance font-medium'>
                        An AI-powered video creation tool featuring an integrated RAG AI agent that generates customized Quran ayah videos on demand. Users prompt the AI agent for any verse, and it builds a ready-to-share video using Remotion and Vercel AI SDK. Features a prompt-driven editor with zero backend database requirement, utilizing local storage and user Gemini API keys.
                    </p>
                </div>
            </div>
            <div className='my-5 flex flex-row gap-4 items-center justify-between flex-wrap'>
                <div>
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
        </div>
    )
}

const BentoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1: Main Visual (Spans 2 cols, 2 rows) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 md:row-span-2 h-full min-h-[300px]">
                <img
                    src="/assets/projects/quranvid/cover.png"
                    className="rounded-xl h-full w-full object-cover border-[6px] border-white/10 shadow-2xl bg-[#121212]"
                    alt="QuranVid Dashboard"
                />
            </motion.div>

            {/* Card 2: RAG & AI Agent */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-between h-full min-h-[200px]">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-emerald-500/80' />
                        <p className="text-sm font-medium">RAG & AI Agent</p>
                    </div>
                    <p className="text-xs opacity-60">Vercel AI SDK + Quran API</p>
                </div>
                <p className="text-sm mt-2 opacity-90">
                    Integrates Vercel AI SDK to parse natural language prompts. The agent queries Quran API to retrieve exact Arabic text, audio recitations, and translation data.
                </p>
            </motion.div>

            {/* Card 3: Remotion Video Engine */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-between h-full min-h-[200px]">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-purple-500/80' />
                        <p className="text-sm font-medium">Programmatic Video</p>
                    </div>
                    <p className="text-xs opacity-60">Remotion Engine</p>
                </div>
                <p className="text-sm mt-2 opacity-90">
                    Uses Remotion to programmatically synthesize dynamic video compositions with synchronized Arabic text, audio waves, and translation captions.
                </p>
            </motion.div>

            {/* Card 4: Prompt-Driven Editor */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-between h-full">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-blue-500/80' />
                        <p className="text-sm font-medium">No-Code AI Editor</p>
                    </div>
                    <p className="text-xs opacity-60">Built-in Editor</p>
                </div>
                <p className="text-sm mt-2 opacity-90 text-balance">
                    No manual video editing required. Users prompt the AI agent to customize typography, themes, colors, or reciter voices directly.
                </p>
            </motion.div>

            {/* Card 5: Zero Backend & Privacy */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:col-span-2 bg-[#181818] p-5 rounded-xl flex flex-col justify-between min-h-[160px]">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-amber-500/80' />
                        <p className="text-sm font-medium">Zero Backend DB & BYO API Key</p>
                    </div>
                    <p className="text-xs opacity-60">Client Local Storage</p>
                </div>
                <p className="text-sm mt-2 opacity-90 text-balance">
                    Runs completely on the client using local storage. Users bring their own Gemini API key for the AI agent, providing total privacy and instant response times without a database server.
                </p>
            </motion.div>

            {/* Card 6: Showcase / Impact */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="md:col-span-3 bg-[#181818] p-6 rounded-xl border border-white/5 flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-5/12 space-y-3">
                    <p className="text-sm font-medium">Sadaqah Jariyah & Practical Tool</p>
                    <p className="text-xs opacity-60 text-balance leading-relaxed">
                        Built to showcase practical AI agent and RAG engineering while serving as an accessible tool for creators and Muslims worldwide to easily generate and share Quranic videos for social media.
                    </p>
                </div>
                <div className="w-full md:w-7/12 h-[200px] relative rounded-lg overflow-hidden border-[4px] border-white/5">
                    <img
                        src="/assets/projects/quranvid/editor.png"
                        className="absolute inset-0 w-full h-full object-cover bg-[#121212]"
                        alt="QuranVid Editor UI"
                    />
                </div>
            </motion.div>

        </div>
    )
}
