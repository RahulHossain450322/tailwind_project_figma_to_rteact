import {} from "react";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
function Footer() {
  return (
    <div className=" footer_grid space-y-6">
      <div className="lg:w-4/12 w-full">
        <div className="logo_section">
          <div className="">
            <h2 className="text-yellow-400 font-mono lg:text-2xl font-semibold">
              Web Development
            </h2>
            <p className="f-12 text-slate-400">
              You have to chance web developer role
            </p>
          </div>
          <div className="mt-3">
            <p className="text-slate-200">
              Magna labore clita ipsum invidunt rebum accusam, sea dolore lorem
              lorem est labore duo elitr amet eos, ut sed no takimata est, stet
              stet diam accusam kasd duo et clita.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2 ">
        <h4 className="font-semibold mb-3 text-slate-200">Categories</h4>
        <p className="text-slate-300">Online marketting</p>
        <p className="text-slate-300">Digital marketting</p>
        <p className=" text-slate-300">Web development</p>
      </div>
      <div className=" text-slate-200">
        <h3 className="font-semibold">Newsletter</h3>
        <div className="mt-4">
          <input
            className="outline-none px-4 py-1 rounded-l-3xl"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-yellow-400 px-4 py-1 rounded-r-3xl text-slate-500">
            contact
          </button>
        </div>
        <div className="flex mt-4 space-x-3 ">
          <AiOutlineYoutube className="text-white text-3xl" />
          <AiOutlineInstagram className="text-white text-3xl" />
          <CiFacebook className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
