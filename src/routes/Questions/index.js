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
    <Page pageIndex={ 2 } buttonEnabled={ selection ? true : false }>
      <h1 className="pageheader mb3">How often do you think about safety in the kitchen?</h1>
      {
        options.map(opt => (
          <div
            className={ `skill-card ${selection === opt ? 'selected' : ''}`  }
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
