import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = ({ route }) => (
  <div className="footer">
    <Link to={ route } className="btn">Next</Link>
  </div>
);

export default Footer;
