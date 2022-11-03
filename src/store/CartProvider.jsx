import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {  /// reducer function state, action параметр алат
  switch (action.type) {
    case "ADD": {
      /// action.type  === ADD барабар болсо

      const updatedTotalAmount = state.totalAmount + action.item.price; /// totalAmount: <= totalAmount: 0 + price: 22.99 *******

      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.item.id; // itemdegi idini alyp biz kaisy object bassak oshonun id alyp salyshtyryp existingCartItemIndex ge beret
      });
      const existingCartItem = state.items[existingCartItemIndex]; // existingCartItem ge indexi mn salyp beret
      let updatedItems; 

      if (existingCartItem) {
        // если existingCartItem бар болсо

        const updatedItem = {
          ...existingCartItem, // existingCartItem rest кылып
          amount: existingCartItem.amount + 1, // amount ka indexi mn +1 kyl je kaisyny bassak oshonun amounttun +1 kosh
        };
        updatedItems = [...state.items]; // items di чогултуп updatedItems ке сактадык
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item); 
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.id // findIndex mn salyshtyrdyk id lerdi
      })
      const existingItem = state.items[existingCartItemIndex] 

      const updatedTotalAmount = state.totalAmount - existingItem.price
      let updatedItems;
      if(existingItem.amount === 1){
        updatedItems = state.items.filter((item) => item.id !== action.id)
      }else{
        const updatedItem = {
          ...existingItem ,
          amount: existingItem.amount - 1
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {  // - button baskanda id alat
    dispatch({type: "REMOVE", id: id}) /// dispatch mn reducer berdik type mn id
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
