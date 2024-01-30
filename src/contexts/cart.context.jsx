import { createContext, useReducer } from "react";

import {createAction} from "../utils/reducer/reducer.utils.js";
const addCartItem = (cartItems, productToAdd) => {
  const existingProduct = cartItems.findIndex((c) => c.id === productToAdd.id);
  if (existingProduct >= 0) {
    cartItems[existingProduct].quantity += 1;
    return [...cartItems];
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

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

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`Unhandled type ${type}`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

// as the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [], // { name: '', quantity: ''}
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems,
      cartTotal: newCartTotal,
      cartCount: newCartCount,
    }));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (productToRemove, removeWholeProduct) => {
    const newCartItems = removeCartItem(
      cartItems,
      productToRemove,
      removeWholeProduct
    );
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
