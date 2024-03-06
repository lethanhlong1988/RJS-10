import { createContext, useState, useReducer } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  const updatedItems = [...state.items];
  switch (action.type) {
    case "ADD_ITEM":
      // const updatedItems = [...state.items];
      const existinCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload,
      );
      const existingCartItem = updatedItems[existinCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existinCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(
          (product) => product.id === action.payload,
        );
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }
      return {
        items: updatedItems,
      };
      break;

    case "UPDATE_ITEM":
      // const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId,
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };
      updatedItem.quantity += action.payload.amount;
      console.log(updatedItem.quantity);
      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
      };
      break;

    default:
      break;
  }

  return items;
}

export default function CartContextProider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });
  const [shoppingCartState, shoppingCartDishpatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    },
  );

  function handleOnAddItemToCart(id) {
    // setShoppingCart((prevShoppingCart) => {});
    shoppingCartDishpatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDishpatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });

    setShoppingCart((prevShoppingCart) => {});
  }

  const ctxValue = {
    // items: shoppingCart.items,
    items: shoppingCartState.items,
    addItemToCart: handleOnAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
