import Header from "./components/layout/header/Header";
import ProductMenu from "./components/layout/menu/ProductMenu";
import Notification from "./components/layout/notification/Notification";
import ProductList from "./components/layout/Product/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cartAction";
import { useEffect, useLayoutEffect } from "react";

const App = () => {
  const isShowCart = useSelector(({ ui }) => ui.isShowCart);
  const notification = useSelector(({ ui }) => ui.notification);
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useLayoutEffect(()=> {
    dispatch(fetchCartData())
  }, [dispatch])

    useEffect(()=> {
      if(cart.changed) {
        dispatch(sendCartData(cart))
      }
  }, [cart, dispatch])

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Header title={"ReduxCart"} />
      {isShowCart && <ProductList />}
      <ProductMenu />
    </>
  );
};
export default App;
