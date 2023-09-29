import {} from "react";
import Client_card from "./Client_card";
import { AiFillCheckCircle } from "react-icons/ai";
function Expert() {
  return (
    <div className="clinet_style">
      <h4 className="font-semibold text-lg lg:text-2xl mb-6">Our experts</h4>
      <div className="expert_grid">
        <Client_card />
        <Client_card />
        <Client_card />
        <div className="trust_style">
          <h4 className="font-semibold mb-3 text-2xl">Why trust us?</h4>
          <div className="trust_content">
            <div className="flex items-center">
              <AiFillCheckCircle className="text-green-500" />
              <p className="ms-2">Lorem ispum</p>
            </div>
            <div className="flex items-center">
              <AiFillCheckCircle className="text-green-500" />
              <p className="ms-2 my-3">Lorem ispum</p>
            </div>
            <div className="flex items-center">
              <AiFillCheckCircle className="text-green-500" />
              <p className="ms-2">Lorem ispum</p>
            </div>
            <div className="flex items-center my-3">
              <AiFillCheckCircle className="text-green-500" />
              <p className="ms-2">Lorem ispum</p>
            </div>
            <div className="flex items-center">
              <AiFillCheckCircle className="text-green-500" />
              <p className="ms-2">Lorem ispum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expert;
