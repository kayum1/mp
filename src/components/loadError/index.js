import React from 'react';
import SVGError from './SVGError.svg';
import { LoadError, LoadErrorImg } from './styles';

const Loading = () => {
  return (
    <LoadError>
      <LoadErrorImg>
        <img src={SVGError} alt='Loading Error' />
      </LoadErrorImg>
    </LoadError>
  );
};
export default Loading;
