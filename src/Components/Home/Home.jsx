import {} from "react";
import Navbar from "../Navbar/Navbar";
import Card from "./Card";
import Hero from "./Hero";
import Expert from "./Expert";
import Articles from "./Articles";
import Question from "./Question";
import Footer from "./Footer";
function Home() {
  return (
    <div className="">
      <div className="container mx-auto">
        <Navbar />
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
    </div>
  );
}

export default Home;
