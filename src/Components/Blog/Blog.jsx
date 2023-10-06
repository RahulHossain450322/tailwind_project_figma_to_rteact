import {} from "react";
import Navbar from "../Navbar/Navbar";
import Mobile_nav from "../Mobile_nav/Mobile_nav";
import Footer from "../Footer/Footer";
import Blog_content from "./Blog_content";
import Blog_details from "./Blog_details";

function Blog() {
  return (
    <section className="blog">
      <div className="container mx-auto">
        <Navbar />
        <Mobile_nav />
        <Blog_content />
        <Blog_details />
        <Footer />
      </div>
    </section>
  );
}

export default Blog;
