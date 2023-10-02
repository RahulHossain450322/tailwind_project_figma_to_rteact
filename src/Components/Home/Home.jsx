import {} from "react";
import Navbar from "../Navbar/Navbar";
import Card from "./Card";
import Hero from "./Hero";
import Expert from "./Expert";
import Articles from "./Articles";
import Question from "./Question";
import Footer from "../Footer/Footer";
import Mobile_nav from "../Mobile_nav/Mobile_nav";
function Home() {
  return (
    <section className="">
      <div className="container mx-auto">
        <Navbar />
        <Mobile_nav />
        <Hero />
        <div className="grid_style">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Expert />
        <Articles />
        <Question />
        <Footer />
      </div>
    </section>
  );
}

export default Home;
