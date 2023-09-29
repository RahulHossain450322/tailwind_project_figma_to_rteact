import {} from "react";

function Client_card() {
  return (
    <div className="client_card_style">
      <div className="w-20 h-20 bg-slate-400 rounded-full mx-auto ring-4 ring-red-500"></div>
      <div className="my-3">
        <h3 className="font-semibold text-rose-500">Jhon Doe</h3>
        <p className="f-13 text-slate-300">Editor</p>
      </div>
      <p className="f-14 text-slate-400">
        Et stet magna ut sadipscing vero dolores et sed. Voluptua diam kasd
        dolor sed, magna vero stet lorem vero dolores,.
      </p>
    </div>
  );
}

export default Client_card;
