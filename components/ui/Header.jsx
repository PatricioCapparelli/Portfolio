import Link from "next/link";
import { Button } from "./button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto justify-between flex items-center">
            { /* logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Pato<span className="text-amber-500">.</span>
                </h1>
            </Link>
            {/* Desktop nav & button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Button asChild>
                    <Link href="/contact">Escribime</Link>
                </Button>
            </div>
            { /* Mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
};

export default Header;