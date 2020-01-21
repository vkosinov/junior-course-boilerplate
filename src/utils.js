export const getPrice = price => {
  return parseInt(price.slice(0, -1).replace(/\s+/g, ''));
};

export const getSelectedProduct = (items, maxPrice, minPrice) => {
  return items.filter(item => getPrice(item.price) <= minPrice && getPrice(item.price) >= maxPrice);
};
