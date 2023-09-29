import {} from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo_section">
        <h2 className="text-yellow-400 font-mono lg:text-2xl font-semibold">
          Web Development
        </h2>
        <p className="f-12 text-slate-400">
          You have to chance web developer role
        </p>
      </div>
      <div className="flex space-x-4 ">
        <li className="menu_style">Home</li>
        <li className="menu_style">Categories</li>
        <li className="menu_style">Blog</li>
        <li className="menu_style">Contact</li>
        <li className="menu_style">About</li>
      </div>
    </nav>
  );
}

export default Navbar;
