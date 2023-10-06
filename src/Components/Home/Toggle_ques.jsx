import { useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
function Toggle_ques() {
  const [toggle_1, setToggle_1] = useState(false);
  const toggle1 = () => {
    setToggle_1(!toggle_1);
  };
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">
          Lorem ipsum Freequently asked hello World
        </h4>
        <div onClick={toggle1} className="cursor-pointer">
          {toggle_1 ? (
            <BsArrowUpShort className="text-xl" />
          ) : (
            <BsArrowDownShort className="text-xl" />
          )}
        </div>
      </div>
      {toggle_1 && (
        <p className="f-12 mt-2">
          Invidunt labore dolore sed labore aliquyam lorem sit dolor et. Est
          magna dolor clita labore. No et kasd sit clita ut sanctus invidunt.
          Diam sadipscing nonumy sed amet ea gubergren.
        </p>
      )}
    </div>
  );
}

export default Toggle_ques;
