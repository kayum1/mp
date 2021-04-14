import React from 'react';
import Story from '../story';

import { Wrapper, PageHeader } from './styles';
const Stories = (props) => {
  return (
    <Wrapper>
      <PageHeader>{props.section}</PageHeader>
      {props.stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </Wrapper>
  );
};

export default Stories;
