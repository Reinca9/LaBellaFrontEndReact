import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../store';
import { loginSuccess, loginFailure } from '../redux/auth/authActions';

const mapStateToProps = (state: AppState) => ({
  token: state.auth?.token || null, // Use optional chaining and provide a fallback value
});

const mapDispatchToProps = {
  loginSuccess,
  loginFailure,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnexionProps = PropsFromRedux;

const Connexion: React.FC<ConnexionProps> = ({ loginSuccess, loginFailure }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log("login try");
    
    try { 
   
      const response = await axios.post('http://localhost:3000/connexion', formData);
      console.log("login process");
      
      
      const token = response.data?.token; // Use optional chaining
      
      setFormData({
        email: '',
        password: '',
      });
  
      loginSuccess(token);
      console.log("login success");
      toast.success('Login successful');
  
      window.location.href = '/home';
    } catch (error) {
      console.error('Error logging in:', error);
      console.log("login fail");
  
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error || 'An error occurred during login';
        loginFailure(errorMessage);
        toast.error(errorMessage);
      } else {
        loginFailure('An error occurred during login');
        toast.error('An error occurred during login');
      }
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

export default connector(Connexion);