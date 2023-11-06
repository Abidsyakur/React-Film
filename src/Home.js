import React from "react";

const Home = () => {
  const BackgroundStyle = {
    backgroundImage:'url("/bg.jpg")',
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    minHeight:'100vh'
  };

  const buttonStyle = {
    fontFamily: 'Teko, sans-serif',
  };
   const titleStyle = {
    fontFamily: 'Teko, sans-serif',
    fontWeight: 1000,
    fontSize: '5rem',
    color: '#E50914',
    textAlign: 'center',
  };
  return (
    <div style={BackgroundStyle}> 
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#home" style={{color:'#E50914'}}>
            Nonton Kuy
          </a>
        </div>
      </nav>

      <div className="d-flex flex-column align-items-center" style={{ height: '80vh', justifyContent: 'center' }}>
        <h2 style={titleStyle}>SELAMAT DATANG  DI NONTON KUY</h2>
        <div className="mt-4">
          <a href="login">
            <button type="button" className="btn btn-danger btn-lg"  style={buttonStyle}>
              ORDER TIKET KUY
            </button>
          </a>
        </div>
      </div>

      <div className="container" style={{ marginTop: '100px' }}>
        <h3 style={{fontFamily:'Teko, sans-serif',color:'#E50914',fontSize:'3rem'}}>Film Terbaru</h3>
        <div className="row">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="col-md-4" style={{ marginBottom: '20px' }}>
              <div className="card" style={{backgroundColor:'#E50914'}}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Film Poster" />
                <div className="card-body">
                  <h5 className="card-title">Film {idx + 1}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ backgroundColor: 'black', marginTop: '50px', padding: '20px' }}>
        <p style={{ textAlign: 'center', color:'#E50914' }}>© {new Date().getFullYear()} Nonton Kuy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;