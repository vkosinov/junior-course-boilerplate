import React from 'react';
import PropTypes from 'prop-types';

import withInputNumber from '../../hoc/withInputNumber';
import logRender from '../../hoc/logRender';

import s from './styles.module.css';

const InputNumber = props => {
  return (
    <input
      className={s.input}
      type="text"
      defaultValue={props.defaultValue}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    />
  );
};

InputNumber.propTypes = {
  defaultValue: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default withInputNumber(logRender(InputNumber));
