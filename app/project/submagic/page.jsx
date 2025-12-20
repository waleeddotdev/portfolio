"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from "framer-motion";
import Footer from '@/app/components/footer/Footer';
import FooterClose from '@/app/components/footer/FooterClose';
import { BiChevronLeft, BiRightArrowAlt } from 'react-icons/bi';
import { PiSuitcaseLight, PiEye, PiMagicWand, PiCode, PiLightning } from "react-icons/pi";
import { TbCopy } from "react-icons/tb";
import { MdDone, MdWarning, MdVerified } from "react-icons/md";
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
            <section className="max-w-3xl px-5 md:px-0 pb-96 md:pb-80 space-y-8 mt-10 w-full h-full">
                <Header />
                <Title />
                <LogicFlow />
                <StoryLayout />
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

/* --- Logic Flow Component (Kept as is) --- */
const LogicFlow = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#181818] p-5 rounded-xl border border-white/5 relative group hover:border-white/10 transition-colors">
                <div className='bg-white/5 w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-white'>
                    <PiEye size={20} />
                </div>
                <div className='absolute right-[-21px] top-1/2 -translate-y-1/2 z-10 hidden md:block opacity-20'>
                    <BiRightArrowAlt size={24} />
                </div>
                <p className='text-sm font-medium'>1. Observe</p>
                <p className='text-xs opacity-60 mt-1'>
                    The extension watches the Submagic DOM for caption elements.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#181818] p-5 rounded-xl border border-white/5 relative group hover:border-white/10 transition-colors">
                <div className='bg-gradient-to-br from-purple-500/20 to-blue-500/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-purple-300'>
                    <PiMagicWand size={20} />
                </div>
                <div className='absolute right-[-21px] top-1/2 -translate-y-1/2 z-10 hidden md:block opacity-20'>
                    <BiRightArrowAlt size={24} />
                </div>
                <p className='text-sm font-medium'>2. Translation</p>
                <p className='text-xs opacity-60 mt-1'>
                    Text is sent to Gemini API with a "Convert to Hinglish" prompt.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#181818] p-5 rounded-xl border border-white/5 group hover:border-white/10 transition-colors">
                <div className='bg-white/5 w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-white'>
                    <PiCode size={20} />
                </div>
                <p className='text-sm font-medium'>3. Inject</p>
                <p className='text-xs opacity-60 mt-1'>
                    The new Hinglish text is force-injected back into the UI.
                </p>
            </motion.div>
        </div>
    )
}

/* --- Updated Story Layout --- */
const StoryLayout = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

            {/* 1. Main Video */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="md:col-span-2 relative group">
                <div className="absolute inset-0 bg-white/5 rounded-xl transform translate-y-2 translate-x-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                <video
                    src="/assets/projects/submagic/video.mp4"
                     autoPlay loop muted
                    className="rounded-xl h-auto w-full border-[6px] border-white/10 bg-[#121212]"
                    alt="Demo of extension"
                />
            </motion.div>

            {/* 2. Text Card - Context */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-[#181818] p-6 rounded-xl border border-white/5 flex flex-col justify-start gap-4 h-full">
                <div className='flex items-center gap-2'>
                    <div className='bg-yellow-500/10 p-1.5 rounded-md text-yellow-500'>
                        <PiLightning />
                    </div>
                    <p className='text-sm font-medium'>The Origin</p>
                </div>
                <p className='text-xs opacity-60 leading-relaxed'>
                    I mostly use AI just to test my "vibe coding" skills. When I couldn't find the Hinglish option in Submagic, I built it myself. It takes the transcription made by Submagic, sends it to Gemini, and puts the translated text right back into the editor automatically.
                </p>
                <div className='mt-auto pt-4 border-t border-white/5'>
                    <p className='text-xs font-medium text-white/40 uppercase tracking-widest'>Validation</p>
                    <p className='text-xs opacity-60 mt-1'>
                        I shared the v1 prototype on LinkedIn and the response was unexpected.
                    </p>
                </div>
            </motion.div>

            {/* 3. Stacked Images (Social Proof) - NEW LAYOUT */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative w-full h-full min-h-[300px] flex items-center justify-center group perspective-1000">

                {/* Back Card (Comment 1) */}
                <div className="absolute w-[85%] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                                group-hover:-translate-y-16 group-hover:rotate-0 group-hover:scale-105 group-hover:z-20
                                -rotate-6 translate-y-2 scale-95 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 z-0">
                    <img
                        src="/assets/projects/submagic/comment1.png"
                        className="rounded-xl w-full h-auto object-cover border-[6px] border-white/10 shadow-2xl"
                        alt="Nice work man!"
                    />
                </div>

                {/* Front Card (Comment 2) */}
                <div className="absolute w-[85%] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                                group-hover:translate-y-12 group-hover:rotate-0 group-hover:scale-105 z-10
                                rotate-3 shadow-2xl">
                    <img
                        src="/assets/projects/submagic/comment2.png"
                        className="rounded-xl w-full h-auto object-cover border-[6px] border-white/10 shadow-black/50"
                        alt="Let's integrate that"
                    />

                    {/* Badge on the top card */}
                    <div className='absolute -bottom-3 -right-3 bg-blue-500/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-500/20 flex items-center gap-1.5 shadow-lg'>
                        <MdVerified className='text-blue-400 text-sm' />
                        <span className='text-[10px] font-bold text-blue-200 tracking-wide'>CTO APPROVED</span>
                    </div>
                </div>

            </motion.div>

            {/* 4. Wide Text Card - Outcome */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="md:col-span-2 bg-[#181818] p-6 rounded-xl border border-white/5 flex flex-col md:flex-row gap-6 items-center">
                <div className='w-full md:w-2/3'>
                    <p className='text-sm font-medium mb-1'>The Outcome</p>
                    <p className='text-xs opacity-60 leading-relaxed text-balance'>
                        When I made v1, I shared it on LinkedIn and the Submagic CTO loved the idea. Later, a layout update broke it, so I fixed it in v2. Currently, this project is discontinued because Submagic officially added the feature.
                    </p>
                </div>
                <div className='w-full md:w-1/3 flex justify-start md:justify-end'>
                    <div className='flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg'>
                        <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse' />
                        <p className='text-xs font-medium text-red-400'>Discontinued</p>
                    </div>
                </div>
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
    return (
        <div >
            <div className='flex flex-col md:flex-row gap-5 justify-between items-start'>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center opacity-60'><PiSuitcaseLight /> <span>Project</span></div>
                    <p className='font-bold text-lg'>HinglishMagic v2</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center mb-1 opacity-60'><span>The Gist</span></div>
                    <p className='text-xs text-balance font-medium'>
                        I'm a video editor too, and I wanted Hinglish captions on my videos. Submagic didn't have the option, so I took matters into my own hands. I built a Chrome extension that takes the transcription, uses Gemini AI to convert it to Hinglish, and injects it back into the UI. Simple and easy.
                    </p>
                </div>
            </div>
            <div className='my-5'>
                <p className='text-xs opacity-60 mb-1'>Stack</p>
                <div className='flex flex-row flex-wrap gap-2 items-center'>
                    {['Chrome Extension API', 'Vanilla JS', 'Gemini API', 'DOM Manipulation'].map((item, index) => (
                        <React.Fragment key={index}>
                            <p className='text-xs'>{item}</p>
                            {index !== 3 && <div className='w-1 h-1 rounded-full bg-white' />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Cta = () => {
    return (
        <div className='pb-20'>
            <div className="bg-[#181818] p-8 flex flex-row gap-2 items-center space-y-3 rounded-xl">
                <div className='space-y-2'>
                    <p className="text-2xl font-bold capitalize">
                        Let's build something cool
                    </p>
                    <p className="text-sm text-balance opacity-60">
                        Reach out if you'd like to collaborate or just talk about vibe coding and AI wrappers.
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