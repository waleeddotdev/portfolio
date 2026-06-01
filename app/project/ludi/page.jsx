"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from "framer-motion";
import Footer from '@/app/components/footer/Footer';
import FooterClose from '@/app/components/footer/FooterClose';
import { BiChevronLeft } from 'react-icons/bi';
import { FiGlobe } from 'react-icons/fi';
import {
    PiSuitcaseLight,
    PiGameController,
    PiTrophy,
    PiUsersThree,
    PiDeviceMobile,
    PiCpu
} from "react-icons/pi";
import { TbCopy } from "react-icons/tb";
import { MdDone, MdCheckCircle } from "react-icons/md";
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
                        Let's build your next mobile app
                    </p>
                    <p className="text-sm text-balance opacity-60">
                        Reach out if you'd like to collaborate on React Native, Expo, or serverless real-time architectures.
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
                <TbCopy /> Email
            </motion.div>
            <motion.div initial={{ y: isCopied ? 0 : -100, opacity: 1 }} animate={{ y: isCopied ? 0 : -100, opacity: 1 }} transition={{ type: "smooth", duration: 0.3, ease: "easeInOut" }} className='flex flex-row gap-1 py-1 px-2 absolute top-0 justify-center items-center'>
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
    const stack = ['React Native', 'Expo', 'Convex', 'Clerk', 'Firebase FCM', 'Expo Notifications', 'NativeWind', 'IGDB API'];

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 justify-between items-start'>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center opacity-60'><PiSuitcaseLight /> <span>Project</span></div>
                    <p className='font-bold text-lg'>Ludi Social</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center mb-1 opacity-60'><span>The Gist</span></div>
                    <p className='text-xs text-balance font-medium'>
                        A mobile social network for gamers, modeled after Letterboxd. It lets users search games, write reviews, add friends, and share custom lists. The key differentiator is a custom matchmaking algorithm that ranks games based on head-to-head choices made in a comparison mini-game.
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
                {/* <a href="https://ludi.social" target="_blank" rel="noopener noreferrer" className="text-xs font-medium cursor-pointer hover:bg-white/80 transition-all duration-300 text-black bg-white py-[2.5px] px-[8px] rounded-md flex flex-row gap-1 items-center">
                    <FiGlobe /> Join Beta
                </a> */}
            </div>
        </div>
    )
}

const BentoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1: Main Mockup (Spans 2 columns, 2 rows) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-2 md:row-span-2 h-full">
                {/* <div className='flex items-center gap-2 mb-2 opacity-60 px-1'>
                    <PiDeviceMobile /> <span className='text-xs'>App Cover Mockup</span>
                </div> */}
                <img
                    src="/assets/projects/ludi/cover.png"
                    className="rounded-xl h-full w-full object-cover border-[6px] border-white/10 shadow-2xl bg-[#121212]"
                    alt="Ludi Application Cover"
                    onError={(e) => {
                        // fallback to a generic styling block if they haven't uploaded the image yet
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
                <div className="hidden h-[450px] w-full rounded-xl border-[6px] border-dashed border-white/10 bg-[#121212] flex-col items-center justify-center text-center p-5">
                    <PiGameController size={48} className="opacity-40 animate-pulse text-purple-400 mb-2" />
                    <p className="text-sm font-medium">Ludi Mobile Mockup</p>
                    <p className="text-xs opacity-60 max-w-xs mt-1">Image path: `/assets/projects/ludi/cover.png`. Create this directory and add your app screenshot here!</p>
                </div>
            </motion.div>

            {/* Card 2: Ranking algorithm (Text Card) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-between h-full min-h-[210px]">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-purple-500/80' />
                        <p className="text-sm font-medium">Algorithmic Matchups</p>
                    </div>
                    <p className="text-xs opacity-60">Gamified Ranking Loop</p>
                </div>
                <p className="text-xs mt-2 opacity-90 leading-relaxed">
                    Rating games out of 5 stars is hard. The app replaces standard ratings with a pairwise comparison mini-game (e.g., 'Elden Ring vs. Skyrim'). Based on these choices, the algorithm generates a highly personalized, dynamic game ranking for each user.
                </p>
            </motion.div>

            {/* Card 3: Social Gaming lists */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-between h-full min-h-[210px]">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-blue-500/80' />
                        <p className="text-sm font-medium">Letterboxd for Gamers</p>
                    </div>
                    <p className="text-xs opacity-60">Catalog & Share Lists</p>
                </div>
                <p className="text-xs mt-2 opacity-90 leading-relaxed">
                    Cataloging and sharing are central to the app. Users can build themed lists, leave detailed reviews, search the game database, and follow friends to see their game libraries, recent updates, and custom rankings in real time.
                </p>
            </motion.div>

            {/* Card 4: Architecture */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#181818] p-5 rounded-xl flex flex-col justify-evenly h-full">
                <div>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <div className='w-2 h-2 rounded-full bg-emerald-500/80' />
                        <p className="text-sm font-medium">Mobile Stack</p>
                    </div>
                    <p className="text-xs opacity-60">Cross-platform client</p>
                </div>
                <p className="text-xs mt-2 opacity-90 leading-relaxed">
                    Built using <strong>React Native and Expo</strong> for a single, cross-platform codebase targeting iOS and Android. I integrated <strong>Clerk</strong> for seamless auth, and <strong>Firebase FCM</strong> plus Expo Notifications to keep users updated on friend activity.
                </p>
            </motion.div>

            {/* Card 5: Pre-Release / App store prep */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="md:col-span-2 relative rounded-xl overflow-hidden border-[6px] border-white/10 min-h-[250px] bg-[#121212]">

                <img
                    src="/assets/projects/ludi/features.png"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />

                <div className="hidden absolute inset-0 flex-col items-center justify-center p-5 bg-gradient-to-br from-purple-950/20 to-black/80">
                    <PiCpu size={32} className="opacity-40 text-purple-400 mb-1" />
                    <p className="text-xs opacity-60">Secondary mockup: `/assets/projects/ludi/features.png`</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent p-5 flex flex-col justify-between">
                    <div>
                        <div className='flex flex-row items-center gap-2 mb-1'>
                            <div className='w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse' />
                            <span className="text-xs font-bold uppercase tracking-wider text-yellow-500">Release Prep</span>
                        </div>
                        <p className="text-sm font-bold text-white drop-shadow-md">App Store & Play Store Testing</p>
                    </div>
                    <div className="space-y-3 max-w-sm">
                        <p className="text-xs opacity-90 text-white drop-shadow-md leading-relaxed">
                            The app is currently in closed-beta testing via TestFlight and Google Play Console. Firebase push notification pipelines are actively being debugged and App Store listing assets are being finalized for public release.
                        </p>
                        <a href="https://ludi.social" target="_blank" rel="noopener noreferrer" className="text-xs font-medium cursor-pointer hover:bg-white/80 transition-all duration-300 text-black bg-white py-[2.5px] px-[8px] rounded-md w-fit flex flex-row gap-1 items-center">
                            <FiGlobe /> Join testing at ludi.social
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Card 6: Live Activity feed */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="md:col-span-3 bg-[#181818] p-5 rounded-xl flex flex-col gap-2">
                <div className='flex items-center gap-2 text-purple-400 mb-1'>
                    <MdCheckCircle />
                    <span className='text-xs font-bold uppercase tracking-wider'>The Sync Engine</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="text-sm font-semibold">Reactivity with Convex Backend</p>
                    <p className="text-xs opacity-80 leading-relaxed">
                        Convex serves as the backend database and storage. I leveraged its reactive queries and persistent WebSocket connections to sync user feeds, reviews, and list updates across friends in real time, without polling or complex local cache management.
                    </p>
                </div>
            </motion.div>

        </div>
    )
}
