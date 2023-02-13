import { createContext, useState, useEffect } from "react";

const getUpdatedCartItems = (cartItems, product) => {
  const { id } = product;
    let itemExists = false;

    // duplicate existing items & increment same item if exists
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id == id) {
        itemExists = true;
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      } else {
        return cartItem;
      }
    })

    // new item
    if(!itemExists) {
      newCartItems.push({...product, quantity: 1});
    }

    return newCartItems;
}

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  numItems: 0,
  setNumItems: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [numItems, setNumItems] = useState(0)

  // setNumItems(numItems + 1); SAME
  useEffect(() => {
    const newItemCount = cartItems.reduce((total, cartItem) => cartItem.quantity + total, 0)
    setNumItems(newItemCount);
  }, [cartItems])

  const addItemToCart = (product) => {
    setCartItems(getUpdatedCartItems(cartItems, product));
    // setNumItems(numItems + 1);
  }

  const value = {
    cartIsOpen, setCartIsOpen,
    cartItems, addItemToCart,
    numItems,
  }
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}