import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import logRender from '../../hoc/logRender';

import s from './styles.module.css';

const Button = ({ value, onClick, mod, to }) => {
  const Tag = to ? Link : 'button';

  return (
    <Tag to={to} onClick={onClick} className={cn(s.button, { [s.primary]: mod === 'primary' })} type="button">
      {value}
    </Tag>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default logRender(Button);
