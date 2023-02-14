import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null
})

export const ProductsProvider = ({children}) => {

  const [products, setProducts] = useState([]);
  const value = {products};

  useEffect(() => {
    const _getCategoriesAndDocuments = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log('categoryMap', categoryMap);
    }
    _getCategoriesAndDocuments();
  }, [])

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}