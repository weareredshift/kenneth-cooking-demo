import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';

const routes = [
  '/comfort',
  '/skills',
  '/questions',
  '/confirmation'
];

export const Page = ({ pageIndex, children, buttonEnabled }) => {
  return (
    <div className="page row">
      <Header
        pageIndex={ pageIndex }
        pageCount={ routes.length }
        routes={ routes }
      />
      { children }
      <Footer route={ routes[pageIndex + 1] || '/' } buttonEnabled={ buttonEnabled } />
    </div>
  );
}

export default Page;
