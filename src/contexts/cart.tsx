import { createContext, ReactNode, useState } from 'react';

export interface CartData {
  value: number;
  quantity: number;
}

export interface CartContextData {
  cartData: CartData;
  addToCart: (value: number, quantity: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export const CartProvider = function ({
  children,
}: CartProviderProps): JSX.Element {
  const [cartData, setCartData] = useState<CartData>({ value: 0, quantity: 0 });

  const addToCart = (value: number, quantity: number): void => {
    const newValue = cartData.value + value * quantity;
    const newQuantity = cartData.quantity + quantity;

    setCartData({ value: newValue, quantity: newQuantity });
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
