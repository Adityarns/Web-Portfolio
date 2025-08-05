import DataImage from "./data";
import { listTools } from "./data";
import "./App.css";

export default function App() {
  return (
    <div className="justify-center text-center">
      {/* Hero */}
      <div className="hero grid lg:grid-cols-2 grid-cols-1 py-24 md:py-36 items-center xl:gap-0 gap-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center lg:items-start justify-center text-center md:text-left">
          <p className="text-lg md:text-xl">Hello World, I'm</p>
          <h1 className="text-3xl md:text-4xl/tight font-bold mb-6">
            <p>Aditya Rahman Syach</p>
            <p className="text-[#144e94]">Junior Web Developer</p>
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#about"
              className="py-3 px-6 md:py-4 md:px-10 bg-[#144e94] hover:bg-[#146C94] rounded-3xl text-white"
            >
              About Me
            </a>
            <a
              href="#project"
              className="py-3 px-6 md:py-4 md:px-10 bg-[#144e94] hover:bg-[#146C94] rounded-3xl text-white"
            >
              My Projects
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full object-cover mx-auto border-1"
        />
      </div>

      {/* About */}
      <div className="about pt-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#0B192C] p-6 md:p-10 rounded-3xl">
          <h1 className="text-left text-3xl md:text-4xl/tight font-bold">
            About Me
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 pt-10 items-center">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full object-cover mx-auto border-1"
            />
            <div className="md:pr-5 pt-6 md:pt-0 text-left">
              <p className="text-lg md:text-2xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit praesentium nihil delectus eius debitis eligendi dolor maiores voluptatum, nisi earum? Earum vero totam iste minima deleniti rem. Asperiores eius incidunt beatae necessitatibus eveniet repudiandae sequi quos quisquam doloremque perspiciatis dolor dolores consequuntur nulla tenetur recusandae corporis eligendi maiores, molestiae voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4 text-left">Tech Stack</h1>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              key={tool.id}
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
              />
              <div>
                <h4>{tool.nama}</h4>
                <p>{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
