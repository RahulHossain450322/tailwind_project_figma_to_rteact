import {} from "react";

function Arti_card() {
  const date = "March 13, 2023";
  return (
    <div className="bg-gray-100 p-6 rounded-md drop-shadow-2xl">
      <p className="text-blue-400 f-12">{date}</p>
      <h4 className="font-semibold mt-2">Lorem ipsum text danger</h4>
      <p className="f-13 mt-2">
        Duo et elitr dolore et diam elitr sanctus lorem consetetur. Erat et sit
        diam dolores sea sit. Consetetur at lorem.
      </p>
      <button className="bg-yellow-400 px-5 py-1 rounded-full mt-2 f-12 text-slate-400">
        Continue reading
      </button>
    </div>
  );
}

export default Arti_card;
