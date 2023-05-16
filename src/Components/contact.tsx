import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="contactMainContainer">
      <div className="contactMainSecondContainer">
        <h1>Envoyez nous un message</h1>
        <input className="contactInput" type="text" placeholder="Nom" />
        <input className="contactInput" type="email" placeholder="E-mail" />
        <input className="contactInput" type="text" placeholder="Sujet" />
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <button>Envoyer</button>
      </div>
    </div>
  );
};

export default Contact;