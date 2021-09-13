import React, { useState } from "react";

export default function Contact(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`${fullName}`)
  }
  return (

    <div>
      <p>You can reach me by :</p>
      <form classNameName="flex flex-col" onSubmit={handleSubmit}>
          <div className="mt-4 mr-2">
            <span className="uppercase text-sm form-lab font-bold">Full Name</span>
            <input className="w-full bg-gray-100 form-input mt-2 p-3  focus:outline-none focus:shadow-outline"
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}/>
            </div>

          <div className="mt-8 mr-2">
            <span className="uppercase text-sm form-lab font-bold">Email</span>
            <input className="w-full bg-gray-100 form-input mt-2  p-3  focus:outline-none focus:shadow-outline"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}/>
          </div>
         
          <div className="mt-8 mr-2">
            <span className="uppercase text-sm form-lab font-bold">Message</span>
            <textarea className="w-full bg-gray-100 form-input mt-2  p-3  focus:outline-none focus:shadow-outline"
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}/>
          </div>
          <button className="w-full mt-8 bg-btn  text-white font-bold py-2 px-4 "
          type="submit">
  SEND
</button>
    </form>
    </div>
  );
}
