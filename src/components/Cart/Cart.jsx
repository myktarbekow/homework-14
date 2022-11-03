import React, { useContext } from "react";
import Modal from "../UI/Modal";
import styles from './Cart.module.css'
import CartContext from "./../../store/cart-context";
import CardItem from "./CardItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`  /// .dan кийин 2 san bolsun

  const cartItemRemoveHandler = (id) => {
    console.log(id,'idiiid');
    cartCtx.removeItem(id)  //butondy baskanda id alyp removeItemge beret
  };

  const cartItemAddHandler = (item) => {
    console.log(item);
    cartCtx.addItem(item)  // object berip atat
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CardItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler}
            onAdd={cartItemAddHandler}
            item={item}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Price</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}> 
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
