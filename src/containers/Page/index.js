import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';

const routes = [
  '/comfort',
  '/skills',
  '/questions',
  '/' // TODO: Add final route
];

export const Page = ({ pageIndex, children }) => {
  return (
    <div className="page">
      <Header
        pageIndex={ pageIndex }
        pageCount={ routes.length }
      />
      { children }
      <Footer route={ routes[pageIndex + 1] } />
    </div>
  );
}

export default Page;
