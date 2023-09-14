import Image from 'next/image';
import React from 'react';
import './tv.css';
import TVImage from '../../../public/assets/TV.png';

const TV = () => {
  return (
    <div className='tv__container'>
      <div className='tv__grid'>
        <div className='left'>
          <h1>Enjoy on your TV</h1>
          <h4>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </h4>
        </div>
        <div className='right'>
          <Image src={TVImage} alt='TV' width='' height='' />
        </div>
      </div>
    </div>
  );
};

export default TV;
