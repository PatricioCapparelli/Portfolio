import Link from "next/link";
import { FaGithub, FaLinkedin , FaInstagram } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/PatricioCapparelli"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/patricio-capparelli-a5ab552b1/"},
    {icon: <FaInstagram/>, path: "https://www.instagram.com/pato_capparelli/"},
]


const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
}

export default Social;