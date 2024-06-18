import './basket-item-styles.scss';

const BasketItem = ({ BasketItem }) => {
  const { name, quantity, price, imageUrl } = BasketItem;
  return (
    <div className='basket-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};

export default BasketItem;
