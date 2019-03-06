import React, { useState } from 'react';

import Page from 'containers/Page';

import './Skills.scss';

const toggleInArray = (array, element) => (
  array.includes(element)
    ? array.filter(el => el !== element)
    : [...array, element]
);

const skills = [
  'cutting',
  'safety',
  'baking',
  'sauces',
  'seasoning',
  'large meals'
];

export const Skills = () => {
  const [selected, setSelected] = useState([]);
  return (
    <Page pageIndex={ 1 }>
      <h2 className="prompt">Tap skills that you are interested in</h2>
      {
        skills.map(skill => (
          <div
            className={ `skill-card ${ selected.includes(skill) ? 'selected' : '' }` }
            key={ skill }
            onClick={ () => setSelected(toggleInArray(selected, skill)) }
          >
            { skill }
          </div>
        ))
      }
    </Page>
  );
};

export default Skills;
