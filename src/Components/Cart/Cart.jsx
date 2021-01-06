import React from "react";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends React.Component {
  render() {
    return (
      <div className="main">
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <h1>Your cart</h1>
                  <CartList value={value} />
                  <CartTotals value={value} />
                </>
              );
            } else {
              return (
                <div className="main">
                  <h1>The cart is empty</h1>
                  <span>Back to store</span>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Cart;
