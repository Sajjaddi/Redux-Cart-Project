import { cartAction } from "./cartSlice";
import { uiAction } from "./uiSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-cart-87fd0-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        console.log(response);
        throw new Error("Could not fetch cart data!");
      }
      return await response.json();
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          message: "Fetching cart data failed!",
          title: "Error!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        message: "Please wait...",
        title: "pending",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-cart-87fd0-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiAction.showNotification({
          status: "success",
          message: "Sent cart data successfully!",
          title: "Success!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          message: "Sending cart data failed.",
          title: "Error!",
        })
      );
    }
  };
};
