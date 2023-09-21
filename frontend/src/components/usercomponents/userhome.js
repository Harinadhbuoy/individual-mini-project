// import React from 'react';
// import '../../assets/images/bg_image.jpg'; 
// import "../../styles/userhome/userhome.css"

// const userHomePage = () => {
//   return (
//     <div className="background-container">
//       <div className="content">
//         <h1>Where dreams take flight, and adventures ignite</h1>
//         <p>Live Travel Love</p>
//       </div>
//     </div>
//   );
// };

// export default userHomePage;



import React, { useState } from 'react';
import '../../assets/images/bg_image.jpg'; 
import "../../styles/userhome.css";

const UserHomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="brand">Trippy-on</div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#packages">Packages</a>
          <a href="#trending-tours">Trending Tours</a>
          <a href="#about">About</a>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
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

export default UserHomePage;
