import { CHANGE_FILTER } from './types';

export const changeFilter = (name, value) => {
  return {
    type: CHANGE_FILTER,
    payload: {
      name,
      value,
    },
  };
};
