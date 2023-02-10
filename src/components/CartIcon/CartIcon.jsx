import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.scss'

const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen } = useContext(CartContext)

  const toggleCartDropdown = () => setCartIsOpen(!cartIsOpen)

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;