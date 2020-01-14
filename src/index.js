import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import products from './products';

const productList = products.slice(0,3);

class ProductListItem extends React.Component {
  render() {
    return <li>{this.props.item}</li>;
  }
}

class ProductList extends React.Component {
  render() {
    return (
      <div className="container">
      <h1>Список товаров</h1>
        <ul>
          {this.props.items.map(item => (
            <ProductListItem item={item.name} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList items={productList} />,
  document.getElementById('root')
);
