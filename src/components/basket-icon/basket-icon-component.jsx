import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { BasketContext } from '../../contexts/basket-context';

import './basket-icon-styles.scss';

const BasketIcon = () => {
  const { isBasketOpen, setIsBasketOpen, basketCount } =
    useContext(BasketContext);

  const toggleIsBasketOpen = () => setIsBasketOpen(!isBasketOpen);
  return (
    <div className='basket-icon-container' onClick={toggleIsBasketOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{basketCount}</span>
    </div>
  );
};

export default BasketIcon;
