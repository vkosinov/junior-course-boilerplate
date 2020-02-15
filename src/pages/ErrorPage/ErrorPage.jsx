import React from 'react';

import s from './styles.module.css';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className={s.errorPage}>
      <Link to="/" className={s.link}>
        На главную
      </Link>
      <img className={s.img} src="/assets/img/island.svg" width="221" height="379" alt="404" />
      <h1 className={s.title}>404</h1>
    </div>
  );
};
