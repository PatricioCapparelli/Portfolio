"use client";

import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs,
    FaJs,
    FaJava,
    FaDocker
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiMongoose, SiPython, SiKotlin } from "react-icons/si";

// about 
const about = {
    title: 'Sobre mí',
    description: "Actualmente estoy cursando la tecnicatura en programación en la Universidad Tecnológica Nacional (UTN) y complementando mi aprendizaje de manera autodidacta. Estoy buscando mi primer trabajo para expandir mis conocimientos, aportar desde el primer dia y profesionalizarme.",
    info: [
        {
            fieldName: "Nombre",
            fieldValue: 'Patricio Capparelli'
        },
        {
            fieldName: "Celular",
            fieldValue: '(+54) 1126404894'
        },
        {
            fieldName: "Experiencia",
            fieldValue: '2+ Años'
        },
        {
            fieldName: "Nacionalidad",
            fieldValue: 'Argentina'
        },
        {
            fieldName: "Email",
            fieldValue: 'capparelli00@hotmail.com'
        }
    ]
}

//experience 
const experience = {
    icon: '',
    title: 'Mi Experiencia Autodidacta',
    description: "Dos años de aprendizaje autodidacta intensivo, durante el cual dominé el stack MERN (MongoDB, Express.js, React, Node.js) y otras tecnologías. En 2025, inicié la Tecnicatura en Programación en la UTN (Universidad Tecnológica Nacional), donde actualmente estoy en el segundo cuatrimestre del primer año, habiendo promocionado el primer cuatrimestre, la universidad me ayudo a profundizarme en el codigo y entender como funciona un lenguaje de programacion, en este caso Python. Adquiri conocimientos solidos en estructuras, tipos de datos y la formalizacion de algoritmos.",
    items: [
        {
            course: "Programacion I",
            title: "Universidad Tecnológica Nacional",
            year: "2025",
            duration: "4 meses"
        },
        {
            course: "Desarrollo Web",
            title: "CoderHouse",
            year: "2024",
            duration: "2 meses"
        },
        {
            course: "Javascript",
            title: "CoderHouse",
            year: "2024",
            duration: "2 meses"
        },
        {
            course: "React Js",
            title: "CoderHouse",
            year: "2024",
            duration: "2 meses"
        },
        {
            course: "Programacion Backend 1: Desarrollo avanzado",
            title: "CoderHouse",
            year: "2024",
            duration: "2 meses"
        },
        {
            course: "Programacion Backend 2: Diseño y Arquitectura Backend",
            title: "CoderHouse",
            year: "2025",
            duration: "2 meses"
        },
        {
            course: "Programación Backend 3: Testing y Escalabilidad Flex",
            title: "CoderHouse",
            year: "2025",
            duration: "2 meses"
        }
    ]
}

//skills 
const skills = {
    title: 'Tecnologias',
    items: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaJava />,
            name: "java",
        },
        {
            icon: <SiKotlin />,
            name: "Kotlin",
        },
        {
            icon: <FaDocker />,
            name: "docker",
        },
        {
            icon: <SiPython />,
            name: "Python",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiMongodb />,
            name: "mongo.db",
        },
        {
            icon: <SiExpress />,
            name: "express.js",
        },
        {
            icon: <SiMongoose />,
            name: "mongoose.db",
        },
    ]
}

//colors
const getTitleColor = (course) => {
    switch (course.toLowerCase()) {
        case "javascript":
            return "text-yellow-400"
        case "react js":
            return "text-blue-400"
        case "desarrollo web":
            return "text-green-400"
        default:
            return "text-orange-400"
    }
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipProvider,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">Sobre Mí</TabsTrigger>
                        <TabsTrigger value="experience">Experiencia</TabsTrigger>
                        <TabsTrigger value="skills">Tecnologías</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent
                            value="experience"
                            className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className=" bg-[#232329] py-6 px-10 h-[204px] rounded-xl flex flex-col justify-center items-center lg:items-start">
                                                    <span className={`${getTitleColor(item.course)} text-lg text-center lg:text-left`}>{item.course}</span>
                                                    <h3>{item.title}</h3>
                                                    <span>{item.year}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.duration}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent
                            value="skills"
                            className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left mb-10">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                {skills.items.map((skill, index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-4xl group-hover:text-amber-500 transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </TabsContent>
                        {/* about */}
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-base">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

        </motion.div>
    )
};

export default Resume;