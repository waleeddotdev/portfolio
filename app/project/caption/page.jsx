"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from "framer-motion";
import Footer from '@/app/components/footer/Footer';
import FooterClose from '@/app/components/footer/FooterClose';
import { BiChevronLeft } from 'react-icons/bi';
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
        <main ref={containerRef} className="flex bg-[#080808]   flex-col items-center justify-between">
            <section className="max-w-3xl px-5 md:px-0 pb-96 md:pb-80 space-y-10 mt-10 w-full  h-full">
                <Header />
                <Title />
                <ImageGallery />
                <ScrollProgressDiv />
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
                        Let's bring your ideas to life
                    </p>
                    <p className="text-sm text-balance opacity-60">
                        Reach out if you'd like to collaborate or discuss design systems. I'm all ears.
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

const ImageGallery = () => {
    return (
        <div>
            <img src="/assets/projects/caption.jpg" className="rounded-xl h-auto w-full border-[6px] border-white/10" alt="" />
        </div>
    )
}

const Title = () => {
    return (
        <div>
            <div className='flex flex-row gap-5 justify-between items-start'>
                <div className='w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center  opacity-60'><PiSuitcaseLight /> <span>Project</span></div>
                    <p className='font-bold text-lg'>AI Captioning Tool</p>
                </div>
                <div className='w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center mb-1 opacity-60'><span>Introduction</span></div>
                    <p className='text-xs text-balance font-medium'>This AI-powered SaaS makes adding animated captions, overlays, and transitions to videos fast and easy. As someone with a background in video editing, I understand the struggles creators face. This tool is built to save time and remove the hassle of manual editing while making videos look more professional and engaging.</p>
                </div>
            </div>
            <div className='my-5'>
                <p className='text-xs opacity-60 mb-1'>Stack</p>
                <div className='flex flex-row gap-2 items-center'>
                    {['Next.js', 'Supabase', 'Remotion', 'Tailwind CSS', 'AWS Lambda', 'Cloudflare R2', 'Stripe', 'React'].map((item, index) => (
                        <React.Fragment key={index}>
                            <p className='text-xs'>{item}</p>
                            {index !== 7 && <div className='w-1 h-1 rounded-full bg-white' />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Div1 = ({
    Div1ScrollProgress,
    setDiv1ScrollProgress
}) => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["-100px start", "end start"]
    });

    useEffect(() => {
        scrollYProgress.on("change", (e) => {
            setDiv1ScrollProgress(e);
        });
    }, []);

    return (
        <div className=' flex flex-col justify-center items-center space-y-3 py-5' ref={containerRef}>
            <div className='bg-[#181818] p-5 rounded-xl'>
                <p className='text-sm font-medium'>The Spark</p>
                <p className='text-xs opacity-60'>Editor's Need, Developer's Vision</p>
                <div className='mt-1 text-sm'>
                    As a video editor, I found that existing captioning tools were not good enough. I wanted a tool that could be more creative and automate more tasks. I was curious about how these tools worked and wanted to build something better. My research led me to Remotion, and I was excited to see that I could use React to create videos programmatically. This gave me the power and control I needed to build a better solution.
                </div>
            </div>
            <video src="/assets/projects/div1.mp4" controls autoPlay loop className="rounded-xl h-auto w-full border-[6px] border-white/10" alt="" />
            <div className='bg-[#181818] p-5 rounded-xl'>
                {/* <p className='text-sm font-medium'>The Spark</p>
                <p className='text-xs opacity-60'>Editor's Need, Developer's Vision</p> */}
                <div className='mt-1 text-sm'>
                    I started by creating a web-based tool to make a simple way to add cool animated captions to videos. To do this, I needed a good base. For signing in and saving data, I chose Supabase because it offers a quick setup with PostgreSQL and user login features. For storing video files, I looked at Amazon S3, Cloudinary, and Cloudflare R2. Cloudflare R2 was the best choice because it doesn't charge for data leaving their system and has easy pricing, which is cheaper for lots of video files. For turning audio into text, I planned to use FFmpeg.wasm to get audio in the browser, upload it to R2, and then use AssemblyAI to get accurate text from the audio. With the text ready, I would use React to make dynamic caption styles and a user-friendly editor, adding smart design features using the Gemini API.

                </div>
            </div>
        </div>
    )
}

const Div2 = ({
    Div1ScrollProgress,
    setDiv1ScrollProgress
}) => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["-100px start", "end start"]
    });

    useEffect(() => {
        scrollYProgress.on("change", (e) => {
            setDiv1ScrollProgress(e);
        });
    }, []);

    return (
        <div className=' flex flex-col justify-center items-center space-y-3 py-5' ref={containerRef}>
            <div className='bg-[#181818] p-5 rounded-xl'>
                <p className='text-sm font-medium'>The Pivot</p>
                <p className='text-xs opacity-60'>Redefining the Path for Power and Privacy</p>
                <div className='mt-1 text-sm'>
                    As I worked on the web app, I started to wonder if I was just making something similar to what already exists, but with higher costs. I wanted to do something different and learn new things, so I kept asking myself questions. But what really made me think differently was realizing that a web-based approach wouldn't work well for the advanced features I wanted to add. For example, users would have to upload really big video files, which would take a long time and might not be private enough. That felt like a big problem.

                </div>
            </div>
            <video src="/assets/projects/div2.mp4" controls autoPlay loop className="rounded-xl h-auto w-full border-[6px] border-white/10" alt="" />
            <div className='bg-[#181818] p-5 rounded-xl'>
                {/* <p className='text-sm font-medium'>The Spark</p>
                <p className='text-xs opacity-60'>Editor's Need, Developer's Vision</p> */}
                <div className='mt-1 text-sm'>
                    This realization made me change my strategy moving to a desktop application. This approach solved the two main problems. Large video files could be processed on the user's machine, eliminating upload frustrations and enhancing user privacy. Furthermore, a desktop app could use the user's machine power for rendering. For users with less powerful systems, I envisioned a hybrid model using cloud functions like AWS Lambda for optional, intensive rendering tasks, offering the best of both worlds. This change wasn't just technical it was a re-commitment to building a truly powerful and user-centric tool.

                </div>
            </div>
        </div>
    )
}

const Div3 = ({
    Div1ScrollProgress,
    setDiv1ScrollProgress
}) => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["-100px start", "end start"]
    });

    useEffect(() => {
        scrollYProgress.on("change", (e) => {
            setDiv1ScrollProgress(e);
        });
    }, []);

    return (
        <div className=' flex flex-col justify-center items-center space-y-3 py-5' ref={containerRef}>
            <div className='bg-[#181818] p-5 rounded-xl'>
                <p className='text-sm font-medium'>The Desktop Dive</p>
                <p className='text-xs opacity-60'>Navigating New Frameworks & Building the Core</p>
                <div className='mt-1 text-sm'>
                    Switching to a desktop application raised new technical issues, mainly the choice of framework. As a web developer, Electron.js, which uses web technologies like React, was a clear choice. I briefly looked at Tauri, which promised smaller builds with Rust, but returned to Electron.js due to its bigger community and more resources. Electron.js has successfully been used to build complex applications like VS Code and Slack, showing it can deliver a good user experience despite being "bloated".

                </div>
            </div>

            <img src="/assets/projects/caption (2).jpg" className="rounded-xl h-auto w-full border-[6px] border-white/10" alt="" />
            <div className='gap-2 w-full grid grid-cols-3'>
                <img src="/assets/projects/caption (3).jpg" className="rounded-xl w-full border-[6px] border-white/10" alt="" />
                <img src="/assets/projects/caption (4).jpg" className="rounded-xl w-full border-[6px] border-white/10" alt="" />
                <img src="/assets/projects/caption (5).jpg" className="rounded-xl w-full border-[6px] border-white/10" alt="" />
            </div>
            <div className='bg-[#181818] p-5 rounded-xl'>
                {/* <p className='text-sm font-medium'>The Spark</p>
            <p className='text-xs opacity-60'>Editor's Need, Developer's Vision</p> */}
                <div className='mt-1 text-sm'>
                    Using Electron.js as the base, I used my existing knowledge in React, Tailwind CSS for styling, and Framer Motion for smooth animations to create a familiar yet powerful development environment. The desktop design made features like efficient video clip extraction from long videos much easier by not needing to upload them. Core features like AI-powered captions, dynamic caption styles, and an intuitive text-based video editor were rebuilt and improved for this new approach.


                </div>
            </div>
        </div>
    )
}

const Div4 = ({
    Div1ScrollProgress,
    setDiv1ScrollProgress
}) => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["-100px start", "end start"]
    });

    useEffect(() => {
        scrollYProgress.on("change", (e) => {
            setDiv1ScrollProgress(e);
        });
    }, []);

    return (
        <div className=' flex flex-col justify-center items-center space-y-3 py-5' ref={containerRef}>
            <div className='bg-[#181818] p-5 rounded-xl'>
                <p className='text-sm font-medium'>The Outcome & Future Vision</p>
                <p className='text-xs opacity-60'>A Powerful Tool and Continuous Learning</p>
                <div className='mt-1 text-sm'>
                    The outcome of this journey is ClipFast ⚡, a desktop application that provides creators with AI-driven animated captions, seamless video editing, and efficient clip extraction. Features like emoji support and sound effect integration are crafted to enhance creativity and streamline workflows.
                </div>
            </div>

            <img src="/assets/projects/caption (7).jpg" className="rounded-xl h-auto w-full border-[6px] border-white/10" alt="" />

            <div className='bg-[#181818] p-5 rounded-xl'>
                {/* <p className='text-sm font-medium'>The Spark</p>
            <p className='text-xs opacity-60'>Editor's Need, Developer's Vision</p> */}
                <div className='mt-1 text-sm'>
                    This project has been an invaluable learning experience, teaching me the significance of adaptability and the balance between technology and practicality. It has demonstrated how web development skills can be applied to diverse platforms. Looking ahead, I aim to explore optional cloud-rendering capabilities and enhance AI features to further empower video creators. However, progress is currently slow due to some issues. This journey is fueled by a passion for addressing real-world challenges faced by editors and a dedication to continuous learning in the dynamic tech landscape.
                </div>
            </div>
        </div>
    )
}

const ScrollProgressDiv = () => {

    const [Div1ScrollProgress, setDiv1ScrollProgress] = useState(0)
    const [Div2ScrollProgress, setDiv2ScrollProgress] = useState(0)
    const [Div3ScrollProgress, setDiv3ScrollProgress] = useState(0)
    const [Div4ScrollProgress, setDiv4ScrollProgress] = useState(0)

    useEffect(() => {
        if (Div1ScrollProgress === 1 && Div2ScrollProgress > 0) {
            setDiv1ScrollProgress(1)
        }
        if (Div2ScrollProgress === 1 && Div3ScrollProgress > 0) {
            setDiv2ScrollProgress(1)
        }
        if (Div3ScrollProgress === 1 && Div4ScrollProgress > 0) {
            setDiv3ScrollProgress(1)
        }
        if (Div4ScrollProgress === 1) {
            setDiv4ScrollProgress(1)
        }
    }, [Div1ScrollProgress, Div2ScrollProgress, Div3ScrollProgress, Div4ScrollProgress])

    return (
        <div className='relative'>
            <div className='flex sticky top-0 pt-5 z-40 flex-row items-center gap-2'>
                <motion.div className={`flex items-center justify-center min-w-12 transition-all duration-300 min-h-12 rounded-full ${Div1ScrollProgress > 0 ? 'bg-white text-black' : 'bg-[#242424]'}`}>
                    <p className='font-medium'>1</p>
                </motion.div>
                <motion.div className='w-full h-1 rounded-full bg-[#242424]'>
                    <motion.div className='w-[0px] h-full rounded-full bg-white' style={{ width: `${Div1ScrollProgress * 100}%` }}>
                    </motion.div>
                </motion.div>
                <motion.div className={`flex items-center justify-center min-w-12 transition-all duration-300 min-h-12 rounded-full ${Div2ScrollProgress > 0 ? 'bg-white text-black' : 'bg-[#242424]'}`}>
                    <p className='font-medium'>2</p>
                </motion.div>
                <motion.div className='w-full h-1 rounded-full bg-[#242424]'>
                    <motion.div className='w-[0px] h-full rounded-full bg-white' style={{ width: `${Div2ScrollProgress * 100}%` }}>
                    </motion.div>
                </motion.div>
                <motion.div className={`flex items-center justify-center min-w-12 transition-all duration-300 min-h-12 rounded-full ${Div3ScrollProgress > 0 ? 'bg-white text-black' : 'bg-[#242424]'}`}>
                    <p className='font-medium'>3</p>
                </motion.div>
                <motion.div className='w-full h-1 rounded-full bg-[#242424]'>
                    <motion.div className='w-[0px] h-full rounded-full bg-white' style={{ width: `${Div3ScrollProgress * 100}%` }}>
                    </motion.div>
                </motion.div>
                <motion.div className={`flex items-center justify-center min-w-12 transition-all duration-300 min-h-12 rounded-full ${Div4ScrollProgress > 0 ? 'bg-white text-black' : 'bg-[#242424]'}`}>
                    <p className='font-medium'>4</p>
                </motion.div>
            </div>
            <div className='flex flex-col gap-10'>
                <Div1 setDiv1ScrollProgress={setDiv1ScrollProgress} Div1ScrollProgress={Div1ScrollProgress} />
                <Div2 setDiv1ScrollProgress={setDiv2ScrollProgress} Div1ScrollProgress={Div2ScrollProgress} />
                <Div3 setDiv1ScrollProgress={setDiv3ScrollProgress} Div1ScrollProgress={Div3ScrollProgress} />
                <Div4 setDiv1ScrollProgress={setDiv4ScrollProgress} Div1ScrollProgress={Div4ScrollProgress} />
            </div>
        </div>
    )
}