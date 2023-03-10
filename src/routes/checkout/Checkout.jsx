import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import './checkout.scss'

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext)

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} /> )}
      
      <div className="checkout-total">
        TOTAL: ${cartTotalPrice}
      </div>
    </div>
  )
}

export default Checkout;