import { useState } from "react";

import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product";

import { DUMMY_PRODUCTS } from "./dummy-products.js";
import { CartContext } from "./store/shopping-cart-context";
import CartContextProider from "./store/shopping-cart-context";

function App() {
  return (
    <CartContextProider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProider>
  );
}

export default App;
