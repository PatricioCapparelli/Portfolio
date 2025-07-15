"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
{
    name: "Perfil",
    path: "/",
},
{
    name: "Trayectoria",
    path: "/resume",
},
{
    name: "Proyectos",
    path: "/work",
},
{
    name: "contacto",
    path: "/contact",
},
];


const Nav = () => {
    const pathname = usePathname();
    
    return <nav className="flex gap-6">
        {links.map((link, index)=> {
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-amber-500 border-b-2 border-amber-500"} capitalize font-medium hover:text-amber-500 transition-all`} >{link.name}</Link>
        })}
    </nav>
}

export default Nav;