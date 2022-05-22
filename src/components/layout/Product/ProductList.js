import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const cartItems = useSelector(({ cart }) => cart.items);

  return (
    <section className="product-list">
      <h2>Your Shopping Cart</h2>
      <ul>
        {!cartItems.length && <p>Not found any product</p>}
        {cartItems.map((item) => (
          <ProductItem
          key={item.id}
            id={item.id}
            price={item.price}
            name={item.name}
            totalPrice={item.totalPrice}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
