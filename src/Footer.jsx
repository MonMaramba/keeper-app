import React from 'react';
import './_footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Created by Mon Maramba</p>
      <p>Copyright {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
