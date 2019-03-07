import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const className = (pageIndex, currentIndex) => {
  if (pageIndex === currentIndex) {
    return 'current';
  } else {
    return pageIndex > currentIndex
      ? 'done'
      : 'upcoming';
  }
};

export const Header = ({ pageIndex, pageCount, routes }) => {
  // debugger;
  
  return (
    <div className="header py3">
      {
        [...Array(pageCount).keys()].map(index => (
          <Link
            to={routes[index] }
            className={ `pagecounter ${className(pageIndex, index)}` }
            key={ index }
          >
            { index + 1 }
          </Link>
        ))
      }
    </div>
  );
};

export default Header;
