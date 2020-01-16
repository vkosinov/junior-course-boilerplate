import React from 'react';

import s from './styles.module.css';

export const Title = ({ children }) => {
  return <h1 className={s.title}>{children}</h1>;
};
