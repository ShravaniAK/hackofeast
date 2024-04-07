// CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, handleCheckout }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item._id} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-600">
                    Price: ${item.price} x {item.quantity}
                  </p>
                </div>
                <p className="font-bold text-lg">${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="font-bold text-2xl">Total: ${totalPrice}</p>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      <div className="mt-8">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;