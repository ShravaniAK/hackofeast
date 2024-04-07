// ProductList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://hackofeast.onrender.com';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/product/`);
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product._id} className="bg-white flex shadow-md">
            <Link to={`/product/${product._id}`} className="block flex">
              <div className="aspect-w-1 aspect-h-1" style={{width:'150px', height:'150px'}}>
                <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <div className="text-xl">{product.name}</div>
                <div>{product.description}</div>
                {/* <div className="text-xs">Quantity present : {product.quantity}</div> */}
                {/* <div className="text-xs">{product.category}</div> */}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
