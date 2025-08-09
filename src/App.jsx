import DataImage from "./data";
import { listTools, listProyek } from "./data";
import "./App.css";
import GradientText from "./components/GradientText";

export default function App() {
  return (
    <div className="justify-center text-center  sm:pt-20">
      {/* Hero */}
      <div className="hero grid lg:grid-cols-2 grid-cols-1 py-10 md:py-40 items-center xl:gap-0 gap-5 px-6 max-w-7xl mx-auto animate__animated animate__fadeInUp animate__delay-0.5s">
        <div className="flex flex-col items-center lg:items-start justify-center text-center md:text-left lg:pl-6 xl:pl-30">
          <p className="text-lg md:text-xl">Hello World, I'm</p>
          <h1 className="text-3xl md:text-4xl/tight font-bold mb-6">
            <p>Aditya Rahman Syach</p>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class"
            >
              Junior Web Developer
            </GradientText>
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
              className="py-3 px-6 md:py-4 md:px-10 bg-[#0A0d14] hover:bg-[#146C94] rounded-3xl text-white border-[#144e94] border-2"
            >
              My Projects
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full object-cover mx-auto border-[#144e94] border-3"
          loading="lazy"
        />
      </div>

      {/* About */}
      <div className="about py-10 md:pt-40 px-6 max-w-7xl mx-auto" id="about">
        <div
          className="bg-[#0B192C] p-6 md:p-10 rounded-3xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 className="text-center text-3xl md:text-4xl/tight font-bold">
            About Me
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1  pt-5 md:pt-7 items-center">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full object-cover mx-auto border-1"
              loading="lazy"
            />
            <div className="md:pr-5 pt-6 md:pt-7 text-justify">
              <p className="text-lg md:text-2xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
                praesentium nihil delectus eius debitis eligendi dolor maiores
                voluptatum, nisi earum? Earum vero totam iste minima deleniti
                rem. Asperiores eius incidunt beatae necessitatibus eveniet
                repudiandae sequi quos quisquam doloremque perspiciatis dolor
                dolores consequuntur nulla tenetur recusandae corporis eligendi
                maiores, molestiae voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="tools mt-32 mb-5">
        <h1
          className="text-4xl/snug font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Tech Stack
        </h1>
        <div className="tools-box md:mt-14 mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
              data-aos-once="true"
              key={tool.id}
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                loading="lazy"
              />
              <div>
                <h4>{tool.nama}</h4>
                <p>{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project */}
      <div className="Project pt-10 md:pt-40" id="project">
        <h1
          className="text-4xl/snug font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Project
        </h1>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="p-3 rounded-lg block border border-zinc-800 bg-[#144e94] hover:bg-[#146C94]"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kontak */}
      <div className="kontak py-10 md:py-20 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-8 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Contact
        </h1>

        <form
          action="https://formsubmit.co/rahmansyachaditya@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-left">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-left">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold text-left">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="border border-zinc-500 p-2 rounded-md required"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className=" p-3 rounded-lg block border border-zinc-600 bg-[#144e94] hover:bg-[#146C94]"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
