import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo.png';
import './netflix.css';

const Netflix = () => {
  return (
    <div className='netflix__container'>
      <div className='netflix__overlay'>
        <div className='holder'>
          <div className='header'>
            <Image src={logo} alt='logo' width={150} height={150} />
            <button>Sign in</button>
          </div>
          <div className='text__container'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
          </div>
          <div className='form'>
            <input type='email' placeholder='Email address' />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netflix;
