import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div className="home">
    <h2>Welcome!</h2>
    <h2>Ready to hone your cooking skills?</h2>
    <Link className="btn" to="/comfort">Let's go</Link>
  </div>
);

export default Home;
