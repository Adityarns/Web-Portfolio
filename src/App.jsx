import DataImage from "./data";
import "./App.css";

export default function App() {
  return (
    <div className="justify-center text-center">
      <div className="hero">
        <div></div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px]" />
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
