import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export const Home = () => (
  <div className="home row py3">
    <h1 className="typ--center typ--bold typ--white pt4">
      Welcome!<br />
      Ready to hone your cooking skills?
    </h1>

    <Link className="btn--absolute btn btn--yellow btn--fullwidth" to="/comfort">Let's go</Link>
  </div>
);

export default Home;
