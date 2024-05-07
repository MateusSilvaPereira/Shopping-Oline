import React, { ReactNode, useState } from "react";
import ShoppingContext from "./ShoppingContext";

type ProviderProps = {
  children: ReactNode;
};

interface Product {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItem, setCartItem] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCartVisibile, setIsCartVisibile] = useState<boolean>(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItem,
    setCartItem,
    isCartVisibile,
    setIsCartVisibile,
  };

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default Provider;
