import { useEffect, useState } from "react";
import DataImage from "../data";

export default function Navbar() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="navbar flex justify-between items-center md:py-4 py-6 text-amber-50 px-1 md:px-0">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Portfolio
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:static opacity-0 md:opacity-100 
          md:top-0 bg-white/30 backdrop-blur-md p-2 lg:pr-16 xl:pr20 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none ${
            active ? "top-0 opacity-100" : "-top-10 opacity-0 "
          }`}
      >
        <li>
          <a href="#home" className="text-lg font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-lg font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="text-lg font-medium">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="text-lg font-medium">
            Contact
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <img src={DataImage.GithubImage} alt="GithubImage" className="w-[30px]"/>
        </li>
      </ul>
    </div>
  );
}
