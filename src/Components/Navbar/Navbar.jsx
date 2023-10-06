import {} from "react";
import { Link } from "react-router-dom";
import "../../App.css";
function Navbar() {
  return (
    <nav className="navbar lg:flex md:hidden hidden">
      <div className="logo_section">
        <h2 className="text-yellow-400 font-mono lg:text-2xl text-sm font-semibold">
          Web Development
        </h2>
        <p className="f-12 text-slate-400">
          You have to chance web developer role
        </p>
      </div>
      <div className="flex space-x-4 ">
        <Link to="/">
          <li className="menu_style">Home</li>
        </Link>
        <li className="menu_style cursor-pointer">Categories</li>
        <Link to="/blog">
          <li className="menu_style">Blogs</li>
        </Link>
        <Link to="/contact">
          <li className="menu_style">Contacts</li>
        </Link>
        <Link to="/about">
          <li className="menu_style">About</li>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
