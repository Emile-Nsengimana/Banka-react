import React from 'react';
import Wallpaper from '../assets/img/wallpaper.jpg';

const Summary = () => (
  <div className="overall">
    <div className="wallpaper">
      <img src={Wallpaper} alt="" />

    </div>
    <div className="summary">
      <p>
        A light-weight core banking application that powers banking operations
      </p>
    </div>
  </div>
);

export default Summary;
