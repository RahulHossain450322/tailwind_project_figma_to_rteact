import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Mobile_nav() {
  const [toggle, setToggle] = useState(false);
  const show = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="lg:hidden navbar">
      <div className="logo_section">
        <h2 className="text-yellow-400 font-mono lg:text-2xl text-sm font-semibold">
          Web Development
        </h2>
        <p className="f-12 text-slate-400">
          You have to chance web developer role
        </p>
      </div>
      <div onClick={show} className="cursor-pointer">
        {toggle ? <RxCross2 className="" /> : <FaBars />}
      </div>
      {toggle && (
        <div className="flex flex-col text-center absolute bg-slate-800 w-full top-12 z-50 p-3 space-y-3 left-0">
          <Link to="/">
            <li className="menu_style">Home</li>
          </Link>
          <li className="menu_style cursor-pointer">Categories</li>
          <Link to="/blog">
            <li className="menu_style">Blog</li>
          </Link>
          <Link to="/contact">
            <li className="menu_style">Contact</li>
          </Link>
          <Link to="/about">
            <li className="menu_style">About</li>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Mobile_nav;
