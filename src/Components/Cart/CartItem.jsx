import React from "react";

export default function CartItem({ item, value }) {
  const { id, name, price, count, total } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="cart-item">
      <img src="https://via.placeholder.com/60" alt="pic" />
      <span>{name}</span>
      <span>Precio unit.U$S {price}</span>
      <span>
        <button onClick={() => removeItem(id)}>rmv</button>
      </span>
      <span className="counter">
        <button onClick={() => decrement(id)}>-</button>
        <span>{count}</span>
        <button onClick={() => increment(id)}>+</button>
      </span>
      <span>Importe $ {total}</span>
    </div>
  );
}
