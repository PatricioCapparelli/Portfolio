import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl bg-black rounded-full p-1">Desarrollador de Software</span>
            <h1 className="h1 mb-6">
              Hola soy <br /> <span className="text-amber-500"> Patricio Capparelli</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Soy desarrollador Full-Stack y estudiante de programación, apasionado por dominar tanto el frontend como el backend. Me esfuerzo constantemente por aprender nuevas tecnologías e implementar mis conocimientos en proyectos.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-amber-500 hover:text-primary"
              >
                <a
                  href="/Curriculum.pdf"  
                  download="Curriculum.pdf"
                  className="text-base"
                  aria-label="Descargar CV"
                >Descargar CV</a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-11 h-11 border border-amber-500 rounded-full flex justify-center items-center text-xl hover:bg-amber-500 hover:text-primary transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;