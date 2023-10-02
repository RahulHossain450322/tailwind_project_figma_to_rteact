import {} from "react";
import { AiTwotonePhone, AiOutlineForward } from "react-icons/ai";
function About_hero() {
  return (
    <div className="about_hero">
      <div className="">
        <p className=" f-14 lg:text-xl font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-400 via-red-600 ">
          Web Developer It solutions
        </p>
        <h3 className=" font-extrabold mt-3 text-xl lg:text-3xl text-cyan-900">
          Bangladesh &apos;s Top Web Design <br /> and Development
          <br />
          Company
        </h3>
        <div className="mt-2">
          <div className="flex items-center">
            <AiOutlineForward className="f-13 text-red-400" />
            <p className="f-10  text-slate-700">Join 200+ Happy Customers</p>
          </div>
          <div className="flex items-center">
            <AiOutlineForward className="f-13 text-red-400" />

            <p className="f-10 text-slate-700">
              Quality services, quick delivery
            </p>
          </div>
          <button className="btn_style">
            Talk to an Experts <AiTwotonePhone className="inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About_hero;
