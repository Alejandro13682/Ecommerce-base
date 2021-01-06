import React from "react";
import { ProductConsumer } from "../Context";

export default class ProductDetails extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { name, description, price } = value.detailProduct;
          return (
            <div className="main">
              <h2>{name}</h2>
              <h5>u$S {price}</h5>
              <span>{description}</span>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
