import { useRef, useContext } from "react";

import CartModal from "./CartModal";
import ParentComponent from "./ParentComponent";
import { CartContext } from "../store/shopping-cart-context";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      {/* <ParentComponent /> */}
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />

      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant-model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button className="glow-button" onClick={handleOpenCartClick}>
            Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </>
  );
}
