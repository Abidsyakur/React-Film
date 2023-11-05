import React from 'react';

const TiketFilm = () => {
  const tiketStyle = {  
    backgroundColor: 'white',
    width: '60%',
    height: '300px',
    border: '2px solid #E50914',
    borderRadius: '10px',
    padding: '20px',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'row',
  };

  const imageStyle = {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const filmInfo = {
    title: 'Judul Film',
    seatNumber: 'Nomor Kursi',
  };

  const orderInfo = {
    orderDate: 'Tanggal Pemesanan',
    totalPrice: 'Total Harga',
  };

  const buttonStyle = {
    backgroundColor: '#E50914',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div>
      <div style={tiketStyle}>
        <div style={imageStyle}>
          <img src="https://via.placeholder.com/150" alt="film poster" style={{ width: '80%' }} />
        </div>
        <div style={contentStyle}>
          <h2 style={{ color: '#E50914', margin: '10px 0' }}>{filmInfo.title}</h2>
          <hr style={{ margin: '10px 0', borderColor: '#E50914' }} />
          <p style={{ margin: '10px 0' }}>Nomor Kursi: {filmInfo.seatNumber}</p>
          <hr style={{ margin: '20px 0', borderColor: '#E50914' }} />
          <p style={{ margin: '10px 0' }}>Tanggal Pemesanan: {orderInfo.orderDate}</p>
          <p style={{ margin: '10px 0' }}>Total Harga: {orderInfo.totalPrice}</p>
          <hr style={{ margin: '20px 0', borderColor: '#E50914' }} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href='./dashboard'>
        <button style={buttonStyle}>Back</button>
        </a>
      </div>
    </div>
  );
};

export default TiketFilm;
