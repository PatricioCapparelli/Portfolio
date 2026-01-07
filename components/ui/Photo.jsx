// components/ui/Photo.jsx
"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
                }}
                // --- CAMBIO DE TAMAÑO AQUI ---
                // Móvil: w-[240px] (antes 300)
                // Escritorio: w-[310px] (antes 400 o 500)
                className="relative w-[240px] h-[240px] xl:w-[310px] xl:h-[310px]"
            >
                {/* Image Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.3, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="absolute w-[90%] h-[90%] top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"

                    style={{
                        WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 47%, black 45%, transparent 100%)",
                        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",

                        WebkitMaskComposite: "source-in",
                        maskComposite: "intersect"
                    }}
                >
                    <Image
                        src="/photo.png"
                        priority
                        quality={100}
                        fill
                        alt="Foto de perfil de Patricio Capparelli"
                        className="object-contain object-top"
                    />
                </motion.div>

                {/* Circle SVG */}
                <motion.svg
                    className="w-full h-full"
                    fill="transparent"
                    viewBox="0 0 406 406"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="203"
                        cy="203"
                        r="200"
                        stroke="#f59e0b"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo;