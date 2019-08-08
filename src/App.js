import React, {Component} from 'react';
import Navigation from './components/Navigation.jsx';
import Showcase from './components/Showcase.jsx';
import Footer from './components/Footer.jsx';
import Section from './components/Section.jsx';
import Collection from './components/Collection.jsx';
import CollectionItem from './components/CollectionItem.jsx';
import BlogPost from './components/BlogPost.jsx';
import Cart from './components/Cart.jsx';
import $ from 'jquery';

class App extends Component {
  constructor () {
    super();

    // Load any cart items in the session storage.
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    let cart_quant = JSON.parse(sessionStorage.getItem('cart_quant'));

    this.state = {
      cart: (cart) ? cart : [],
      cart_quant: (cart_quant) ? cart_quant : [],
      cart_visibility: false,
      showcase_items: [{name: "Armchair", price: "110.50", description: "A classicly designed armchair made from italian leather. This will add character to any room and provide a comfortable place to sit."},
              {name: "Corner Sofa", price: "329.99", description: "Add a modern feel to your home with this sheek corner sofa. One of our most popular products especially amongst the younger generation."},
              {name: "Coffee Table", price: "89.99", description: "A solid mahogany table which gives off a highly cultured vibe."}],
      current_showcase_item: 0,
      showcase_transitioning: false
    }
  }

  componentDidMount() {
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
      );
    });
  }

  updateCart = (new_cart, new_quant) => {
    sessionStorage.setItem('cart', JSON.stringify(new_cart));
    sessionStorage.setItem('cart_quant', JSON.stringify(new_quant));
    this.setState({cart: new_cart});
    this.setState({cart_quant: new_quant});
  }

  addToCart = (e, item) => {
    e.preventDefault();

    let cart = [...this.state.cart];
    let cart_quant = [...this.state.cart_quant];

    if (cart) {
      let found = false;

      for (let i = 0; i < cart.length; i++) {
        if (item.name == cart[i].name) {
          cart_quant[i]++;
          found = true;
          break;
        }
      }

      if (!found) {
        cart.push(item);
        cart_quant.push(1);
      }
    } else {
      cart = [item];
      cart_quant = [1];
    }

    this.updateCart(cart, cart_quant);
  }

  removeFromCart = (index) => {
    let new_cart = [...this.state.cart];
    let new_quant = [...this.state.cart_quant];

    if (new_quant[index] == 1) {
      new_cart.splice(index, 1);
      new_quant.splice(index, 1);
    } else {
      new_quant[index] -= 1;
    }

    this.updateCart(new_cart, new_quant);
  }

  updateShowcase = (nextOrPrev) => {
    this.setState({showcase_transitioning: true});

    // Delay changing of the current showcase item until fade out animation has finished.
    setTimeout(() => {
      // If nextOrPrev == 0 then go to previous showcase item
      // If nextOrPrev == 1 then go to the next showcase item
      switch (nextOrPrev) {
        case 0:
          if (this.state.current_showcase_item == 0) {
            this.setState({current_showcase_item: this.state.showcase_items.length - 1});
          } else {
            this.setState({current_showcase_item: this.state.current_showcase_item - 1});
          }
          break;
        case 1:
          if (this.state.current_showcase_item == (this.state.showcase_items.length - 1)) {
            this.setState({current_showcase_item: 0});
          } else {
            this.setState({current_showcase_item: this.state.current_showcase_item + 1});
          }
          break;
        default:
          console.log("ERROR: nextOrPrev != 0 or 1");
          break;
      }

      this.setState({showcase_transitioning: false});
    }, 800);
  }

  render () {
    return (
      <React.Fragment>
        <Navigation cartquant={this.state.cart_quant} toggleCartVisibility={(e) => {e.preventDefault(); this.setState({cart_visibility: !this.state.cart_visibility})}} />
        <Cart cart={this.state.cart} cartquant={this.state.cart_quant} visibility={this.state.cart_visibility} addToCartHandler={this.addToCart} removeFromCartHandler={this.removeFromCart} />
        <Showcase transitioning={this.state.showcase_transitioning} cart={this.state.cart} addToCartHandler={this.addToCart} product={this.state.showcase_items[this.state.current_showcase_item]} />
        <Footer showcaseUpdateHandler={this.updateShowcase} />
        <Section sectionID="collections" sectionTitle="Winter Collection">
          <Collection>
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Armchair", price: "110.50", description: "A classicly designed armchair made from italian leather. This will add character to any room and provide a comfortable place to sit."}} />
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Corner Sofa", price: "329.99", description: "Add a modern feel to your home with this sheek corner sofa. One of our most popular products especially amongst the younger generation."}} />
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Coffee Table", price: "89.99", description: "A solid mahogany table which gives off a highly cultured vibe."}} />
          </Collection>
        </Section>
        <Section sectionID="summerCollection" sectionTitle="Summer Collection">
          <Collection>
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Log Table", price: "250.00", description: "A table made of sustainably sourced, recycled wood. Chemically treated to ensure a long life and durability in all weather conditions."}} />
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Outdoor Chair Set", price: "150.00", description: "A set of 4 wooden, outdoor rocking chairs. Treated for durability in all weather conditions and for a long life. One of our most popular products!"}} />
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Deck Chair", price: "45.99", description: "A simple but classic design that will remind you af previous summer holidays while you relax in the sun."}} />
          </Collection>
        </Section>
        <Section sectionID="furniture" sectionTitle="Furniture">
          <Collection>
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Armchair", price: "110.50", description: "A classicly designed armchair made from italian leather. This will add character to any room and provide a comfortable place to sit."}} />
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Corner Sofa", price: "329.99", description: "Add a modern feel to your home with this sheek corner sofa. One of our most popular products especially amongst the younger generation."}} />
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Coffee Table", price: "89.99", description: "A solid mahogany table which gives off a highly cultured vibe."}} />
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Log Table", price: "250.00", description: "A table made of sustainably sourced, recycled wood. Chemically treated to ensure a long life and durability in all weather conditions."}} />
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Outdoor Chair Set", price: "150.00", description: "A set of 4 wooden, outdoor rocking chairs. Treated for durability in all weather conditions and for a long life. One of our most popular products!"}} />
            <CollectionItem cart={this.state.cart} addToCartHandler={this.addToCart} product={{name: "Deck Chair", price: "45.99", description: "A simple but classic design that will remind you af previous summer holidays while you relax in the sun."}} />
          </Collection>
        </Section>
        <Section sectionID="blog" sectionTitle="Blog">
          <BlogPost postTitle="How Has Furniture Design Changed Over the Past Couple of Decades?" postDate="26th July 2019">
            <img src="Img/Blog Post 1.jpg" alt="Living Room Furniture" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus convallis erat in elementum. Duis condimentum tempor tellus. Praesent tincidunt nisi a lorem ullamcorper placerat. Etiam vel enim sit amet orci gravida mollis id et magna. Aliquam erat volutpat. Praesent a ligula molestie, interdum mi eget, cursus nunc. Vivamus dapibus vestibulum placerat. Sed id auctor massa. Aenean eu quam et nisl finibus consequat eu id diam. Quisque sit amet posuere odio. Vestibulum gravida  magna libero, quis porta augue porta et. Nullam malesuada mi vitae sapien vehicula fringilla. Integer ullamcorper arcu odio, pharetra aliquam ligula hendrerit in. Sed mollis, elit ac congue dictum, ante ipsum feugiat mi, sed varius risus enim id lorem. Aliquam eu ex pellentesque, finibus leo ut, euismod sem. Pellentesque id justo elit.</p>
            <p>Curabitur vitae turpis eros. Nam dignissim facilisis euismod. Sed tristique erat quis purus viverra, et pellentesque odio tempus. Suspendisse efficitur, nibh vel pretium pulvinar, augue tortor scelerisque magna, a blandit ante mauris eu felis. Curabitur sed nisl ut lorem ornare tempor. Integer ut ornare elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ante ornare, mattis massa a, iaculis lacus. Nam nisi magna, finibus sed ultrices consectetur, semper id   nisl. Nulla facilisi. In hac habitasse platea dictumst. Donec luctus bibendum neque sed consequat. Proin facilisis rhoncus pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
          </BlogPost>
        </Section>
      </React.Fragment>
    );
  }
}

export default App;
