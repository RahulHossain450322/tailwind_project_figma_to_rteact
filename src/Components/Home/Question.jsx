import {} from "react";
import Toggle_ques from "./Toggle_ques";

function Question() {
  return (
    <div className="px-3 py-10 lg:w-3/4 lg:mx-auto">
      <div className="">
        <h2 className="font-semibold text-center mb-4">
          Freequently Asked a Questions
        </h2>
      </div>
      <Toggle_ques />
      <hr className="mt-3" />
      <Toggle_ques />
      <hr className="mt-3" />
      <Toggle_ques />
      <hr className="mt-3" />
      <Toggle_ques />
      <hr className="mt-3" />
    </div>
  );
}

export default Question;
