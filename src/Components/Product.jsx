import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

//Product is a simple box which contains product's img, name, price and a 'add to cart' button

export default class Product extends React.Component {
  render() {
    const { id, name, price, description, inCart, img } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => (
          <div className="store-item">
            <div>
              <Link to="/prod-info">{name}</Link>
            </div>
            <div onClick={() => value.handleDetail(id)}>
              <Link to="/prod-info">
                <img src={img} alt="pic" />
              </Link>
            </div>
            <div>$ {price}</div>
            <div>Details: {description}</div>
            <button
              onClick={() => value.addToCart(id)}
              disabled={inCart === true ? true : false}
            >
              Add to cart
            </button>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
