import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import logRender from '../../hoc/logRender';

import s from './styles.module.css';

const Button = ({ value, onClick, mod }) => {
  return (
    <button onClick={onClick} className={cn(s.button, { [s.primary]: mod === 'primary' })} type="button">
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default logRender(Button);
