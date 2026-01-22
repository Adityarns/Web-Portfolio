import DataImage from "../data";
import { listTools } from "../data";
import "./App.css";
import TextType from "./Reactbits/TextType.jsx";

export default function App() {
  return (
    <div className="text-center ">
      {/* Hero */}
      <div className="items-center hero grid lg:grid-cols-2 grid-cols-1 py-10 md:py-40 xl:gap-0 gap-5 px-6 max-w-7xl mx-auto animate__animated animate__fadeInUp animate__delay-0.5s">
        <div className="flex flex-col items-start text-left lg:pl-6 xl:pl-30">
          <p className="text-lg md:text-xl text-[#3BC1A8] font-semibold">
            Hello World, I'm
          </p>
          <h1 className="mb-6">
            <p className="text-3xl md:text-4xl/tight font-bold">
              Aditya Rahman Syach
            </p>
            <TextType
              className="text-2xl md:text-3xl/tight font-light "
              text={[
                "Fullstack Developer",
                "Back-End Engineer",
                "Data Scientist",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </h1>
          <div className="flex flex-wrap justify-center gap-4 item-center">
            <a
              href="#about"
              className="py-3 px-6 md:py-4 md:px-11 bg-black hover:bg-white rounded-3xl text-white hover:text-black hover:border-black border-white border-2"
            >
              About Me
            </a>
            <a
              href="#project"
              className="py-3 px-6 md:py-4 md:px-10 bg-black hover:bg-white rounded-3xl text-white hover:text-black hover:border-black border-white border-2"
            >
              My Project
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full object-cover mx-auto border-black border-3"
          loading="lazy"
        />
      </div>

      {/* About */}
      <div className="about py-10 md:pt-20 px-6 max-w-7xl mx-auto" id="about">
        <h1 className="text-center text-3xl md:text-3xl/tight font-bold text-[#3BC1A8]">
          About Me
        </h1>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="grid lg:grid-cols-2 grid-cols-1  pt-5 md:pt-7 items-center">
            <div className="md:pr-5 pt-2 md:pt-3 text-justify">
              <h1 className="text-4xl/tight font-bold">Education</h1>
              <p className="text-lg md:text-2xl text-black">
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
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-black group hover:text-white"
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
        <p
          className="text-2xl font-bold text-center py-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Coming soon..
        </p>
        {/* <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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
        </div> */}
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
          className="bg-[#0B192C] p-10 sm:w-fit w-full mx-auto rounded-md"
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
