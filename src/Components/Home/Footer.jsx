import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/Logo/Logos_S.png"

const Footer = () => {
    return (
        <footer className="bg-Violet/10 py-10 border-t-2 border-blue dark:border-purple dark:bg-pink/10">
            <div className="container mx-auto flex justify-between items-center">
                <div className=" font-Titan text-moon/40 dark:text-slate-500">&copy; 2023 SoffiaSanchezz</div>
                <div className="flex space-x-4">
                    <img src={Logo} alt="" width={50} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;