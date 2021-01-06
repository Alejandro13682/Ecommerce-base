import React from "react";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartTax, cartTotal } = value;
  return (
    <div>
      <div>Subtotal: U$S {cartSubtotal}</div>
      <div>Tax: U$S {cartTax}</div>
      <div>Total: U$S {cartTotal}</div>
    </div>
  );
}
