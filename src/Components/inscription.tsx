import React from "react";
import { Link } from "react-router-dom";

const Inscription: React.FC = () => {
  return (
    <div className="inscriptionRenderDiv">
        <div className="inscriptionFlexDiv">
         
          <div className="inscriptionEmailDiv">
            <div>
              <label htmlFor="inscriptionEmailInput">Votre email</label>
              <input id="inscriptionEmailInput"type="email" name="email"required />
            </div>
            <div>
              <label htmlFor="inscriptionEmailInputRepeat">Confirmer votre email</label>
              <input type="email" id="inscriptionEmailInputRepeat" name="email-repeat"required/>
            </div >
          </div>
          <div className="inscriptionPwDiv">
            <div>
              <label htmlFor="inscriptionPwInput">Votre mot de passe</label>
              <input id="inscriptionPwInput"type="password" name="password"required/>
            </div>
            <div>
              <label htmlFor="inscriptionPwInputRepeat">Confirmer votre mot de passe</label>
              <input id="inscriptionPwInputRepeat"type="password" name="password-repeat" required/>
            </div>
          </div>
          <div className="inscriptionNameDiv">
            <div >
              <label htmlFor="yourLastName">Votre Nom</label>
              <input id="yourLastName"type="text" required />
            </div>
            <div>
              <label htmlFor="yourName">Votre prénom</label>
              <input id="yourName"type="text" required/>
            </div>
            </div>
            <div className="inscriptionPhoneDiv">
              <label htmlFor="phoneNumber">Votre numéro de téléphone</label>
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Please enter a valid phone number (XXX-XXX-XXXX)" required />
           
          </div>
          
            <button id="registerButton"type="submit">S'inscrire'</button>
            <Link className="linkStyleAlreadyRegistered" to="/connexion">
                <p>Déjà inscrit?</p>
            </Link>

        </div>
    </div>
  );
}

export default Inscription;