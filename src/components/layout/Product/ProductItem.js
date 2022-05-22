import {useDispatch} from 'react-redux'
import { cartAction } from '../../../store/cartSlice';

const ProductItem = ({ id, name, price, totalPrice, quantity }) => {
  const dispatch = useDispatch()

  const addItemToCartHandler =() => {
    dispatch(cartAction.addItemToCart({id}))
  }

  const removeItemToCartHandler = () => {
    dispatch(cartAction.removeItemToCart(id))
  }

  return (
    <li className="product-item">
      <div className="top">
        <h3>{name}</h3>
        <div className="price">
          <span className="total">${totalPrice.toFixed(2)}</span>
          <span className="price">(${price.toFixed(2)}/ item)</span>
        </div>
      </div>
      <div className="bottom">
        <span className="quantity">x{quantity}</span>
        <div className="buttons">
          <button onClick={removeItemToCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
