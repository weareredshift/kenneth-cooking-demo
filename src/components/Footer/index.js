import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = ({ route, buttonEnabled }) => (
  <div className="footer">
    <Link
      to={ route }
      className={ `btn btn--yellow btn--fullwidth btn--absolute ${buttonEnabled ? '' : 'is-disabled'}` }
    >Next</Link>
  </div>
);

Footer.defaultProps = {
  buttonEnabled: true
};

export default Footer;
