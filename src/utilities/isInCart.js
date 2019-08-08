const isInCart = (productName, cart) => {
  if (cart) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name == productName) {
        return true;
      }
    }
  }

  return false;
}

export default isInCart;
