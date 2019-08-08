import React from 'react';

const AddToCart = (props) => {
  return (
    <div className="addtocartspan">
      <a onClick={(e) => {props.addToCartHandler(e, props.product)}} href="/">
        <span>Add{(props.inCart) ? " Another " : " "}To Cart</span>
        <span className="cart-arrow">
          <i className="fas fa-cart-plus"></i>
        </span>
      </a>
    </div>
  );
}

export default AddToCart;
