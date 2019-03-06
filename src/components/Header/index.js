import React from 'react';

const className = (pageIndex, currentIndex) => {
  if (pageIndex === currentIndex) {
    return 'current';
  } else {
    return pageIndex > currentIndex
      ? 'done'
      : 'upcoming';
  }
};

export const Header = ({ pageIndex, pageCount }) => (
  <div className="header">
    {
      [...Array(pageCount).keys()].map(index => (
        <div
          className={ `pagecounter ${className(pageIndex, index)}` }
          key={ index }
        >
          { index + 1 }
        </div>
      ))
    }
  </div>
);

export default Header;
