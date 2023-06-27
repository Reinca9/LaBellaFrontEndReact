import React, { useState } from "react";
import axios from "axios";

const Inscription: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    confirmEmail: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitting form");

    try {
      const response = await axios.post("http://localhost:3000/register", formData);
      console.log(response.data);

      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        confirmEmail: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
      });

    } catch (error) {
      console.error("Error registering user:", error);
      if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error as string);
      } else {
        setErrorMessage("Votre e-mail existe déjà ! ");
      }
    }
  };

  return (
    <div className="inscriptionRenderDiv">
      <form className="inscriptionFlexDiv" onSubmit={handleSubmit}>
        <div className="inscriptionEmailDiv">
          <div>
            <label htmlFor="inscriptionEmailInput">Votre email</label>
            <input
              id="inscriptionEmailInput"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="inscriptionEmailInputRepeat">Confirmer</label>
            <input
              type="email"
              id="inscriptionEmailInputRepeat"
              name="confirmEmail"
              required
              value={formData.confirmEmail}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="inscriptionPwDiv">
          <div>
            <label htmlFor="inscriptionPwInput">Votre mot de passe</label>
        <input
          id="inscriptionPwInput"
          type="password"
          name="password"
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$"
          title="Le mot de passe doit contenir au moins 8 caractères, avec au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial."
          required
          value={formData.password}
          onChange={handleInputChange}
        />

          </div>
          <div>
            <label htmlFor="inscriptionPwInputRepeat">Confirmer</label>
            <input
              id="inscriptionPwInputRepeat"
              type="password"
              name="confirmPassword"
              title="le mot de passe doit être le même"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="inscriptionNameDiv">
          <div className="lastNameDiv">
            <label htmlFor="yourLastName">Votre Nom</label>
            <input
              id="yourLastName"
              type="text"
              name="lastName"
              pattern="^[A-Za-z]+$"
              title="Le nom doit contenir uniquement des lettres."
              required
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="firstNameDiv">
            <label htmlFor="yourName">Votre prénom</label>
            <input
              id="yourName"
              type="text"
              name="firstName"
              pattern="^[A-Za-z]+$"
              title="Le prénom doit contenir uniquement des lettres."
              required
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="inscriptionPhoneDiv">
          <label htmlFor="phoneNumber">Votre numéro de téléphone</label>
          <input
            type="tel"
            id="phoneNumber"
            pattern="^(\+33\s?|0)[1-9](\s?\d{2}){4}$"
            title="Please enter a valid French phone number"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <button id="registerButton" type="submit">
          S'inscrire
        </button>
        {errorMessage && <p className="mailExistAlready">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Inscription;
