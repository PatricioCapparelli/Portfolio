"use client";

import {Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; 
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import { navLinks } from "@/lib";

const MobileNav = () => {
    const pathName = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-amber-500" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* Logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Pato<span className="text-accent">.</span>
                </h1>
                </Link>
            </div>
            {/* Nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {navLinks.map((link,index) => {
                    return (
                    <Link 
                    href={link.path} 
                    key={index} 
                    className={`${link.path === pathName && "text-amber-500 border-b-2 border-amber-500"}
                    text-xl capitalize hover:text-amber-500 transition-all`}>
                        {link.name}
                    </Link>
                    )
                })}
            </nav>
        </SheetContent>
        </Sheet>
    
}

export default MobileNav;