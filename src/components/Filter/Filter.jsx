import React from 'react';

import InputNumber from '../InputNumber';
import InputDiscount from '../InputDiscount';
import logRender from '../../hoc/logRender';
import Button from '../Button';
import Categories from '../Categories';

import s from './styles.module.css';

class Filter extends React.PureComponent {
  handleForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleForm}>
        <fieldset className={s.inner}>
          <legend className={s.title}>Цена</legend>

          <span className={s.wrap}>
            <label className={s.item}>
              <span className={s.subtitle}>от</span>

              <InputNumber name="minPrice" value={this.props.minPrice} onChange={this.props.changeFilter} />
            </label>

            <label className={s.item}>
              <span className={s.subtitle}>до</span>

              <InputNumber name="maxPrice" value={this.props.maxPrice} onChange={this.props.changeFilter} />
            </label>
          </span>
        </fieldset>

        <div className={s.discount}>
          <InputDiscount
            title="Скидка"
            name="discount"
            value={this.props.discount}
            onChange={this.props.changeFilter}
          />
        </div>

        <Categories
          categories={this.props.categories}
          handleFilter={this.props.changeFilter}
          activeCategory={this.props.activeCategory}
        />

        <Button value="Сбросить фильтры" mod="primary" onClick={this.props.onClick} />
      </form>
    );
  }
}

export default logRender(Filter);
