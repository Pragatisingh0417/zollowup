import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [bookedServices, setBookedServices] = useState(new Set());

  useEffect(() => {
    const savedCart = localStorage.getItem("maidCart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      setBookedServices(new Set(parsedCart.map(item => item.title)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("maidCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (plan) => {
    if (!bookedServices.has(plan.title)) {
      setCart([...cart, { ...plan, quantity: 1 }]);
      setBookedServices(prev => new Set(prev).add(plan.title));
    }
  };

  const removeFromCart = (index) => {
    const itemToRemove = cart[index];
    const updatedCart = cart.filter((_, i) => i !== index);
    const updatedBooked = new Set(bookedServices);
    updatedBooked.delete(itemToRemove.title);
    setCart(updatedCart);
    setBookedServices(updatedBooked);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const getTotal = () =>
    cart.reduce((acc, item) => acc + parseInt(item.price.replace("₹", "")) * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotal,
        bookedServices
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);