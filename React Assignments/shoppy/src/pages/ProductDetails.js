import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  // For Amazon-style thumbnails, we can fake 4 identical images
  const thumbnails = Array(4).fill(product.image);

  return (
    <>
      <Navbar />
      <main className="product-details-page">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link to="/">Home</Link> / <Link to={`/category/${product.category}`}>{product.category}</Link> / <span>{product.title}</span>
        </div>

        <div className="product-details-container">
          {/* Left: Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="thumbnail-images">
              {thumbnails.map((img, i) => (
                <img key={i} src={img} alt={`Thumbnail ${i}`} />
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="product-info">
            <h1>{product.title}</h1>
            <p className="product-category">Category: <span>{product.category}</span></p>
            <p className="product-price">₹{product.price}</p>
            {product.rating && (
              <p className="product-rating">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
            )}

            <div className="quantity-addcart">
              <label>
                Qty:
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </label>
              <button className="add-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
              <button className="buy-now-btn">Buy Now</button>
            </div>

            <div className="product-description">
              <h3>Product Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="delivery-info">
              <h4>Delivery & Seller Info</h4>
              <p>Delivered by: <strong>Shoppy Express</strong></p>
              <p>Free delivery on orders above ₹500</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductDetails;
