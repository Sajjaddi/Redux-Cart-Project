import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../../store/uiSlice";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cart = useSelector((state) => state.cart);

  const toggleHandler = () => {
    dispatch(uiAction.toggleShow());
  };

  useEffect(() => {
    if (cart.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => setBtnIsHighlighted(false), 300);
    return () => clearTimeout(timer);
  }, [cart.items]);

  return (
    <header>
      <h1>{title}</h1>
      <div
        className={`cart ${btnIsHighlighted ? "bump" : ""}`}
        onClick={toggleHandler}
      >
        <span>My Cart</span>
        <span>{cart.totalQuantity}</span>
      </div>
    </header>
  );
};

export default Header;
