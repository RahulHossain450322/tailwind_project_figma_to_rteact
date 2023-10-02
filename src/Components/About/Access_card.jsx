import {} from "react";

function Access_card({ title, des }) {
  return (
    <div className="access_card">
      <div className="text-center">
        <h4 className="f-14 lg:text-xl md:text-lg font-semibold">{title}</h4>
        <p className="f-12 lg:text-lg md:text-md text-slate-600">{des}</p>
      </div>
    </div>
  );
}

export default Access_card;
