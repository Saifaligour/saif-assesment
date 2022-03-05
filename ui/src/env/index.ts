/* eslint-disable no-console */
import dev from './dev';
import stag from './stag';
import prod from './prod';
import local from './default';

export default (() => {
  switch (process.env.REACT_APP_ENV) {
    case 'dev':
      return dev;
    case 'stag':
      return stag;
    case 'prod':
      return prod;
    default:
      return local;
  }
})();
