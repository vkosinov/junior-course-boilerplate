import { createSelector } from 'reselect';

export const getActivePage = createSelector(
  ({ router }) => router.location.query.page,
  page => page
);
