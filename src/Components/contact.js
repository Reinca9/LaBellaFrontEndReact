import React from "react";

function Contact() {
  return (
    <div class="contactMainContainer">
      <div class="contactMainSecondContainer">
        <h1>Envoyez nous un message</h1>
        <input class="contactInput" type="text" placeholder="Nom" />
        <input class="contactInput" type="email" placeholder="E-mail" />
        <input class="contactInput" type="text" placeholder="Sujet" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Envoyer</button>
      </div>
    </div>
  );
}

export default Contact;
