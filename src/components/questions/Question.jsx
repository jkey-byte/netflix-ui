import React from 'react';
import './question.css';
import { AiOutlinePlus } from 'react-icons/ai';

const Question = () => {
  const handleClick = () => {
    alert('clicked');
  };

  return (
    <div className='question__container'>
      <h1 className='question__heading'>Frequently Asked Question</h1>

      <div className='question__holder'>
        <div
          className='question'
          onClick={() => {
            handleClick();
          }}
        >
          <h1>What is Netflix</h1>
          <AiOutlinePlus className='plus__icon' />
        </div>
        <div className='tooltip'>
          <p>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows,
            movies, anime, documentaries, and more on thousands of internet-connected devices.
          </p>
          <br />
          <p>
            You can watch as much as you want, whenever you want without a single commercial – all
            for one low monthly price. There's always something new to discover and new TV shows and
            movies are added every week!
          </p>
        </div>
      </div>
      <div className='question__holder'>
        <div className='question' onClick={handleClick}>
          <h1>What is Netflix</h1>
          <AiOutlinePlus className='plus__icon' />
        </div>
        <div className='tooltip'>
          <p>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows,
            movies, anime, documentaries, and more on thousands of internet-connected devices.
          </p>
          <br />
          <p>
            You can watch as much as you want, whenever you want without a single commercial – all
            for one low monthly price. There's always something new to discover and new TV shows and
            movies are added every week!
          </p>
        </div>
      </div>
      <div className='question__text-container'>
        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
      </div>
      <div className='form'>
        <input type='email' placeholder='Email address' />
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Question;
