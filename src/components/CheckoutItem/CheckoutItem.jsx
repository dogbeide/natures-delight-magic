import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './checkout-item.scss'

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, removeAllOfItemFromCart } = useContext(CartContext);

  const incrementItems = () => addItemToCart(cartItem);
  const decrementItems = () => removeItemFromCart(cartItem);
  const removeAllOfThisItem = () => removeAllOfItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={decrementItems}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={incrementItems} >&#10095;</span>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={removeAllOfThisItem}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;