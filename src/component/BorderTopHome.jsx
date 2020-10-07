import React from 'react';
import './borderTop.css';
import ImgTontonLogo from '../img/ImgTontonLogo.png';


function BorderTopHome() {
  return (
    <div className="BorderTopHome">
      <div className="BorderTopColor BorderTopColorHome" />
      <div className="ImgCenterBorderTop">
        <img
          max height 
          src={ImgTontonLogo}
          alt="CardImgTP"
          className="CardImgTP"
          id="ProfilImg"
        />
      </div>
    </div>
  );
}

export default BorderTopHome;
