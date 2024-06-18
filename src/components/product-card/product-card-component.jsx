import { useContext } from 'react';
import './product-card-styles.scss';

import Button from '../button/button-component';
import { BasketContext } from '../../contexts/basket-context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToBasket } = useContext(BasketContext);

  const addProductToBasket = () => addItemToBasket(product);
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToBasket}>
        Add to basket
      </Button>
    </div>
  );
};

export default ProductCard;
