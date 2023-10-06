import {} from "react";
import Navbar from "../Navbar/Navbar";
import Mobile_nav from "../Mobile_nav/Mobile_nav";
import Footer from "../Footer/Footer";
import Contact_details from "./Contact_details";
import Contact_des from "./Contact_des";
import Contact_form from "./Contact_form";
import Contact_us from "./Contact_us";

function Contact() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Mobile_nav />
      <Contact_us />
      <Contact_details />
      <Contact_des />
      <Contact_form />
      <Footer />
    </div>
  );
}

export default Contact;
