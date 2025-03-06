"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
    Tooltip,
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
        image: '/jswork.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/JS-Ecommerce'
    },
    {
        num: '02',
        category: 'frontend',
        title: 'project 2',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "React"}],
        image: '/react.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/ReactJs-Ecommerce'
    },
    {
        num: '03',
        category: 'frontend',
        title: 'project 3',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
        image: '/public/jswork.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/JS-Ecommerce'
    },
    {
        num: '04',
        category: 'fullstack',
        title: 'project 3',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
        image: '/public/jswork.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/JS-Ecommerce'
    },
    {
        num: '05',
        category: 'backend',
        title: 'project 1',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
        image: '/public/jswork.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/JS-Ecommerce'
    },
]



const Work = () => {
    const [project , setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }

    return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
            <div className=" flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/* outline num */}
                        <div className="text-7xl leading-none font-extrabold text-outline text-white">{project.num}
                        </div>
                    
                        {/* project category */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                        {/* project description */}
                        <p className="text-white/60">{project.description}</p>
                        {/* project description */}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                                return <li key={index} className="text-xl text-accent">{item.name}
                                {index !== project.stack.length - 1 && ','}
                                </li>
                            })}
                        </ul>
                        {/* border */}
                        <div className="border border-white/20"></div>
                        {/* buttons */}
                        <div className="flex items-center gap-4">
                            {/* live project button */}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className=" text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/* github project button */}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className=" text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>GitHub repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}>
                        {projects.map((project, index) => {
                            return (
                                <SwiperSlide key={index}className="w-full">
                                <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20">
                                {/* overlay */}
                                <div></div>
                                {/* image */}
                                <div className="relative w-full h-full">
                                    <Image src={project.image} fill 
                                    className="object-cover"
                                    alt=""/>
                                </div>
                                </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.div>
    )
};

export default Work;