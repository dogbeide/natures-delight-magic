import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import './cart-dropdown.scss'

const CartDropdown = () => {
  const { cartItems, setCartIsOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setCartIsOpen(false);
  }
  
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;