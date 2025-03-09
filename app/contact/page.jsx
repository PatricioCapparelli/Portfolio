"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const initValues = {
    email: "",
    name: "",
    firstname: "",
    lastname: "",
    phone: "",
    message: ""
}

const initState = { values: initValues }

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+54) 11 2640-4894",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "pcapparelli0@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Lomas de Zamora, Buenos Aires, Argentina",
    },
];

import { motion } from "framer-motion"
import { useState } from "react";

const Contact = () => {
    const [state, setState] = useState(initState);

    const { values } = state;

    const handleChange = ({ target }) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.firstname]: target.value
        }
    }))
    return (
        <motion.section initial={{ opacity: 1 }} animate={{ opacity: 1, transition: { delay: 0.4, ease: "easeIn" } }} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" isInvalid={!values.firstname}>
                            <h3 className="text-4xl text-accent">Let's work</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" name="firstname" placeholder="Nombre" value={values.firstname} onChange={handleChange}/>
                                <Input type="lastname" name="lastname" placeholder="Apellido" value={values.lastname} onChange={handleChange} />
                                <Input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
                                <Input type="phone" name="phone" placeholder="Celular" value={values.phone} onChange={handleChange} />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Servicio" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="frt">
                                            Frontend
                                        </SelectItem>
                                        <SelectItem value="bck">
                                            Backend
                                        </SelectItem>
                                        <SelectItem value="fsk">
                                            Fullstack
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                name="message"
                                className="h-[200px]"
                                placeholder="Dejame un mensaje."
                                value={values.message} onChange={handleChange}
                            />
                            <Button size="md" className="max-w-40 h-10" onClick={() => {

                            }}>Enviar</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default Contact;