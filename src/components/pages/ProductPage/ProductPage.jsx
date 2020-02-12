import React from 'react';

import Product from '../../../containers/Product';

export const ProductPage = props => {
  return <Product productId={+props.match.params.id} />;
};
