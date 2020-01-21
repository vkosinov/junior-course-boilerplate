import React from 'react';
import PropTypes from 'prop-types';

import { LogRender } from '../LogRender';

import s from './styles.module.css';

export class Button extends LogRender {
  render() {
    return (
      <button onClick={this.props.onClick} className={s.button} type="button">
        {this.props.value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
