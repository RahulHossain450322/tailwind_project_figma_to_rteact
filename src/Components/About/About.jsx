import {} from "react";
import Navbar from "../Navbar/Navbar";
import Mobile_nav from "../Mobile_nav/Mobile_nav";
import Footer from "../Footer/Footer";
import About_hero from "./About_hero";
import Accessibility from "./Accessibility";
import More_about from "./More_about";
import Process from "./Process";

function About() {
  return (
    <section className="">
      <div className="container mx-auto">
        <Navbar />
        <Mobile_nav />
        <About_hero />
        <Accessibility />
        <More_about />
        <Process />
        <Footer />
      </div>
    </section>
  );
}

export default About;
