import { useState } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcMms } from "react-icons/fc"

function SocialButton() {
    const [showSocial, setShowSocial] = useState(false);

    return (
        <div className="fixed bottom-4 right-4">
            <button
                className="bg-purple/50 dark:bg-moon/80 border-2 border-bluDark dark:bg-slate-400 dark:border-purple hover:bg-purple text-white rounded-full h-12 w-12 flex items-center justify-center focus:outline-none"
                onClick={() => setShowSocial(!showSocial)}
            >
                <FcMms className="text-3xl" />
            </button>
            {showSocial && (
                <div className="absolute bottom-20 right-0 bg-white dark:bg-moon shadow-md p-4 ">
                    <a href="https://wa.link/o5x1ij" className="block mb-2 text-Violet hover:text-bluDark dark:text-pink dark:hover:text-blue btn">
                        <FaWhatsapp />
                    </a>
                    <a href="https://github.com/SoffiaSanchezz" className="block mb-2 text-Violet hover:text-bluDark dark:text-pink dark:hover:text-blue btn ">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/sofia-sanchez-vargas/" className="block text-Violet hover:text-bluDark dark:text-pink dark:hover:text-blue btn ">
                        <FaLinkedin />
                    </a>
                </div>
            )}
        </div>
    );
}

export default SocialButton;
