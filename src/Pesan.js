import React from 'react';

const Pesan = () => {
  const backgroundStyle = {
    backgroundColor:'black',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const welcomeSectionStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    marginBottom: '20px',
    color: 'white',
  };

  const leftSectionStyle = {
    color: '#E50914',
    flex: 1,
    paddingTop:'10rem',
    textAlign: 'center',
  };

  const rightSectionStyle = {
    paddingRight:'6rem',
    paddingTop:'10rem',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const cardStyle = {
    backgroundColor: '#E50914',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div style={welcomeSectionStyle}>
        <div style={leftSectionStyle}>
          <h2 style={{ fontFamily: 'Teko, sans-serif', fontSize: '4rem' }}>
            Nama Film
          </h2>
          <h2 style={{ fontFamily: 'Teko, sans-serif', fontSize: '4rem' }}>
            Tahun
          </h2>
          <h2 style={{ fontFamily: 'Teko, sans-serif', fontSize: '4rem' }}>
            Durasi
          </h2>
          <h2 style={{ fontFamily: 'Teko, sans-serif', fontSize: '4rem' }}>
            Genre
          </h2>
          <a href='./tiket'>
           <button type="button" className="btn btn-danger btn-lg"  style={{color:'black'}}>
              CHECKOUT
            </button>
          </a>

        </div>
        <div style={rightSectionStyle}>
          <div style={cardContainerStyle}>
            <div style={cardStyle}>
              <img src="/bg2.jpeg" alt="Poster Film" style={{ width: '250px', height: '300px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pesan;
