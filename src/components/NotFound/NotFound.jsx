import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './style.module.css';

export const NotFound = ({ title, arrow }) => {
  return (
    <>
      <h1 className={s.title}>
        {arrow && (
          <Link to="/" className={s.back}>
            ←
          </Link>
        )}
        {title}
      </h1>
      <div className={s.notFound}>
        <img src="/assets/img/not-found.svg" alt="not-found" />
      </div>
    </>
  );
};

NotFound.propTypes = {
  title: PropTypes.string,
  arrow: PropTypes.bool,
};
