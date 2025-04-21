import React from "react";
import { useCart } from "../components/CartContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CheckoutPage = () => {
  const {
    cart,
    removeFromCart,
    getTotal,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const handleRemove = (index) => {
    removeFromCart(index);
    toast.info("Item removed from cart");
  };

  //increase 

  const handleIncrease = (index) => {
    increaseQuantity(index);
    toast.success("Increased quantity");
  };

  //decrease 
  const handleDecrease = (index) => {
    const item = cart[index];
    if (item.quantity === 1) {
      removeFromCart(index);
      toast.info("Item removed from cart");
    } else {
      decreaseQuantity(index);
      toast.warn("Decreased quantity");
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto p-6">
      <ToastContainer position="top-right" autoClose={1500} />
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => {
            const numericPrice = parseInt(item.price.replace("₹", ""));
            const subtotal = numericPrice * item.quantity;

            return (
              <div
                key={index}
                className="border p-4 rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">Price: {item.price}</p>

                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => handleDecrease(index)}
                      className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(index)}
                      className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-sm text-gray-700 mt-2">
                    Subtotal: ₹{subtotal}
                  </p>
                </div>

                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            );
          })}

          <div className="pt-4 mt-6 border-t flex justify-between items-center font-semibold text-lg">
            <span>Total:</span>
            <span>₹{getTotal()}</span>
          </div>

          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;