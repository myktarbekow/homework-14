import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
        {/* propstan kelgen function ny HeaderCartButton ga berdik */}
        {/* <button>Cart</button> */}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;
