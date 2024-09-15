import { useState } from "react";
import clsx from "clsx";

import Logo from "../../../public/logo.png";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItemClassName = clsx("md:block md:text-lg text-4xl text-text-primary font-sans", {
      visible: mobileMenuOpen,
      hidden: !mobileMenuOpen,
    });
  
    return (
        <header className={
            clsx(
                "text-white p-8 flex flex-col md:flex-row py-6 items-center",
                {
                  "h-screen": mobileMenuOpen,
                  "justify-between": !mobileMenuOpen,
                  "justify-around": mobileMenuOpen
                }
              )
        }>
            <img 
                src={Logo} 
                alt="Logo: IG Construir" 
                className="w-44"/>
            <nav className={`w-1/2 flex gap-10 ${mobileMenuOpen ? 'flex-col' : ''}`}>
                <a href="#about" className={menuItemClassName}>Sobre</a>   
                <a href="#services" className={menuItemClassName}>Serviços</a>   
                <a href="#contact" className={menuItemClassName}>Contato</a>  

                <button
                    className="md:hidden absolute right-4 top-6"
                    onClick={() => setMobileMenuOpen((currentValue) => !currentValue)}
                >
                    <div
                        className={clsx(
                        "w-10 h-1 bg-white mb-1 transition-all duration-500 ease-in-out ",
                        {
                            "rotate-45 translate-y-2": mobileMenuOpen,
                        }
                        )}
                    ></div>
                    <div
                        className={clsx("w-10 h-1 bg-white mb-1", {
                        hidden: mobileMenuOpen,
                        })}
                    ></div>
                    <div
                        className={clsx(
                        "w-10 h-1 bg-white mb-1 transition-all duration-500 ease-in-out",
                        {
                            "-rotate-45": mobileMenuOpen,
                        }
                        )}
                    ></div>
                </button> 
            </nav>
        </header>
    );
}

export default Header;