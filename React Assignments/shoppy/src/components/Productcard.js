import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h4>
          {product.title.length > 55
            ? product.title.slice(0, 55) + "..."
            : product.title}
        </h4>

        <p className="price">₹{product.price}</p>

        <Link to={`/product/${product.id}`} className="details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
