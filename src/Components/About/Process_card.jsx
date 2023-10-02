import {} from "react";

function Process_card({ icon, title }) {
  return (
    <div className="process_card ">
      <div className="">
        <div className="text-red-500 text-4xl mb-2 w-8 mx-auto">{icon}</div>
        <h4 className="font-bold">{title}</h4>
      </div>
    </div>
  );
}

export default Process_card;
