"use client";

import {
    FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaJava, FaPython,
    FaDocker, FaGitAlt, FaDatabase,
    FaLinux
} from "react-icons/fa";

import {
    SiTailwindcss, SiNextdotjs, SiTypescript, SiSpringboot,
    SiMongodb, SiMysql, SiNestjs, SiKubernetes, SiJavascript,
    SiHibernate
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// --- DATOS DE SOBRE MÍ ---
const about = {
    title: "Sobre mí",
    description: "Desarrollador Full Stack con 3 años de trayectoria intensiva. En 2026, me encuentro finalizando la Tecnicatura en Programación (UTN) con un desempeño académico destacado. Especializado en arquitectura Backend con Java (dominando Spring Boot y Hibernate) y en la creación de aplicaciones ágiles con el Stack MERN.",
    info: [
        { fieldName: "Nombre", fieldValue: "Patricio Capparelli" },
        { fieldName: "Experiencia", fieldValue: "3+ Años (Dev & IT)" },
        { fieldName: "Nacionalidad", fieldValue: "Argentina" },
        { fieldName: "Email", fieldValue: "capparelli00@hotmail.com" },
        { fieldName: "Idiomas", fieldValue: "Español, Inglés (B1)" },
    ]
};

// --- DATOS DE EXPERIENCIA ---
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Mi Experiencia',
    description: "Historial profesional demostrable en empresas de tecnología y logística, aportando soluciones en soporte y gestión de datos.",
    items: [
        {
            company: "C-Team",
            position: "Soporte Técnico & Análisis de Datos (MySQL)",
            duration: "2025 - Actualidad",
        },
        {
            company: "EnviosPack",
            position: "Logística & Soporte IT",
            duration: "2019 - 2025",
        },
        {
            company: "Freelance",
            position: "Desarrollador Full Stack MERN",
            duration: "2023 - Actualidad",
        },
    ]
};

// --- DATOS DE EDUCACIÓN ---
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'Formación Académica',
    description: "Carrera universitaria en curso con excelencia académica, complementada con especializaciones técnicas intensivas.",
    academicAverage: "9.25",
    academicStatus: "100% Materias Promocionadas",
    evidenceImage: "/image.png",
    items: [
        {
            institution: "UTN - F.R. Avellaneda",
            degree: "Tecnicatura Universitaria en Programación",
            duration: "2025 - 2026 (Avanzado)",
        },
        {
            institution: "UTN (Materias Clave)",
            degree: "Prog. I(Python) - Prog. II(Java) - Prog. III (Javascript/Typescript)",
            duration: "Nota: 10 (Promocionadas)",
        },
        {
            institution: "Santander Academy",
            degree: "IA Generativa & Prompt Engineering",
            duration: "2025",
        },
        {
            institution: "CoderHouse",
            degree: "Especialización Backend (Arquitectura & Testing)",
            duration: "2025",
        },
        {
            institution: "CoderHouse",
            degree: "Desarrollador Full Stack MERN",
            duration: "2024",
        },
    ]
};

// --- DATOS DE SKILLS ---
const skills = {
    title: "Tecnologías",
    description: "Dominio de lenguajes tipados, bases de datos relacionales/no-relacionales y herramientas de IA.",
    skillList: [
        { icon: <FaJava />, name: "Java 17" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <SiHibernate />, name: "Hibernate" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaLinux />, name: "Linux" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaGitAlt />, name: "Git/GitHub" },
    ]
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">

                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experiencia</TabsTrigger>
                        <TabsTrigger value="education">Educación</TabsTrigger>
                        <TabsTrigger value="skills">Habilidades</TabsTrigger>
                        <TabsTrigger value="about">Sobre mí</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">

                        {/* --- EXPERIENCIA --- */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-lg leading-relaxed">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3">
                                                <span className="text-amber-500">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left leading-snug">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-amber-500"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* --- EDUCACIÓN (CON ZOOM DE IMAGEN) --- */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>

                                {/* BLOQUE DESTACADO ACADÉMICO */}
                                <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-10 mb-4 bg-[#232329]/50 p-6 rounded-xl border border-white/5">

                                    {/* Texto y Stats */}
                                    <div className="flex-1 space-y-4">
                                        <p className="text-white/60 text-lg leading-relaxed">
                                            {education.description}
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                                            <div className="flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-lg border border-amber-500/20">
                                                <span className="text-2xl font-bold">★ {education.academicAverage}</span>
                                                <span className="text-sm font-medium uppercase tracking-wider">Promedio General</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-lg border border-green-500/20">
                                                <span className="text-sm font-bold uppercase tracking-wider">{education.academicStatus}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- AQUI ESTA EL CAMBIO: DIALOG PARA ZOOM --- */}
                                    <Dialog>
                                        {/* TRIGGER: La miniatura clickeable */}
                                        <DialogTrigger asChild>
                                            <div className="relative w-full max-w-[300px] h-[200px] rounded-xl overflow-hidden border border-white/10 group cursor-pointer shadow-lg hover:shadow-amber-500/20 transition-all">
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10 flex items-center justify-center">
                                                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">Ver Certificado</span>
                                                </div>
                                                <Image
                                                    src={education.evidenceImage}
                                                    fill
                                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                    alt="Certificado de notas UTN"
                                                />
                                            </div>
                                        </DialogTrigger>

                                        {/* CONTENT: La imagen en grande */}
                                        <DialogContent className="max-w-4xl w-full h-auto max-h-[90vh] p-0 bg-transparent border-none overflow-hidden flex justify-center items-center">
                                            <div className="relative w-full h-[80vh]">
                                                <Image
                                                    src={education.evidenceImage}
                                                    fill
                                                    className="object-contain"
                                                    quality={100}
                                                    alt="Certificado de notas UTN Full Size"
                                                />
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>

                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3">
                                                <span className="text-amber-500">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left leading-snug">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-amber-500"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* --- SKILLS --- */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-lg leading-relaxed">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-amber-500 transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* --- ABOUT --- */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-lg leading-relaxed">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li key={index} className="flex flex-row items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;