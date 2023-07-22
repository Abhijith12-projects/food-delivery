import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const showCartHander = () => {
    setCartIsShown(true);
  };

  const hideCartHander = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHander} />}
      <Header onShowCart={showCartHander} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
