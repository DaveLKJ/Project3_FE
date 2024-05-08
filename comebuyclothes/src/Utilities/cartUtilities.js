export const addToCart = (cart, clothes) => {
    const existingItem = cart.find((item) => item.id === clothes.id);
    if (existingItem) {
      existingItem.quantity = Number(existingItem.quantity) + 1;
      return [...cart];
    } else {
      return [...cart, {...clothes, quantity: 1 }];
    }
  };
  
  export const updateCart = (cart, updatedCart) => {
    return updatedCart;
  };
  
  export const removeFromCart = (cart, product) => {
    return cart.filter((item) => item.id!== product.id);
  };