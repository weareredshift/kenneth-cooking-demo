import React, { useState } from 'react';

import Page from 'containers/Page';

import './Questions.scss';

const options = [
  'Not at all',
  'Sometimes',
  'All the time'
];

export const Questions = () => {
  const [selection, makeSelection] = useState(null);

  return (
    <Page pageIndex={ 2 }>
      <h2 className="prompt">How often do you think about safety in the kitchen?</h2>
      {
        options.map(opt => (
          <div
            className={ `option ${selection === opt ? 'selected' : ''}`  }
            key={ opt }
            onClick={ () => makeSelection(opt) }
          >
            { opt }
          </div>
        ))
      }
    </Page>
  );
};

export default Questions;
