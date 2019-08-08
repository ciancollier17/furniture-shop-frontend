import React, {Component} from 'react';

class Navigation extends Component {
  constructor (props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  expandNavbar = (e) => {
    e.preventDefault();
    this.setState({expanded: !this.state.expanded});
  }

  calculateCartQuants = (cart_quant) => {
    let sum = 0;

    for (let i = 0; i < cart_quant.length; i++) {
      sum += cart_quant[i];
    }

    return sum;
  }

  render () {
    return (
      <header className={(this.state.expanded) ? 'expanded' : ''} id="navigation">
        <strong>Brand</strong>
        <ul className="menu">
          <li><a href="#collections">Collections</a></li>
          <li><a href="#furniture">Furniture</a></li>
          <li><a href="#blog">Blog</a></li>
          <li>Contact</li>
        </ul>
        <ul className="cart">
          <li><a href="/" onClick={this.props.toggleCartVisibility}>Cart({this.calculateCartQuants(this.props.cartquant)})</a></li>
          <li><i className="fas fa-search"></i>
          <a id="expander" href="/" onClick={(e) => {this.expandNavbar(e)}}><i id="hamburger" className={(this.state.expanded) ? "fas fa-times" : "fas fa-bars"}></i></a></li>
        </ul>
      </header>
    );
  }
}

export default Navigation;
