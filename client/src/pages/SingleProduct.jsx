import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_BASE_URL = 'https://teentekde-1.onrender.com';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/product/${id}`);
      setProduct(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
    }
  };

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const existingCartItem = cart.find((item) => item._id === product._id);

    if (existingCartItem) {
      // If the product is already in the cart, update the quantity
      const updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <img src={product.imageUrl} alt={product.name} />
          {product.category === 'Food' && <p>Weight: {product.weight}</p>}
          {product.category === 'Object' && <p>Color: {product.color}</p>}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;