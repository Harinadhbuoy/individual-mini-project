import React, { useState } from 'react';


const AdminHomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="brand">Trippy-on</div>
        {/* <div className={`menu ${isOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#packages">Packages</a>
          <a href="#trending-tours">Trending Tours</a>
          <a href="#about">About</a>
        </div> */}
        {/* <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div> */}
      </div>
      <div className="background-container">
        <div className="content">
          <h1>Where dreams take flight, and adventures ignite</h1>
          <p>Live Travel Love</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;