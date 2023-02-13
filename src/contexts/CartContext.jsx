import { createContext, useState, useEffect } from "react";

const addNewItemToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1 } :
        {...cartItem }
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]

}

const removeOldItemFromCart = (cartItems, productToRemove) => {
  if (productToRemove.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id != productToRemove.id)
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id == productToRemove.id) {
      return {...cartItem, quantity: cartItem.quantity - 1}
    }
    return cartItem;
  })
}

const _removeAllOfItemFromCart = (cartItems, productToRemove) => {
  return cartItems.filter(cartItem => cartItem.id != productToRemove.id)
}

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeAllOfItemFromCart: () => {},
  numItems: 0,
  setNumItems: () => {},
  cartTotalPrice: 0,
  setCartTotalPrice: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [numItems, setNumItems] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  // onChange count items
  useEffect(() => {
    const newItemCount = cartItems.reduce((total, cartItem) => cartItem.quantity + total, 0);
    setNumItems(newItemCount);
  }, [cartItems])

  // onChange calc total price
  useEffect(() => {
    const totalPrice = cartItems.reduce((total, cartItem) => cartItem.quantity * cartItem.price + total, 0);
    setCartTotalPrice(totalPrice);
  }, [cartItems])

  const addItemToCart = (product) => {
    setCartItems(addNewItemToCart(cartItems, product));
  }

  const removeItemFromCart = (product) => {
    setCartItems(removeOldItemFromCart(cartItems, product) || cartItems);
  }

  const removeAllOfItemFromCart = (product) => {
    setCartItems(_removeAllOfItemFromCart(cartItems, product));
  }

  const value = {
    cartIsOpen, setCartIsOpen,
    cartItems, addItemToCart, removeItemFromCart, removeAllOfItemFromCart,
    numItems,
    cartTotalPrice,
  }
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}