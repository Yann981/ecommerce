import { createContext, useEffect, useState } from 'react';

const addBasketItem = (basketItems, productToAdd) => {
  // find if basket items contains productToAdd
  const existingBasketItem = basketItems.find(
    (basketItems) => basketItems.id === productToAdd.id
  );
  // if found, increment quantity
  // We found a match in basket items, return a new array of basket items
  // If basket items is the same as the product to add to basket, return a new basket item
  if (existingBasketItem) {
    return basketItems.map((basketItems) =>
      basketItems.id === productToAdd.id
        ? { ...basketItems, quantity: basketItems.quantity + 1 }
        : basketItems
    );
  }

  // return a new array with modified basket items (spread syntax)

  return [...basketItems, { ...productToAdd, quantity: 1 }];
};

export const BasketContext = createContext({
  isBasketOpen: false,
  setIsBasketOpen: () => {},
  basketItems: [],
  addItemToBasket: () => {},
  basketCount: 0,
});

export const BasketProvider = ({ children }) => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const [basketCount, setBasketCount] = useState(0);

  useEffect(() => {
    const newBasketCount = basketItems.reduce(
      (total, basketItems) => total + basketItems.quantity,
      0
    );
    setBasketCount(newBasketCount);
  }, [basketItems]);

  const addItemToBasket = (productToAdd) => {
    setBasketItems(addBasketItem(basketItems, productToAdd));
  };

  const value = { isBasketOpen, setIsBasketOpen, addItemToBasket, basketItems, basketCount };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};
