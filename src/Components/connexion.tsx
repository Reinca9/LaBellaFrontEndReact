import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Connexion: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/connexion", formData);
      console.log(response.data);

      // Reset form data
      setFormData({
        email: "",
        password: ""
      });

      // Redirect to "/home" on success
      window.location.href = "/home";
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error response
    }
  };

  return (
    <div className="connexionRenderDiv">
      <div className="connexionFlexDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="connexionEmailInput">Votre email</label>
          <input
            id="connexionEmailInput"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="connexionPwInput">Votre mot de passe</label>
          <input
            id="connexionPwInput"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Se connecter</button>
        </form>

        <Link className="linkStyleMdpFgtn" to="/register">
          <p>Mot de passe oublié?</p>
          <p>Pas encore inscrit?</p>
        </Link>
      </div>
    </div>
  );
};

export default Connexion;
