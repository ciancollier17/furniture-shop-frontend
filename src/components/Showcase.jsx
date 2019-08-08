import React from 'react';
import AddToCart from './AddToCart.jsx';
import isInCart from '../utilities/isInCart';

const Showcase = (props) => {
  return (
    <main id="showcase" className={(props.transitioning) ? "showcase-transitioning" : ""}>
      <div id="description-main">
        <h1>&#65505;{props.product.price}</h1>
        <h2>{props.product.name}</h2>
        <p>{props.product.description}</p>
        <AddToCart addToCartHandler={props.addToCartHandler} product={props.product} inCart={isInCart(props.product.name, props.cart)} />
      </div>
      <div id="product-image-main" style={{background: "url('Img/" + props.product.name + ".jpg') center / cover no-repeat"}}>
      </div>
    </main>
  );
}

export default Showcase;
