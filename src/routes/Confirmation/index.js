import React from 'react';
import Page from 'containers/Page';
import { Link } from 'react-router-dom';

export const Confirmation = () => (
  <Page pageIndex={ 3 }>
    <div className="typ--center">
      <h2 className="typ--bold mb5">
        You’re all set up!<br />
        We think you're a...
      </h2>

      <h1 className="typ--bold typ--caps typ--yellow\ mb6">Level 2 cook</h1>

      <p>Skills you should know:</p>
      <ul className="mb4">
        <li>cutting vegetables</li>
        <li>using salt and pepper</li>
      </ul>

      <Link to="/">Doesn't look right?</Link>
    </div>
  </Page>
);

export default Confirmation;
