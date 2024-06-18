import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { BasketContext } from '../../contexts/basket-context';
import Button from '../button/button-component';

import BasketItem from '../basket-item/basket-item-component';

import './basket-dropdown-styles.scss';

const BasketDropdown = () => {
  const { basketItems } = useContext(BasketContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/check-out');
  };
  return (
    <div className='basket-dropdown-container'>
      <div className='basket-items'>
        {basketItems.map((item) => (
          <BasketItem key={item.id} BasketItem={item} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default BasketDropdown;
