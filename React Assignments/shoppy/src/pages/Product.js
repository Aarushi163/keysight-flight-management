import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-details-container">
      {/* Left - Product Image */}
      <div className="product-images">
        <div className="main-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      {/* Right - Product Info */}
      <div className="product-info">
        {/* Title */}
        <h1>{product.title}</h1>

        {/* Static Rating Box */}
        <div className="rating-box">
          <div className="rating-score">4.0 Rating</div>
          <div className="rating-count">1,581 ratings</div>
          <div className="amazon-choice">Amazon's Choice</div>
          <div className="bought-count">1K+ bought in past month</div>
        </div>

        {/* Price */}
        <div className="price-section">
          <div className="limited-time-deal">Limited time deal</div>
          <div className="price">₹{product.price}</div>
          <div className="fulfilled-badge">Fulfilled Inclusive of all taxes</div>
        </div>

        {/* Add to Cart Button */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* Category */}
        <div className="product-category">
          <strong>Category:</strong> {product.category}
        </div>

        {/* Description */}
        <div className="product-description">
          <strong>Description:</strong>
          <p>{product.description}</p>
        </div>

        {/* Static delivery and warranty info */}
        <div className="static-info-box">
          <div>🛠 Service option available</div>
          <div>🛡 1 Year Warranty Care</div>
          <div>🔄 10 days Replacement</div>
          <div>🚚 Free Delivery</div>
          <div>🚛 Amazon Delivered</div>
          <div>📞 24/7 Support</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
