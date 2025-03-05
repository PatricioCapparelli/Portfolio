"use client"
import {motion} from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className=" w-full h-full relative">
            <motion.div 
            initial={{opacity: 0}}
            animate={{
                opacity:1,
                transition: {delay:0.2, duration: 0.1, ease: "easeInOut"},
            }}
            >
                {/* Image */}

                <div className="w-[296px] h-[260px] xl:w-[480px] xl:h-[438px] rounded mix-blend-lighten absolute">
                    <Image 
                    src="/photo.png" 
                    priority 
                    quality={100} 
                    fill 
                    alt=""
                    className="object-contain"></Image>
                </div>

                {/* Circle */}
                <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg">
                    <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="4"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}></motion.circle>
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo;