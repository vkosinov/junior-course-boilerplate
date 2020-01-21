import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.module.css';

export const Input = React.forwardRef((props, ref) => {
  return <input className={s.input} type="text" defaultValue={props.defaultValue} ref={ref} />;
});

Input.propTypes = {
  defaultValue: PropTypes.number,
};

Input.defaultProps = {
  defaultValue: 0,
};
