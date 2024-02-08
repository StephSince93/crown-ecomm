import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const existingProduct = cartItems.findIndex((c) => c.id === productToAdd.id);
    if (existingProduct >= 0) {
      cartItems[existingProduct].quantity += 1;
      return [...cartItems];
    } else {
      return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
  };
  // Removes single and whole cart items
  const removeCartItem = (
    cartItems,
    productToRemove,
    removeWholeProduct = false
  ) => {
    const item = cartItems.find((item) => item.id === productToRemove.id);
    if (item.quantity === 1 || removeWholeProduct) {
      return cartItems.filter((item) => item.id !== productToRemove.id);
    } else {
      return cartItems.map((item) =>
        item.id === productToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
  };

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    console.log('NEW', newCartItems)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };

export const removeItemFromCart = (cartItems, productToRemove, removeWholeProduct = false) => {
    const newCartItems = removeCartItem(
      cartItems,
      productToRemove,
      removeWholeProduct
    );
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

  };

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
