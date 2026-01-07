import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";


const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Patricio Capparelli | Desarrollador Full Stack",
  description: "Portfolio de Patricio Capparelli. Desarrollador especializado en Stack MERN, Next.js y soluciones web modernas.",
  keywords: ["Desarrollador Web", "React", "Next.js", "Argentina", "Full Stack"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es"> 
      <body className={JetBrainsMono.variable}>
        <PageTransition>
          <Header/>  
          {children}
        </PageTransition>      
      </body>
    </html>
  );
}