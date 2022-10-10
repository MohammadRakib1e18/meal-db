// use local storage to manage cart data

const addToDb = (id, name) => {
  let shoppingCart;

  // get the shopping cart from the local storage
  shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (!shoppingCart) shoppingCart = {};

  // add quantity
  let data = shoppingCart[id];
  if (data) {
    const newQuantity = data[0] + 1;
    const newData = [newQuantity, data[1]];
    shoppingCart[id] = (newData);
  } else {
    shoppingCart[id] = [1, name];
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
