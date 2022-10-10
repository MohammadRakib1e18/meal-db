// use local storage to manage cart data

const addToDb = (id) => {
  let shoppingCart;

  // get the shopping cart from the local storage
  shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (!shoppingCart) shoppingCart = {};

  // add quantity
  let quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export { addToDb, removeFromDb, deleteShoppingCart };
