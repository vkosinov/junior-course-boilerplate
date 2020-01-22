import React from 'react';

import Input from '../InputNumber';
import logRender from '../../hoc/logRender';
import withInputNumber from '../../hoc/withInputNumber';
import Discount from 'csssr-school-input-discount';

import s from './styles.module.css';

const InputDiscount = logRender(withInputNumber(Discount));
const InputNumber = logRender(Input);

class Filter extends React.Component {
  handleClick = event => {
    event.preventDefault();

    if (parseInt(this.inputMinRef.current.value) >= 0 && parseInt(this.inputMaxRef.current.value) >= 0) {
      this.props.handleFilter({
        minPrice: parseInt(this.inputMinRef.current.value),
        maxPrice: parseInt(this.inputMaxRef.current.value),
      });
    }
  };

  handleChangeMin = value => {
    this.props.handleFilter({ minPrice: value });
  };

  handleChangeMax = value => {
    this.props.handleFilter({ maxPrice: value });
  };

  handleDiscount = value => {
    this.props.handleFilter({ discount: value });
  };

  render() {
    return (
      <form className={s.form}>
        <fieldset className={s.inner}>
          <legend className={s.title}>Цена</legend>

          <span className={s.wrap}>
            <label className={s.item}>
              <span className={s.subtitle}>от</span>

              <InputNumber value={this.props.minPrice} onChange={this.handleChangeMin} />
            </label>

            <label className={s.item}>
              <span className={s.subtitle}>до</span>

              <InputNumber value={this.props.maxPrice} onChange={this.handleChangeMax} />
            </label>
          </span>
        </fieldset>

        <InputDiscount
          title="Скидка"
          name="discount"
          value={this.props.discount}
          onChange={this.handleDiscount}
        />
      </form>
    );
  }
}

export default logRender(Filter);
