import React, { useState } from 'react';

import Button from '../components/Button';

const AddToCart = ({ id, long }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(prevState => !prevState);
    console.log(id);
  };

  const value = added ? `Убрать${long ? ' из корзины' : ''}` : `Добавить${long ? ' в корзину' : ''}`;
  const mod = added ? null : 'primary';

  return <Button value={value} mod={mod} onClick={handleClick} />;
};

export { AddToCart };
