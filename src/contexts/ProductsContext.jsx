import { createContext, useState, useEffect } from "react";
import PRODUCTS from '../gallery-data.json'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null
})

export const ProductsProvider = ({children}) => {

  const [products, setProducts] = useState(null);
  const value = {products};

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}