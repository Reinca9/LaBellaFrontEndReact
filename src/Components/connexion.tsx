import React from "react";
import { Link } from "react-router-dom";

const Connexion: React.FC = () => {
  return (
    <div className="connexionRenderDiv">
        <div className="connexionFlexDiv">
            <label htmlFor="connexionEmailInput">Votre email</label>
            <input id="connexionEmailInput"type="email" />
            <label htmlFor="connexionPwInput">Votre mot de passe</label>
            <input id="connexionPwInput"type="password" />
            <button type="submit">Se connecter</button>
            <Link className="linkStyleMdpFgtn" to="/inscription">
                <p>Mot de passe oublié?</p>
                <p>Pas encore inscrit?</p>
            </Link>

        </div>
    </div>
  );
}

export default Connexion;