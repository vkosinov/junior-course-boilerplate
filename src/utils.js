export const getPrice = price => {
  return parseInt(price.slice(0, -1).replace(/\s+/g, ''));
};

export const getSelectedProduct = (items, minPrice, maxPrice, discount, category) => {
  let products = items;

  if (category) {
    products = items.filter(item => item.category === category);
  }

  products = products.filter(
    item => getPrice(item.price) >= minPrice && getPrice(item.price) <= maxPrice * (1 - discount / 100)
  );

  return products;
};

export function getDisplayName(OriginalComponent) {
  return OriginalComponent.displayName || OriginalComponent.name || 'Component';
}

export function getCategory(items) {
  let categorys = [];

  items.forEach(item => {
    if (!categorys.find(category => category === item.category)) {
      categorys.push(item.category);
    }
  });

  return categorys;
}
