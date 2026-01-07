// app/page.jsx
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// Components
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-8 xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-2 px-4 mb-4 text-sm tracking-wider uppercase text-white/80 font-medium cursor-default">
              <span className="w-2 h-2 rounded-full bg-amber-500 block animate-pulse"></span>
              Desarrollador de Software
            </div>
            <h1 className="h1 mb-6 text-4xl xl:text-5xl">
              <span className="font-light text-white/90">Hola soy</span> <br />
              <span className="text-amber-500 font-bold drop-shadow-sm">Patricio Capparelli</span>
            </h1>
            <p className="max-w-[380px] mb-9 text-white/80 text-base xl:text-lg leading-relaxed mx-auto xl:mx-0">
              Desarrollador Full Stack especializado en el ecosistema <strong>Java (Spring Boot/Hibernate)</strong> y stack <strong>MERN</strong>.
              Estudiante avanzado de la Universidad Tecnológica  Nacional (50% de la carrera aprobada). combino lógica sólida de backend con interfaces modernas y metodologías ágiles.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-primary transition-all duration-500 font-medium tracking-wider"
                asChild
              >
                <Link
                  href="/Curriculum.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Descargar CV</span>
                  <FiDownload className="text-xl" />
                </Link>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-11 h-11 border border-amber-500 rounded-full flex justify-center items-center text-amber-500 text-xl hover:bg-amber-500 hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  )
}

export default Home;