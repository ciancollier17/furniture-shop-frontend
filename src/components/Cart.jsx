import React, {Component} from 'react';
import CartItem from './CartItem.jsx';

class Cart extends Component {
  constructor (props) {
    super(props);
  }

  getTotalCost = () => {
    let {cart, cartquant} = this.props;
    let total = 0.00;

    for (let i = 0; i < cart.length; i++) {
      total += parseFloat(cart[i].price * cartquant[i]);
    }

    return total.toFixed(2);
  }

  render () {
    return (
      <div id="cart" className={(this.props.visibility) ? "expanded" : ""}>
        <div id="cart-contents">
          {this.props.cart.map((item, index) => {
            return (<CartItem product={item} quantity={this.props.cartquant[index]} addToCartHandler={(e) => {this.props.addToCartHandler(e, item)}} removeFromCartHandler={() => {this.props.removeFromCartHandler(index)}} />);
          })}
        </div>
        <div id="cart-footer">
          <strong>Total: &#65505;{this.getTotalCost()}</strong>
          <button>Checkout</button>
        </div>
      </div>
    );
  }
}

export default Cart;
