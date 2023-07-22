import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const CartItems = (
    <ul>
      {[{ id: "c1", name: "birayni", amoun: 20, price: 299 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>266</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
