import DataImage from "./data";
import "./App.css";

export default function App() {
  return (
    <div className="justify-center text-center">
      <div className="hero grid md:grid-cols-2 grid-cols-1 p-5 items-center my-20">
        <div>
          <h1 className=" text-4xl/tight font-bold mb-6">
            Hi, Saya Aditya Rahman Syach
          </h1>
          <p className="mb-5 text-base/loose opacity-50 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            expedita velit officia voluptatem iusto. Ad, ratione fugit
            perferendis aspernatur laudantium explicabo tenetur corporis ea non
            commodi molestiae optio eum numquam.
          </p>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className=" w-[250px] md:w-[300px] gap-4 rounded-4xl md:mx-auto"
        />
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
