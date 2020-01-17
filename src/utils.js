export const getPrice = price => {
  return parseInt(price.slice(0, -1).replace(/\s+/g, ''));
};
