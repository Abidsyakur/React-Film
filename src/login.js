import axios from "axios";
import React, { useState } from 'react';

const Login = () => {
  const backgroundStyle = {
    backgroundImage: 'url("/bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formStyle = {
    color:'red',
    backgroundColor: 'black',
    padding: '40px',
    borderRadius: '5px',
    width: '300px',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '20px', 
    padding: '10px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: '#E50914',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    email: '',
    no_hp: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/customer/store', formData);
      console.log(response.data);
      // Tambahkan logika penanganan respons di sini
    } catch (error) {
      console.error('Error logging in', error);
      // Tambahkan logika penanganan kesalahan di sini
    }
  };

 return (
    <div style={backgroundStyle}>
      <div style={formStyle}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <input
          style={inputStyle}
          type="text"
          name="nama"
          placeholder="Nama"
          value={formData.nama}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          type="text"
          name="alamat"
          placeholder="Alamat"
          value={formData.alamat}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          type="text"
          name="no_hp"
          placeholder="Nomer Telepon"
          value={formData.no_hp}
          onChange={handleChange}
        />
        <button style={buttonStyle} onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;