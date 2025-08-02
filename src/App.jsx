import DataImage from "./data";
import "./App.css";

export default function App() {
  return (
    <div className="justify-center text-center">
      {/* Hero */}
      <div className="hero grid md:grid-cols-2 grid-cols-1 py-36 items-center ">
        <div className="items-center justify-center pl-30">
          <p className="text-left text-1xl">Hello World, I'm</p>
          <h1 className=" text-4xl/tight font-bold mb-6 text-left">
            <p>Aditya Rahman Syach</p>
            <p className="text-[#93DEFF]">Junior Web Developer</p>
          </h1>
          <div className="flex text-left gap-10 ">
            <a href="#about" className="py-4 px-13 bg-[#146C94] rounded-3xl">
              About Me
            </a>
            <a href="#project" className="py-4 px-13 bg-[#146C94] rounded-3xl">
              My Projects
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full object-cover mx-auto border-1"
        />
      </div>

      {/* About */}
      <div className="about py-26">
        <div className="bg-[#323643] p-10 pb-15 rounded-3xl">
          <h1 className="text-left text-2xl/tight font-bold">About Me</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 pt-10">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full object-cover mx-auto border-1"
            />
            <div className="pr-5 text-left">
              <p className="pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem corporis in architecto iste eligendi pariatur nihil
                magnam numquam unde! Quaerat minima tenetur vitae temporibus
                blanditiis recusandae perspiciatis, alias quasi tempore
                obcaecati repudiandae iure distinctio debitis, doloremque
                asperiores, quia officia quis autem omnis a nostrum aperiam.
                Nulla sint accusantium quos soluta.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem corporis in architecto iste eligendi pariatur nihil
                magnam numquam unde! Quaerat minima tenetur vitae temporibus
                blanditiis recusandae perspiciatis, alias quasi tempore
                obcaecati repudiandae iure distinctio debitis, doloremque
                asperiores, quia officia quis autem omnis a nostrum aperiam.
                Nulla sint accusantium quos soluta.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="py-14">
        <h1 className="text-left text-2xl/tight font-bold p-10"> Skills</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

function Home() {
  return <div className="text-3xl"> Ini Home</div>;
}

function About() {
  return <div> INi About</div>;
}
function Contact() {
  return <div> INi Contact</div>;
}
