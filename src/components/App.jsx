import DataImage from "../data";
import { listTools } from "../data";
import "./App.css";
import TextType from "./Reactbits/TextType.jsx";
import ElectricBorder from "./Reactbits/ElectricBorder.jsx";

export default function App() {
  return (
    <div className="text-center ">
      {/* Hero */}
      <div className="items-center hero grid lg:grid-cols-2 grid-cols-1 py-10 md:py-40 xl:gap-0 gap-5 px-6 max-w-7xl mx-auto animate__animated animate__fadeInUp animate__delay-0.5s">
        <div className="flex flex-col items-start text-left mx-auto">
          <p className="text-lg md:text-xl text-[#3BC1A8] font-semibold">
            Hello World, I'm
          </p>
          <h1 className="mb-6">
            <p className="text-3xl md:text-4xl/tight font-bold">
              Aditya Rahman S.
            </p>
            <TextType
              className="text-2xl md:text-3xl/tight font-light text-[#233D4D]"
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
          <div className="flex mx-auto md:mx-0 justify-center gap-4 item-center">
            <a
              href="#about"
              className="py-3 px-6 md:py-4 md:px-11 bg-black rounded-3xl text-white hover:text-[#3BC1A8]"
            >
              About Me
            </a>
            <a
              href="#project"
              className="py-3 px-6 md:py-4 md:px-10 bg-black rounded-3xl text-white hover:text-[#3BC1A8]"
            >
              My Project
            </a>
          </div>
        </div>

        <ElectricBorder color="#39f9b9" speed={1.8} chaos={0.2} thickness={8}>
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full object-cover mx-auto"
            loading="lazy"
          />
        </ElectricBorder>
      </div>

      {/* About */}
      <div className="about py-10 px-6 max-w-7xl mx-auto md:px-10" id="about">
        <h1 className=" text-center text-3xl md:text-3xl/tight font-bold text-[#3BC1A8]">
          About Me
        </h1>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="pt-5 md:pt-7 items-start ">
            <div className="mb-5">
              <h1 className="text-3xl/tight font-bold text-left underline">
                Education
              </h1>
              <p className="text-sm md:text-lg text-black text-left md:text-justify">
                I am an undergraduate <b>Informatics Engineering </b>student at
                <b> UIN Sunan Gunung Djati Bandung </b>, with a strong passion
                for building robust and scalable systems. My expertise lies in
                backend development, and I am currently expanding my skills in
                data science to bridge the gap between efficient data processing
                and meaningful insights.
              </p>
            </div>
            <div className="md:pr-5 ">
              <h1 className="text-3xl/tight font-bold text-left underline">
                Experience
              </h1>
              <ul>
                <li className="text-sm md:text-lg text-black text-left md:text-justify">
                  <b>General Secretary</b> at <b>BSO Dimensi Web</b> (2025 -
                  now)
                  <p> </p>
                </li>
                <li className="text-sm md:text-lg text-black text-left md:text-justify">
                  <b>Member</b> of <b>KASTRAD HIMATIF</b>
                  (2025 - 2026)
                </li>
              </ul>
              <p className="text-sm md:text-lg text-black text-left md:text-justify">
                In addition to my technical pursuits, I am deeply involved in
                organizational leadership. Currently, I serve as the{" "}
                <b>General Secretary</b> at <b>BSO Dimensi Web</b> (2025/2026),
                where I oversee administrative efficiency and organizational
                governance. Previously, I contributed to the Informatics
                Engineering Student Association <b>(HIMATIF)</b> as part of the
                Kajian Strategis dan Advokasi <b>(KASTRAD)</b> division
                (2025/2026). In this role, I focused on student advocacy,
                strategically communicating student perspectives to the
                department authorities to foster a better academic environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="tools  md:pt-14 px-6 max-w-7xl mx-auto">
        <h1
          className="text-3xl/snug font-bold text-center md:text-left text-[#3BC1A8]"
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
      <div
        className="Project pt-10 md:pt-14 px-6 max-w-7xl mx-auto"
        id="project"
      >
        <h1
          className="text-3xl/snug font-bold text-center md:text-left text-[#3BC1A8]"
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
      <div
        className="kontak pt-10 md:pt-14 px-6 max-w-7xl mx-auto"
        id="contact"
      >
        <h1
          className="text-3xl/snug font-bold text-center md:text-left text-[#3BC1A8]"
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
          className="bg-white p-10 sm:w-fit w-full mx-auto rounded-md"
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
                className="border border-black p-2 rounded-md"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-left">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email..."
                className="border border-black p-2 rounded-md"
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
                className="border border-black p-2 rounded-md required"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className=" p-3 rounded-lg block border text-white bg-black hover:text-[#3BC1A8]"
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
