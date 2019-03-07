import React from 'react';
import Page from 'containers/Page';
import './Comfort.scss';

export const Comfort = () => (
  <Page pageIndex={ 0 }>
    <h1 className="pageheader mb8">How comfortable do you feel in the kitchen?</h1>
    <div className="slider-container">

      <div className="range__container">
        <span>-</span>
        <input type="range" />
        <span>+</span>
      </div>

      <div className="range__labels">
        <span>I've never been in a kitchen</span>

        <span>I cook for a living</span>
      </div>
    </div>
  </Page>
);

export default Comfort;
