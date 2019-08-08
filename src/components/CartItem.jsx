import React from 'react';

const CartItem = (props) => {
  return (
    <div class="cart-item">
      <img src={"Img/" + props.product.name + ".jpg"} />
      <div className="cart-item-text">
        <h3>&#65505;{props.product.price}</h3>
        <h4>{props.product.name}</h4>
        <span className="cart-quantity">
          <button className="quantity-minus" onClick={props.removeFromCartHandler}>-</button>
          <strong>{props.quantity}</strong>
          <button className="quantity-plus" onClick={props.addToCartHandler}>+</button>
        </span>
      </div>
    </div>
  );
}

export default CartItem;
