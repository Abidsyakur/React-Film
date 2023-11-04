import React from 'react';

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

  return (
    <div style={backgroundStyle}>
      <div style={formStyle}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <input style={inputStyle} type="text" placeholder="Nama" />
        <input style={inputStyle} type="text" placeholder="Alamat" />
        <input style={inputStyle} type="gmail" placeholder="Email" />
        <input style={inputStyle} type="text" placeholder="Nomer Telepon" />
        <button style={buttonStyle}>Login</button>
      </div>
    </div>
  );
};

export default Login;
