import {} from "react";
import { Link } from "react-router-dom";

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
        <li className="menu_style">Categories</li>
        <li className="menu_style">Blog</li>
        <li className="menu_style">Contact</li>
        <Link to="/about">
          <li className="menu_style">About</li>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
