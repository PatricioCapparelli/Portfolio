"use client";

import {
    FaHtml5, 
    FaCss3,
    FaReact, 
    FaNodeJs,
    FaJs} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiMongoose } from "react-icons/si";

// about 
const about = {
    title: 'About me',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: [
        {fieldName: "Name",
        fieldValue: 'Patricio Capparelli'
        },
        {fieldName: "Phone",
        fieldValue: '(+54) 1126404894'
        },
        {fieldName: "Experience",
        fieldValue: '1+ Year'
        },
        {fieldName: "Nationality",
        fieldValue: 'Argentina'
        },
        {fieldName: "Email",
        fieldValue: 'pcapparelli0@gmail.com'
        }
    ]
}

//experience 
const experience = {
    icon:'',
    title: 'My experience',
    description: "Desarrollador web Full Stack con un año de aprendizaje autodidacta intensivo, durante el cual dominé el stack MERN (MongoDB, Express.js, React, Node.js) y otras tecnologías. En 2025, inicié la Tecnicatura en Programación en la UTN (Universidad Tecnológica Nacional), donde actualmente estoy en primer año (tras aprobar el curso de ingreso), ampliando mis conocimientos.",
    items: [
        {
            course: "Desarrollo Web",
            title: "CoderHouse",
            year: "2024",
            duration: "2 months"
        },
        {
            course: "Javascript",
            title: "CoderHouse",
            year: "2024",
            duration: "2 months"
        },
        { 
            course: "React Js",
            title: "CoderHouse",
            year: "2024",
            duration: "2 months"
        },
        {
            course: "Programacion Backend 1: Desarrollo avanzado",
            title: "CoderHouse",
            year: "2024",
            duration: "2 months"
        },
        {
            course: "Programacion Backend 2: Diseño y Arquitectura Backend",
            title: "CoderHouse",
            year: "2025",
            duration: "2 months"
        },
        {
            course: "Programación Backend 3: Testing y Escalabilidad Flex",
            title: "CoderHouse",
            year: "2025",
            duration: "2 months"
        }
    ]
}

//skills 
const skills = {
    title: 'My skills',
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
    initial={{ opacity: 0}}
    animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="about">About me</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
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
                className="w-full">
                    skills
                </TabsContent>
                {/* about */}
                <TabsContent 
                value="about"
                className="w-full">
                    about
                </TabsContent>
                </div>
            </Tabs>
        </div>
        
    </motion.div>
    )
};

export default Resume;