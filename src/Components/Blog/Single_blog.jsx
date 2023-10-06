import {} from "react";
import {
  BsStopwatch,
  BsPencil,
  BsChatDots,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

function Single_blog({ title, des }) {
  return (
    <div className="my-5">
      <p className="text-2xl font-thin">{title}</p>
      <div className="flex items-center mt-3">
        <BsStopwatch />
        <p className="ms-2 font-thin f-14">January 23, 2023</p>
      </div>
      <div className="flex items-center mt-3">
        <BsPencil />
        <p className="ms-2 font-thin f-14">React Development</p>
      </div>
      <div className="flex items-center mt-3">
        <BsChatDots />
        <p className="ms-2 font-thin f-14">0</p>
      </div>
      <p className="f-14 mt-4">{des}</p>
      <div className="flex items-center mt-5  bg-indigo-500  text-slate-200 rounded-full px-3 py-1 f-14 continue_btn">
        <button className="">Continue reading</button>
        <BsFillArrowRightSquareFill className="ms-2 mt-1  " />
      </div>
    </div>
  );
}

export default Single_blog;
