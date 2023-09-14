import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__items'>
        <ul>
          <li>
            <a href='#'>Questions? Contact us.</a>
          </li>
          <li>
            <a href='#'>FAQ</a>
          </li>
          <li>
            <a href='#'>Investor Relations</a>
          </li>
          <li>
            <a href='#'>Privacy</a>
          </li>
          <li>
            <a href='#'>Speed Test</a>
          </li>
          <select>
            <option>English</option>
          </select>
        </ul>
        <h1>Netflix Nigeria</h1>
      </div>

      <div className='footer__items'>
        <ul>
          <li>
            <a href='#'>Help Center</a>
          </li>
          <li>
            <a href='#'>Jobs</a>
          </li>
          <li>
            <a href='#'>Cookie Preferences</a>
          </li>
          <li>
            <a href='#'>Legal Notices</a>
          </li>
        </ul>
      </div>

      <div className='footer__items'>
        <ul>
          <li>
            <a href='#'>Account</a>
          </li>
          <li>
            <a href='#'>Ways to Watch</a>
          </li>
          <li>
            <a href='#'>Corporate Information</a>
          </li>
          <li>
            <a href='#'>Only on Netflix</a>
          </li>
        </ul>
      </div>

      <div className='footer__items'>
        <ul>
          <li>
            {' '}
            <a href='#'>Media Center</a>
          </li>
          <li>
            <a href='#'>Terms of Use</a>
          </li>
          <li>
            <a href='#'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
