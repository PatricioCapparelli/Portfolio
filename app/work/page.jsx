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
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description:
            ' E-commerce utilizando javascript vanilla.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
        image: '/jswork.png',
        live: 'https://js-ecommerce-jsovl37wj-patriciocapparellis-projects.vercel.app/',
        github: 'https://github.com/PatricioCapparelli/JS-Ecommerce'
    },
    {
        num: '02',
        category: 'frontend',
        title: 'project 2',
        description:
            'E-commerce utilizando React y Firestore para el manejo de productos y compras.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "React"}],
        image: '/react.png',
        live: 'https://react-js-ecommerce-three.vercel.app/',
        github: 'https://github.com/PatricioCapparelli/ReactJs-Ecommerce'
    },
    {
        num: '03',
        category: 'frontend',
        title: 'project 3',
        description:
            'Paint windows 95, utilizando javascript vanilla.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
        image: '/paintjs.png',
        live: 'https://paint-js-seven.vercel.app/',
        github: 'https://github.com/PatricioCapparelli/JS-Ecommerce'
    },
    {
        num: '04',
        category: 'fullstack',
        title: 'project 4',
        description:
            'Implementación de un CRUD para la API utilizando SSR con Node.js, Express, Handlebars y MongoDB como base de datos para el manejo de los productos.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}, { name: "MongoDB" }, { name: "Mongoose" }],
        image: '/fullstack.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/ProyectoFinal-backend'
    },
    {
        num: '05',
        category: 'backend',
        title: 'project 5',
        description:
            'Sistema de autenticación de usuarios utilizando un servidor basado en capas, JSON Web Tokens (JWT) y Mongoose para manejar la base de datos. permite a los usuarios registrarse, iniciar sesión, y acceder a recursos protegidos de manera segura mediante tokens de autenticación. Ademas tiene un sistema de carritos para añadir o eliminar productos dependiendo el rol del usuario.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}, { name: "MongoDB"}, { name: "Mongoose"}],
        image: '/backend.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/proyectoFinal-Backend2'
    },
    {
        num: '06',
        category: 'Backend',
        title: 'project 6',
        description:
            'Desarrollé un sistema de gestión educativa que permite administrar estudiantes y sus calificaciones a través de un menú interactivo por consola. El programa maneja una matriz de calificaciones junto a listas paralelas (nombres, géneros, legajos), e incluye múltiples funcionalidades, a travez de unicamente logica y algoritmia, sin metodos.',
        stack: [{ name: "Python"}],
        image: '/parcial.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/I-Parcial-Programacion-UTN'
    },
    {
        num: '07',
        category: 'Full-Stack',
        title: 'project 7',
        description:
            'Desarrollé un juego de Batalla Naval creado con el modulo Pygame, para el segundo parcial de la Tecnicatura en Programación de la UTN.',
        stack: [{ name: "Python"}],
        image: '/batalla-naval.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/PROGRAMACION_I_SP'
    },
    {
        num: '08',
        category: 'Full-Stack',
        title: 'project 8',
        description:
            'Desarrollé una app movil de estacionamiento, en el mapa se renderizan las zonas que esta permitido estacionar y las que esta prohibido, pasandole las coordenadas a la API de BA Transportes, que devuelve los datos de la ciudad. Actualmente esta funcionando, pero sigue en desarrollo.',
        stack: [{ name: "Java, Kotlin"}],
        image: '/estacionapp.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/EstacionApp'
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
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-amber-500 transition-all duration-500 capitalize">{project.category} project</h2>
                        {/* project description */}
                        <p className="text-white/60">{project.description}</p>
                        {/* project description */}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                                return <li key={index} className="text-xl text-amber-500">{item.name}
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
                                            <BsArrowUpRight className=" text-white text-3xl group-hover:text-amber-500"/>
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
                                            <BsGithub className=" text-white text-3xl group-hover:text-amber-500"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Repositorio de GitHub</p>
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
                                <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20 rounded-xl">
                                {/* overlay */}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-xl"></div>
                                {/* image */}
                                <div className="relative w-full h-full">
                                    <Image src={project.image} fill 
                                    className="object-cover rounded-xl"
                                    alt=""/>
                                </div>
                                </div>
                                </SwiperSlide>
                            );
                        })}
                        {/* Slider buttons */}
                        <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"/>
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.div>
    )
};

export default Work;