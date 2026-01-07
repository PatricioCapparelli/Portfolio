"use client";

import { navLinks } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Nav = () => {
    const pathname = usePathname();
    
    return <nav className="flex gap-6">
        {navLinks.map((link, index)=> {
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-amber-500 border-b-2 border-amber-500"} capitalize font-medium hover:text-amber-500 transition-all`} >{link.name}</Link>
        })}
    </nav>
}

export default Nav;