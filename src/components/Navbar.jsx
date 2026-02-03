import { useEffect, useState } from "react";
import { GitHub, Linkedin, FileText, Instagram } from "react-feather";

export default function Navbar() {
  const underlineClass =
    "md:absolute md:left-0 md:-bottom-1 md:w-full md:h-[2px] md:bg-[#3BC1A8] md:scale-x-0 md:group-hover:scale-x-75 md:transition-transform md:origin-center md:duration-200";
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        navbar w-full z-50 transition-all duration-300
        md:fixed md:top-2 md:left-1/2 md:-translate-x-1/2
        md:w-[90%] md:max-w-6xl
        md:bg-white/30 md:backdrop-blur-md md:shadow-lg md:rounded-full
        md:px-6 
      `}
    >
      <div className="w-full max-w-full mx-auto flex items-center justify-between py-2 text-black px-4 md:px-0">
        <div className="logo">
          <a href="#home">
            <h1 className="flex text-3xl items-center font-bold bg-white text-black p-1 md:bg-transparent md:hover:text-[#3BC1A8]">
              Portfolio <FileText />
            </h1>
          </a>
        </div>

        <ul
          className={`
            menu flex items-center  gap-10
            transition-all duration-300
            fixed left-1/2 -translate-x-1/2 z-50
            ${active ? "top-0 opacity-100" : "-top-20 opacity-0"}
            md:static md:translate-x-0 md:top-0 md:opacity-100

            bg-white/30 backdrop-blur-md rounded-br-2xl rounded-bl-2xl p-2
            md:bg-transparent md:backdrop-blur-none md:rounded-none md:p-0 
          `}
        >
          <li>
            <a
              href="#home"
              className="relative group text-lg font-medium hover:text-[#3BC1A8]  transition-colors"
            >
              Home <span className={underlineClass}></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="relative group text-lg font-medium hover:text-[#3BC1A8]  transition-colors"
            >
              About <span className={underlineClass}></span>
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="relative group text-lg font-medium hover:text-[#3BC1A8]  transition-colors"
            >
              Project <span className={underlineClass}></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative group text-lg font-medium hover:text-[#3BC1A8]  transition-colors"
            >
              Contact <span className={underlineClass}></span>
            </a>
          </li>
        </ul>

        <ul className="flex gap-3 ">
          <li>
            <a href="https://github.com/Adityarns">
              <GitHub
                size={25}
                className="text-black hover:text-[#3BC1A8] transition-colors duration-300"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aditya-rahman-syach"
              className="text-black hover:text-[#3BC1A8] transition-colors duration-300"
            >
              <Linkedin size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/adityarns_"
              className="text-black hover:text-[#3BC1A8] transition-colors duration-300"
            >
              <Instagram size={25} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
