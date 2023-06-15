import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    firstName: '',
    phoneNumber: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Make HTTP request to backend here
    axios
      .post('/api/register', formData)
      .then((response) => {
        // Handle response from backend
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      {/* Other form fields */}
      {/* Submit button */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
