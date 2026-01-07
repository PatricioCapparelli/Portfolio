"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import { projects } from "@/lib/data";


const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    
                    {/* --- TEXT SECTION --- */}
                    <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* Número del proyecto */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline stroke-white stroke-2">
                                {project.num}
                            </div>
                            
                            {/* Categoría */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-amber-500 transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            
                            {/* Descripción */}
                            <p className="text-white/60 text-lg leading-relaxed">{project.description}</p>
                            
                            {/* Stack (Lista de tecnologías) */}
                            <ul className="flex gap-4 flex-wrap">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-amber-500">
                                        {item.name}{index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="border border-white/20"></div>
                            
                            {/* --- BOTONES (LIVE Y GITHUB) CORREGIDOS --- */}
                            <div className="flex items-center gap-4">
                                
                                {/* Botón Live Project (Solo se muestra si hay link) */}
                                {project.live && (
                                    <Link href={project.live} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-amber-500 transition-all duration-300">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-primary" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}

                                {/* Botón Github */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-amber-500 transition-all duration-300">
                                                <BsGithub className="text-white text-3xl group-hover:text-primary" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* --- SLIDER SECTION --- */}
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="h-auto mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="relative w-full group cursor-grab active:cursor-grabbing">
                                            {/* Overlay */}
                                            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black/10 z-10 rounded-xl"></div>
                                            
                                            {/* Imagen Ajustable */}
                                            <Image
                                                src={project.image}
                                                width={1200}
                                                height={800}
                                                className="w-full h-auto object-cover rounded-xl"
                                                alt={`Preview del proyecto ${project.title}`}
                                                quality={100}
                                            />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}

                            {/* Botones del Slider */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-amber-500 hover:bg-amber-600 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
                                iconsStyles="text-primary font-bold"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;