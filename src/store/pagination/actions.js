import { GO_TO_PAGE } from './types';

export const goToPage = number => {
  return {
    type: GO_TO_PAGE,
    payload: number,
  };
};
