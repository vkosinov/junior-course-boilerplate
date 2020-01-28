import React from 'react';

import InputNumber from '../InputNumber';
import InputDiscount from '../InputDiscount';
import logRender from '../../hoc/logRender';
import Button from '../Button';
import Categories from '../Categories';

import { AppContext } from '../../contexts';

import s from './styles.module.css';

class Filter extends React.Component {
  handleForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <AppContext.Consumer>
        {({
          maxPrice,
          minPrice,
          discount,
          handelChangeFilter,
          handleFilterClear,
          categories,
          activeCategory,
        }) => (
          <form className={s.form} onSubmit={this.handleForm}>
            <fieldset className={s.inner}>
              <legend className={s.title}>Цена</legend>

              <span className={s.wrap}>
                <label className={s.item}>
                  <span className={s.subtitle}>от</span>

                  <InputNumber name="minPrice" value={minPrice} onChange={handelChangeFilter} />
                </label>

                <label className={s.item}>
                  <span className={s.subtitle}>до</span>

                  <InputNumber name="maxPrice" value={maxPrice} onChange={handelChangeFilter} />
                </label>
              </span>
            </fieldset>

            <div className={s.discount}>
              <InputDiscount title="Скидка" name="discount" value={discount} onChange={handelChangeFilter} />
            </div>

            <Categories
              categories={categories}
              handleFilter={handelChangeFilter}
              activeCategory={activeCategory}
            />

            <Button value="Сбросить фильтры" mod="primary" onClick={handleFilterClear} />
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}

export default logRender(Filter);
