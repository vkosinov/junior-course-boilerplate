import React from 'react';

import { toInt } from 'csssr-school-utils';
import { getDisplayName } from '../utils';

export default OriginalComponent => {
  class withInputNumber extends React.Component {
    handleChange = events => {
      const newValue = toInt(events.target.value);

      if (newValue !== this.value) {
        if (this.props.onChange) {
          this.props.onChange(this.props.name, newValue);
        }
      }
    };

    render() {
      return <OriginalComponent {...this.props} onChange={this.handleChange} />;
    }
  }
  withInputNumber.displayName = `withInputNumber(${getDisplayName(OriginalComponent)})`;
  return withInputNumber;
};
