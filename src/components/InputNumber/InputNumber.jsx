import React from 'react';
import PropTypes from 'prop-types';

import withInputNumber from '../../hoc/withInputNumber';

import s from './styles.module.css';

const InputNumber = props => {
  return (
    <input
      className={s.input}
      type="text"
      defaultValue={props.defaultValue}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

InputNumber.propTypes = {
  defaultValue: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default withInputNumber(InputNumber);
