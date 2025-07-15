"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Celular",
        description: "(+54) 11 2640-4894",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "capparelli00@hotmail.com",
        href: "mailto:capparelli00@hotmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Ubicación",
        description: "Lomas de Zamora, Buenos Aires, Argentina",
    },
    {
        icon: <FaGithub />,
        title: "GitHub",
        description: "github.com/PatricioCapparelli",
        href: "https://github.com/PatricioCapparelli",
    },
    {
        icon: <FaLinkedin />,
        title: "LinkedIn",
        description: "linkedin.com/in/patricio-capparelli",
        href: "https://www.linkedin.com/in/patricio-capparelli-a5ab552b1/",
    },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, transition: { delay: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Info */}
                    <div className="flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-amber-500 rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xl text-blue-400 hover:underline break-all"
                                            >
                                                {item.description}
                                            </a>
                                        ) : (
                                            <h3 className="text-xl">{item.description}</h3>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
