import {} from "react";
import Arti_card from "./Arti_card";

function Articles() {
  return (
    <div className="aricles_style">
      <h4 className="font-semibold text-lg lg:text-2xl mb-6">
        Latest articles
      </h4>
      <div className="expert_grid">
        <Arti_card />
        <Arti_card />
        <Arti_card />
        <Arti_card />
        <Arti_card />
        <Arti_card />
        <Arti_card />
        <Arti_card />
      </div>
    </div>
  );
}

export default Articles;
