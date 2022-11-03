import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      {/* close button baskanda false bolot jabylyp kalat modalka */}
      <Header onShowCart={showCartHandler} />
      {/* youcart buttondy baskanda setCartIsShown true bolot modalka chygat */}
      <Meals />
    </CartProvider>
  );
}

export default App;
