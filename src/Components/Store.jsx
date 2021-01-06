import React from "react";
import { ProductConsumer } from "../Context";
import Product from "./Product";

//Store is responsible for showing a list of products

export default function Store() {
  return (
    <div className="main">
      <div className="page-title">
        <h1>Store</h1>
      </div>
      <ProductConsumer>
        {(value) => {
          return value.products.map((product) => {
            return <Product key={product.id} product={product} />;
          });
        }}
      </ProductConsumer>
    </div>
  );
}
