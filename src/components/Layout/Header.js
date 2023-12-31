import React from "react";
import mealsImage from "../../assets/meals (1).jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals Lelo</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A bag full of delicious food" />
      </div>
    </React.Fragment>
  );
};
export default Header;
