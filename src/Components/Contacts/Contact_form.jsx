import { useState } from "react";

function Contact_form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const submit = (e) => {
    e.preventDefault();
    //const value = { name, email, phone, service, budget };

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      service === "" ||
      budget === ""
    ) {
      alert("All filleds are required");
    } else {
      alert("Submit your message successfull.PLease keep with us");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setBudget("");
    }
  };

  return (
    <div className="px-3 py-6">
      <form onSubmit={submit} className="form">
        <h3 className="font-bold mb-3">Get Free Quotation</h3>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="form_input"
          type="text"
          name="name"
          placeholder="Name *"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form_input "
          type="text"
          name="email"
          placeholder="Email *"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="form_input "
          type="number"
          name="phone"
          placeholder="Phone *"
        />
        <select
          onChange={(e) => setService(e.target.value)}
          value={service}
          className="form_input text-gray-500"
        >
          <option className="">Select Service *</option>
          <option className="">Landing pages</option>
          <option className="">E_commerce webpages</option>
          <option className="">Portfolio webpages</option>
          <option className="">Figma website</option>
        </select>
        <select
          onChange={(e) => setBudget(e.target.value)}
          value={budget}
          className="form_input text-gray-500"
        >
          <option className="">Select Budget *</option>
          <option className="">100$</option>
          <option className="">100$-200$</option>
          <option className="">200$-300$</option>
          <option className="">300$-400$</option>
        </select>
        <button
          className="form_input bg-gradient-to-r from-blue-600 to-transparent "
          type="submit "
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default Contact_form;
