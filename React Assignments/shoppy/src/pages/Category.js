import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/Productcard";

function Category() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(name).then(setProducts);
  }, [name]);

  const getTitle = () => {
    if (name === "men's clothing") return "Men's Clothing";
    if (name === "women's clothing") return "Women's Clothing";
    if (name === "electronics") return "Electronics";
    return name;
  };

  return (
    <>
      <Navbar />

      <main className="category-page">
        <h2 className="category-title">{getTitle()}</h2>

        <section className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Category;
