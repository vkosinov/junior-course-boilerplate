import React from 'react';

import { toInt } from 'csssr-school-utils';
import { getDisplayName } from '../utils';

export default OriginalComponent => {
  class withInputNumber extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: this.props.value,
      };
    }

    handleChange = events => {
      const newValue = toInt(events.target.value);

      if (newValue !== this.state.value) {
        this.setState({
          value: newValue,
        });

        if (this.props.onChange) {
          this.props.onChange(newValue);
        }
      }
    };

    render() {
      return <OriginalComponent {...this.props} value={this.state.value} onChange={this.handleChange} />;
    }
  }
  withInputNumber.displayName = `withInputNumber(${getDisplayName(OriginalComponent)})`;
  return withInputNumber;
};
