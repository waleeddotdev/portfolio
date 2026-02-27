"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from "framer-motion";
import Footer from '@/app/components/footer/Footer';
import FooterClose from '@/app/components/footer/FooterClose';
import { BiChevronLeft } from 'react-icons/bi';
import { PiSuitcaseLight, PiDatabase, PiMapPin, PiUsers, PiBriefcase, PiShieldCheck } from "react-icons/pi";
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
                <FeatureGrid />
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

const FeatureGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1: Map Integration Showcase (Spans 2 columns) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 relative rounded-xl border-[6px] border-white/10 overflow-hidden min-h-[300px] group">
                {/* Replace with your map/dashboard screenshot */}
                <img 
                    src="/assets/projects/gmt/editor.png" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                    alt="Map View Integration"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent flex flex-col justify-end p-6">
                    <div className='flex items-center gap-2 mb-2'>
                        <PiMapPin className="text-blue-400" size={20} />
                        <p className="text-sm font-bold text-white">Interactive Mapping & Geo-Data</p>
                    </div>
                    <p className="text-xs opacity-80 text-white max-w-md leading-relaxed">
                        Integrated <strong>Leaflet.js</strong> and <strong>Google Places API</strong> for dynamic route planning. Built custom reverse geocoding to extract exact coordinates (lat/lng) directly from user searches.
                    </p>
                </div>
            </motion.div>

            {/* Card 2: Backend Architecture */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#181818] p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors h-full min-h-[300px]">
                <div>
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white mb-4">
                        <PiDatabase size={24} />
                    </div>
                    <p className="text-sm font-medium">Robust PHP Backend</p>
                    <p className="text-xs opacity-60 mt-2 leading-relaxed">
                        Built from scratch for our university database project. Features secure user authentication, complex relational <strong>MySQL</strong> queries, and strict state management using raw <strong>PHP Sessions</strong>.
                    </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Database Model</p>
                    <p className="text-xs opacity-60 mt-1">Highly normalized DB handling multiple user roles and booking logs.</p>
                </div>
            </motion.div>

            {/* Card 3: Role - Traveller */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#181818] p-5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    <p className="text-sm font-medium">For Travellers</p>
                </div>
                <p className="text-xs opacity-60 leading-relaxed">
                    Travellers can create private itineraries, invite friends to collaborate on trip plans, and chart exact routes on the interactive map.
                </p>
            </motion.div>

            {/* Card 4: Role - Business */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#181818] p-5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500/80" />
                    <p className="text-sm font-medium">For Businesses</p>
                </div>
                <p className="text-xs opacity-60 leading-relaxed">
                    Agencies can build comprehensive profiles, design custom trip packages, set profit margins, and publish them directly to the marketplace.
                </p>
            </motion.div>

            {/* Card 5: Role - Admin */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-[#181818] p-5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <p className="text-sm font-medium">For Admins</p>
                </div>
                <p className="text-xs opacity-60 leading-relaxed">
                    A dedicated control panel to monitor overall system activity, manage user accounts, handle booking disputes, and broadcast global announcements.
                </p>
            </motion.div>

            {/* Card 6: UI Showcase (Spans 3 columns) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="md:col-span-3 bg-[#181818] p-6 rounded-xl border border-white/5 flex flex-col md:flex-row items-center gap-6 mt-2">
                <div className="w-full md:w-5/12 space-y-3">
                    <p className="text-sm font-medium">Handcrafted, Beautiful UI</p>
                    <p className="text-xs opacity-60 text-balance leading-relaxed">
                        Rather than relying on heavy component libraries, the entire frontend was beautifully styled using raw HTML, CSS, and vanilla JS. It ensures a highly responsive, seamless experience—whether a user is browsing packages on a mobile phone or an admin is managing the database on a desktop.
                    </p>
                </div>
                <div className="w-full md:w-7/12 h-[200px] relative rounded-lg overflow-hidden border-[4px] border-white/5">
                    {/* Replace with your UI showcase video or image */}
                    <img 
                        src="/assets/projects/gmt/ui.png" 
                        className="absolute inset-0 w-full h-full object-cover" 
                        alt="User Interface Showcase"
                    />
                </div>
            </motion.div>

        </div>
    )
}

const Header = () => {
    return (
        <a href='/' className='flex flex-row items-center gap-1 hover:opacity-80 transition-opacity'>
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

    const stack = [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Google Places API",
        "Leaflet.js",
        "Lucide Icons",
    ];

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 justify-between items-start'>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center opacity-60 mb-1'><PiSuitcaseLight /> <span>Project</span></div>
                    <p className='font-bold text-xl'>GMT Grand Masti Tours</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center mb-1 opacity-60'><span>Overview</span></div>
                    <p className='text-xs text-balance font-medium leading-relaxed'>
                        A comprehensive Tour Management System built as a core university database project. It serves three distinct user groups: Travellers planning private trips with friends, Businesses selling custom packages, and Admins overseeing the platform. Features include interactive mapping, full marketplace integration, and robust session management.
                    </p>
                </div>
            </div>
            <div className='my-6'>
                <p className='text-xs opacity-60 mb-2'>Tech Stack</p>
                <div className='flex flex-row flex-wrap gap-2 items-center'>
                    {stack.map((item, index) => (
                        <React.Fragment key={index}>
                            <p className='text-xs bg-white/5 px-2 py-1 rounded-md border border-white/5'>{item}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Cta = () => {
    return (
        <div className='pb-20 mt-8'>
            <div className="bg-[#181818] p-8 flex flex-row gap-2 items-center space-y-3 rounded-xl border border-white/5">
                <div className='space-y-2'>
                    <p className="text-2xl font-bold capitalize">
                        Let's build your next platform
                    </p>
                    <p className="text-sm text-balance opacity-60">
                        Whether you need a complex database structure, map integration, or a full-stack platform. Let's chat.
                    </p>
                    <div className="pt-2">
                        <EmailBtn />
                    </div>
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
                <TbCopy />  Email
            </motion.div>
            <motion.div initial={{ y: isCopied ? 0 : -100, opacity: 1 }} animate={{ y: isCopied ? 0 : -100, opacity: 1 }} transition={{ type: "smooth", duration: 0.3, ease: "easeInOut" }} className='flex flex-row gap-1 py-1 px-2 absolute top-0 justify-center items-center font-medium'>
                <MdDone />  Copied
            </motion.div>
        </div>
    )
}