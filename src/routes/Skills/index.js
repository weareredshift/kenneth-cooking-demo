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
    <Page pageIndex={ 1 } buttonEnabled={ selected.length > 0 ? true : false }>
      <h1 className="pageheader mb3">Tap skills that you are interested in</h1>

      <div className="btngroup">
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
      </div>
    </Page>
  );
};

export default Skills;
