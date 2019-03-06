import React from 'react';
import Slider from 'rc-slider';

import Page from 'containers/Page';

import './Comfort.scss';

export const Comfort = () => (
  <Page pageIndex={ 0 }>
    <h2 className="prompt">How comfortable do you feel in the kitchen?</h2>
    <div className="slider-container">
      <Slider min={ 0 } max={ 10 } />
    </div>
  </Page>
);

export default Comfort;
