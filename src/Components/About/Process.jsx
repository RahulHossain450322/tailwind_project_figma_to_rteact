import {} from "react";
import Process_card from "./Process_card";
import { GiSurroundedEye } from "react-icons/gi";
import { AiTwotonePhone } from "react-icons/ai";
function Process() {
  return (
    <div className="px-3 py-6">
      <h3 className="lg:text-2xl font-bold text-center mb-4">Our Process</h3>
      <div className="grid_style_process">
        <Process_card icon={<GiSurroundedEye />} title={"Define Objectives"} />
        <Process_card icon={<GiSurroundedEye />} title={"Define Objectives"} />
        <Process_card icon={<GiSurroundedEye />} title={"Define Objectives"} />
        <Process_card icon={<GiSurroundedEye />} title={"Define Objectives"} />
        <Process_card icon={<GiSurroundedEye />} title={"Define Objectives"} />
        <Process_card icon={<GiSurroundedEye />} title={"Define Objectives"} />
      </div>
      <div className="">
        <p className="text-justify mt-8 f-12 text-gray-600">
          At Digibrink, we are committed to helping you make informed decisions
          throughout the website development journey. Our team of experts will
          provide personalised guidance, leveraging our experience and industry
          insights to create a website that aligns with your goals and resonates
          with your target audience.
        </p>
        <p className="text-justify mt-4 f-12 text-gray-600">
          Get in touch with us today to discuss your website development
          project. Together, let’s build an impactful online presence that
          drives results and elevates your business to new heights!
        </p>
        <div className="text-center">
          <button className="btn_style text-slate-100 ">
            Talk to an Experts <AiTwotonePhone className="inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Process;
