import React, { useState } from "react";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }
  return (

    <div>
        <p>You can reach me by :</p>
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={name}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>

    </div>
  );
}
