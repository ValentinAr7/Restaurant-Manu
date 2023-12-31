import { useContext, useState } from "react";
import Modal from "../UI Elements/Modal";
import styles from "./cart.module.css";
import CartContext from "../../store/cartContext";
import Payment from "./Payment";

const Cart = (props) => {
  const [paymentIsShown, setPaymentIsShown] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce((currentTotal, item) => {
    return currentTotal + parseFloat(item.price);
  }, 0);

  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={styles.cartList}>
      {cartCtx.items.map((item) => (
        <li className={styles.cartItem} key={item.id}>
          <span>{item.label}</span>
          <div className={styles.summary}>
            <span className={styles.price}>{item.price}</span>
            <button
              className={styles.removeItemBtn}
              onClick={() => cartCtx.removeItem(item.id)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  const orderHandler = () => {
    setPaymentIsShown(true);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.modalContent}>
        {cartItems}
        <div className={styles.total}>
          <span>Обща Сума</span>
          <span>{totalAmount.toFixed(2)}лв</span>
        </div>
        {paymentIsShown && <Payment />}

        <div className={styles.actions}>
          <button className={styles.buttonAlt} onClick={props.onClose}>
            Затвори
          </button>
          {hasItems && (
            <button className={styles.button} onClick={orderHandler}>
              Поръчай
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
