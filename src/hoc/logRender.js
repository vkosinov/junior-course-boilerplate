import React from 'react';
import { logger } from 'csssr-school-utils';
import shallowCompare from 'react-addons-shallow-compare';
import { getDisplayName } from '../utils';

export default OriginalComponent => {
  class logRender extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      if (shallowCompare(this, nextProps, nextState)) {
        logger.call(this, logRender.displayName, nextProps, nextState);
        return true;
      }
      return false;
    }

    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  logRender.displayName = `logRender(${getDisplayName(OriginalComponent)})`;
  return logRender;
};
