// SingleProduct.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_BASE_URL = 'https://hackofeast.onrender.com';

const SingleProduct = ({ handleAddToCart, cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/product/${id}`);
      setProduct(response.data.data);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
    }
  };

  const handleAddToCartClick = () => {
    handleAddToCart(product);
  };

  return (
    <div className="h-screen container my-auto mx-auto flex justify-center items-center ">
      {product ? (
        <div className="flex flex-col md:flex-row items-center m-3 bg-white shadow-lg rounded-lg p-6 md:p-8">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-64 h-64 object-cover mb-4 md:mb-0 md:mr-8 rounded-lg"
          />
          <div className="m-3 p-3">
            <h2 className="text-5xl font-bold py-4 px-6 m-2">{product.name}</h2>
            <p className="text-xl px-6 mb-4">Category: {product.category}</p>
            <p className="text-xl px-6 mb-4">Price: ${product.price}</p>
            <p className="text-lg px-6 mb-4">Description: {product.description}</p>
            {product.category === 'Food' && (
              <p className="text-lg px-6 mb-4">Weight: {product.weight}</p>
            )}
            {product.category === 'Object' && (
              <p className="text-lg px-6 mb-4">Color: {product.color}</p>
            )}
            <button
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-4"
              onClick={handleAddToCartClick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;