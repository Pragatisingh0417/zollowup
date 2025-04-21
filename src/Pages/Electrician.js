import React from 'react';
import { useCart } from '../components/CartContext';

const services = [
  {
    id: 1,
    title: 'Fan Repair',
    description: 'Installation or repair of ceiling fans',
    price: '₹199',
    image: '', // You can add a default image below
  },
  {
    id: 2,
    title: 'Switch & Socket',
    description: 'Installation or replacement of switches and sockets',
    price: '₹99',
    image: '',
  },
  {
    id: 3,
    title: 'Inverter & Stabilizer',
    description: 'Installation and troubleshooting',
    price: '₹299',
    image: '',
  },
  {
    id: 4,
    title: 'Inverter & Stabilizer',
    description: 'Installation and troubleshooting',
    price: '₹299',
    image: '',
  },
  {
    id: 5,
    title: 'Inverter & Stabilizer',
    description: 'Installation and troubleshooting',
    price: '₹299',
    image: '',
  },
  {
    id: 6,
    title: 'Inverter & Stabilizer',
    description: 'Installation and troubleshooting',
    price: '₹299',
    image: '',
  },
];

const Electrician = () => {
  const { cart, addToCart } = useCart();

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
      Electrician Services - Our Pricing
    </h1>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {services.map((service) => (
        <div key={service.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <img
              src={service.image || 'https://via.placeholder.com/80x80?text=Service'}
              alt={service.title}
              className="h-20 w-20 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{service.description}</p>
            <p className="text-green-600 font-medium mt-2">{service.price} onwards</p>
          </div>
          {isInCart(service.id) ? (
            <button
              disabled
              className="mt-6 bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm cursor-not-allowed"
            >
              Added
            </button>
          ) : (
            <button
              onClick={() => addToCart(service)}
              className="mt-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600"
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Electrician;
