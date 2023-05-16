import React from "react";

const FooterLinks: React.FC = () => {
  return (
    <div className="footerLinksContainer">
      <div className="allLinksMain1">
        <h1>LIENS UTILES</h1>
        <ul>
          <li>Mentions légales</li>
          <li>Politique de cookies</li>
          <li>Politique de données</li>
          <li>Conditions générales</li>
          <li>Copyright</li>
        </ul>
      </div>
      <div className="allLinksMain2">
        <h1>HORAIRES D'OUVERTURE</h1>
        <ul>
          <li>Du dimanche au jeudi</li>
          <li>de 11h à 14h et de 18h à 23h</li>
          <li>et du vendredi au samedi</li>
          <li>de 18h à 00h</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks;
