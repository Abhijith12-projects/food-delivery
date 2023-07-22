import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const showCartHander = () => {
    setCartIsShown(true);
  };

  const hideCartHander = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHander} />}
      <Header onShowCart={showCartHander} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
