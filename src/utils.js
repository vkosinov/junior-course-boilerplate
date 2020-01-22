export const getPrice = price => {
  return parseInt(price.slice(0, -1).replace(/\s+/g, ''));
};

export const getSelectedProduct = (items, minPrice, maxPrice, discount) => {
  return items.filter(
    item => getPrice(item.price) >= minPrice && getPrice(item.price) <= maxPrice * (1 - discount / 100)
  );
};
