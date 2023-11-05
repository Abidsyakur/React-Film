import React from 'react';

const Dashboard = () => {
  const backgroundStyle = {
    backgroundImage: 'url("/bg2.jpeg")',
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
    color:'#E50914',
    flex: 1,
    textAlign: 'center',
  };

  const rightSectionStyle = {
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
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div style={welcomeSectionStyle}>
        <div style={leftSectionStyle}>
          <h2 style={{fontFamily:'Teko, sans-serif',fontSize:'4rem'}}>Selamat Datang di Dashboard, Nama</h2>
        </div>
        <div style={rightSectionStyle}>
          <img src="/icom.png" alt="icon" style={{ width: '400px' }} />
        </div>
      </div>

      <div style={cardContainerStyle}>
        {Array.from({ length: 9 }).map((_, idx) => (
          <div key={idx} style={cardStyle}>
            <a href='./pesan' style={{textDecoration:'none',color:'black'}}>
            <h3>Film {idx + 1}</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
