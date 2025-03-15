import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br/> <strong>Jalapeño App</strong> </p>
      
      <div className='app-download-platform'>
        <a href="https://play.google.com/store/games?device=windows&pli=1" target="_blank" rel="noopener noreferrer" title="Download on Play Store">
          <img src={assets.play_store} alt="Download Jalapeño App from Play Store" />
        </a>

        <a href="https://appstore.com" target="_blank" rel="noopener noreferrer" title="Download on App Store">
          <img src={assets.app_store} alt="Download Jalapeño App from App Store" />
        </a>
      </div>
    </div>
  );
}

export default AppDownload;
