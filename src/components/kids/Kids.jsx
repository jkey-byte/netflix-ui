import React from 'react';
import './kids.css';
import Image from 'next/image';
import Kid from '../../../public/assets/kids.png';

const Kids = () => {
  return (
    <div className='kids__container'>
      <div className='kids__grid'>
        <div className='left'>
          <Image src={Kid} alt='TV' width='' height='' />
        </div>
        <div className='right'>
          <h1>Create profiles for kids</h1>
          <h4>
            Send kids on adventures with their favorite characters in a space made just for
            them—free with your membership.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Kids;
