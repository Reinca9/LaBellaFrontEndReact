import React from "react";
import { Link } from "react-router-dom";

const Inscription: React.FC = () => {
  return (
    <div className="inscriptionRenderDiv">
        <form className="inscriptionFlexDiv" method="POST">
         
          <div className="inscriptionEmailDiv">
            <div>
              <label htmlFor="inscriptionEmailInput">Votre email</label>
              <input id="inscriptionEmailInput"type="email" name="email"required />
            </div>
            <div>
              <label htmlFor="inscriptionEmailInputRepeat">Confirmer</label>
              <input type="email" id="inscriptionEmailInputRepeat" name="email-repeat"required/>
            </div >
          </div>
          <div className="inscriptionPwDiv">
            <div>
              <label htmlFor="inscriptionPwInput">Votre mot de passe</label>
              <input id="inscriptionPwInput"type="password" name="password"required/>
            </div>
            <div>
              <label htmlFor="inscriptionPwInputRepeat">Confirmer</label>
              <input id="inscriptionPwInputRepeat"type="password" name="password-repeat" required/>
            </div>
          </div>
          <div className="inscriptionNameDiv">
            <div className="lastNameDiv">
              <label htmlFor="yourLastName">Votre Nom</label>
              <input id="yourLastName"type="text" required />
            </div>
            <div className="firstNameDiv">
              <label htmlFor="yourName">Votre prénom</label>
              <input id="yourName"type="text" required/>
            </div>
            </div>
            <div className="inscriptionPhoneDiv">
              <label htmlFor="phoneNumber">Votre numéro de téléphone</label>
              <input type="tel" pattern="^(\+33\s?|0)[1-9](\s?\d{2}){4}$" title="Please enter a valid French phone number" required />

           
          </div>
          
            <button id="registerButton"type="submit">S'inscrire'</button>
            <Link className="linkStyleAlreadyRegistered" to="/connexion">
                <p>Déjà inscrit?</p>
            </Link>

        </form>
    </div>
  );
}

export default Inscription;
