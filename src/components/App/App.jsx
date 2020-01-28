import React from 'react';

import { Title } from '../Title';
import { Container } from '../Container';
import ProductList from '../ProductList';
import Filter from '../Filter';

import { AppContext, minPrice, maxPrice } from '../../contexts';
import { getSelectedProduct, getCategory, initialState } from '../../utils';

import s from './styles.module.css';

import products from '../../products';

const categories = getCategory(products);

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState(minPrice, maxPrice);
  }

  componentDidMount() {
    window.addEventListener('popstate', this.setCategoryHistory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setCategoryHistory);
  }

  setCategoryHistory = () => {
    if (window.location.pathname.length > 1) {
      this.setState({
        activeCategory: window.location.pathname.slice(1),
      });
    } else {
      this.setState({
        activeCategory: '',
      });
    }
  };

  handleFilterClear = () => {
    this.setState(initialState(minPrice, maxPrice));
    window.history.pushState({}, '', '/');
  };

  handelChangeFilter = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const filteredProducts = getSelectedProduct(
      products,
      this.state.minPrice,
      this.state.maxPrice,
      this.state.discount,
      this.state.activeCategory
    );

    return (
      <AppContext.Provider
        value={{
          categories: categories,
          activeCategory: this.state.activeCategory,
          handleFilter: this.handleFilter,
          maxPrice: this.state.maxPrice,
          minPrice: this.state.minPrice,
          discount: this.state.discount,
          handelChangeFilter: this.handelChangeFilter,
          handleFilterClear: this.handleFilterClear,
        }}
      >
        <Container>
          <Title>Список товаров</Title>

          <div className={s.main}>
            <div className={s.aside}>
              <Filter />
            </div>

            <div className={s.article}>
              <ProductList items={filteredProducts} />
            </div>
          </div>
        </Container>
      </AppContext.Provider>
    );
  }
}
