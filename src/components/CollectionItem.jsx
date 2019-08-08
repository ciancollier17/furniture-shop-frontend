import React from 'react';
import AddToCart from './AddToCart.jsx';
import isInCart from '../utilities/isInCart';

const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <img src={"Img/" + props.product.name + ".jpg"} alt={props.product.name} />
      <h1>&#65505;{props.product.price}</h1>
      <h2>{props.product.name}</h2>
      <p>{props.product.description}</p>
      <AddToCart addToCartHandler={props.addToCartHandler} product={props.product} inCart={isInCart(props.product.name, props.cart)} />
    </div>
  );
}

export default CollectionItem;
