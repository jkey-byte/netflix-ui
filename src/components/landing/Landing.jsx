import Image from 'next/image';
import React from 'react';
import './landing.css';
import logo from '../../../public/assets/logo.png';

const Landing = () => {
  return (
    <div className='landing__container'>
      <div className='landing__overlay'>
        <div className='landing__body'>
          <div className='nav'>
            <Image src={logo} alt='logo' width={150} height={150} />
            <button>Sign in</button>
          </div>
          <div className='landing__text'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h4>Unlimited movies, TV shows, and more</h4>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            <input type='text' placeholder='Email address' />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
