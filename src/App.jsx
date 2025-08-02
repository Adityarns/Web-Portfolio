import DataImage from "./data";
import "./App.css";

export default function App() {
  return (
    <div className="justify-center text-center">
      {/* Hero */}
      <div className="hero grid md:grid-cols-2 grid-cols-1 py-36 pl-20 items-center ">
        <div>
          <p className="text-left text-1xl">Hello World, I'm</p>
          <h1 className=" text-4xl/tight font-bold mb-6 text-left">
            <p>Aditya Rahman Syach</p>
            <p className="text-blue-300">Junior Web Developer</p>
          </h1>
          <p className="mb-5 text-base/loose opacity-50 text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            expedita velit officia voluptatem iusto. Ad, ratione fugit
            perferendis aspernatur laudantium explicabo tenetur corporis ea non
            commodi molestiae optio eum numquam.
          </p>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full object-cover mx-auto border-1"
        />
      </div>

      {/* About */}
      <div className="about py-36">
        <div>
          <div className="bg-black p-10 rounded-3xl">
            <h1 className="text-left text-2xl/tight font-bold">About Me</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 pt-10">
              <img
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full object-cover mx-auto border-1"
              />
              <div className="pr-5 text-left">
                <p>
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
