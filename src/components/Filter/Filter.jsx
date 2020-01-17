import React from 'react';

import { Input } from '../Input';
import { Button } from '../Button';
import { LogRender } from '../LogRender';

import s from './styles.module.css';

export class Filter extends LogRender {
  constructor(props) {
    super(props);

    this.inputMaxRef = React.createRef();
    this.inputMinRef = React.createRef();
  }

  handleClick = event => {
    event.preventDefault();

    if (parseInt(this.inputMinRef.current.value) >= 0 && parseInt(this.inputMaxRef.current.value) >= 0) {
      this.props.handleFilter({
        minPrice: parseInt(this.inputMinRef.current.value),
        maxPrice: parseInt(this.inputMaxRef.current.value),
      });
    }
  };

  render() {
    return (
      <form className={s.form}>
        <fieldset className={s.inner}>
          <legend className={s.title}>Цена</legend>

          <span className={s.wrap}>
            <label className={s.item}>
              <span className={s.subtitle}>от</span>

              <Input defaultValue={this.props.minPrice} ref={this.inputMinRef} />
            </label>

            <label className={s.item}>
              <span className={s.subtitle}>до</span>

              <Input defaultValue={this.props.maxPrice} ref={this.inputMaxRef} />
            </label>
          </span>
        </fieldset>

        <Button value="Применить" onClick={this.handleClick} />
      </form>
    );
  }
}
