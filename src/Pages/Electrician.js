import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Fan Repair",
    description: "Installation or repair of ceiling fans",
    price: 199,
    image: "",
  },
  {
    id: 2,
    title: "Switch & Socket",
    description: "Installation or replacement of switches and sockets",
    price: 99,
    image: "",

  },
  {
    id: 3,
    title: "Inverter & Stabilizer",
    description: "Installation and troubleshooting",
    price: 299,
    image: "",
  },
];

const Electrician = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    if (!cart.find((item) => item.id === service.id)) {
      setCart([...cart, service]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Electrician Services</h1>

      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {/* Services List - LEFT */}
        <div className="flex-1 space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between"
            >
              <div className="flex items-start gap-4">
                <img src={service.image} alt={service.title} className="h-16 w-16 object-contain" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                  <p className="text-green-600 font-medium mt-1">₹{service.price} onwards</p>
                </div>
              </div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 text-sm"
                onClick={() => addToCart(service)}
              >
                Add
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary - RIGHT */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <div className="sticky top-24 bg-white rounded-xl shadow-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Cart</h2>

            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm">No services added yet.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="py-3 flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">{item.title}</h4>
                      <p className="text-green-600 text-xs mt-1">₹{item.price}</p>
                    </div>
                    <button
                      className="text-red-500 text-xs hover:underline"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {cart.length > 0 && (
              <div className="mt-5 border-t pt-4">
                <div className="flex justify-between text-sm font-medium text-gray-800">
                  <span>Total</span>
                  <span className="text-gray-900 font-bold">₹{cart.reduce((total, item) => total + item.price, 0)}</span>
                </div>
                <button
                  onClick={() => (window.location.href = "/checkout")}
                  className="mt-4 w-full bg-green-600 hover:bg-green-700 transition-colors duration-200 text-white text-sm py-2.5 rounded-full font-medium">
                  Proceed to Book
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Electrician;
