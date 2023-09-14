import React from 'react';
import './shows.css';
import Mobile from '../../../public/assets/mobile.jpg';
import Image from 'next/image';

const Shows = () => {
  return (
    <div className='shows__container'>
      <div className='shows__grid'>
        <div className='left'>
          <Image src={Mobile} alt='TV' width='' height='' />
        </div>
        <div className='right'>
          <h1>Download your shows to watch offline</h1>
          <h4>Save your favorites easily and always have something to watch.</h4>
        </div>
      </div>
    </div>
  );
};

export default Shows;
