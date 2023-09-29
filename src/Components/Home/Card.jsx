import {} from "react";
import { BiWorld } from "react-icons/bi";
import "../../App.css";
function Card() {
  return (
    <div className="card_style card_hover_effect">
      <BiWorld className="lg:text-8xl md:text-6xl md:m-0 text-red-500 icon m-0 text-4xl lg:-my-6 md:-my-3 icon" />
      <div className="ms-1">
        <h4 className="font-semibold text-cyan-100 card_title">
          Web Development
        </h4>
        <p className="f-12 text-slate-400 card_des">
          Dolore dolores justo ea voluptua at ipsum sanctus lorem, diam.
        </p>
      </div>
    </div>
  );
}

export default Card;
