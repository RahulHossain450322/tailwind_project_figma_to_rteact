import {} from "react";
import book_img from "./images/book.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function Contact_details() {
  return (
    <div className="contact_details">
      <div className="">
        <img className=" mx-auto lg:w-10/12" src={book_img} alt="" />
      </div>
      <div className="lg:w-8/12 ">
        <div className="">
          <h3 className="font-bold  text-3xl">Get In touch with us</h3>
          <p className="mt-3 text-xl">
            Our experts will handle your problems and give you a best solutions
            in exact time. Our services is 24/7.
          </p>
        </div>
        <div className="mt-3 space-y-3">
          <div className="flex items-center">
            <MdOutlineKeyboardArrowRight className="text-3xl text-white  bg-green-500 rounded-full " />
            <h4 className="font-bold text-lg ms-3">Retail Examples</h4>
          </div>
          <div className="flex items-center">
            <MdOutlineKeyboardArrowRight className="text-3xl text-white bg-green-500 rounded-full " />
            <h4 className="font-bold  text-lg ms-3">Finance Examples</h4>
          </div>
          <div className="flex items-center">
            <MdOutlineKeyboardArrowRight className="text-3xl text-white bg-green-500 rounded-full " />
            <h4 className="font-bold  text-lg ms-3">Agency Examples</h4>
          </div>
          <div className="flex items-center">
            <MdOutlineKeyboardArrowRight className="text-3xl text-white bg-green-500 rounded-full " />
            <h4 className="font-bold  text-lg ms-3">And more!</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_details;
