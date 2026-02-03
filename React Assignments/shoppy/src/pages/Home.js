import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Smart Shopping Starts Here</h1>
          <p>
            Discover quality products across electronics and fashion,
            carefully curated to deliver value, reliability, and a
            seamless online shopping experience.
          </p>
          <Link to="/category/electronics" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="home-about">
        <h2>Why Choose Shoppy?</h2>
        <p>
          Shoppy is a modern e-commerce platform built with a focus on
          simplicity, performance, and usability. The platform allows
          users to explore products by category, view detailed product
          information, and manage their shopping cart effortlessly.
        </p>
        <p>
          Designed using React and real-time API data, Shoppy demonstrates
          scalable front-end architecture and clean UI principles inspired
          by leading global marketplaces.
        </p>
      </section>

      {/* Categories Section */}
      <section className="home-categories">
        <h2>Shop by Category</h2>

        <div className="category-cards">
          <Link to="/category/electronics" className="category-card">
            <h3>Electronics</h3>
            <p>Latest gadgets and smart devices</p>
          </Link>

          <Link to="/category/men's clothing" className="category-card">
            <h3>Men’s Clothing</h3>
            <p>Modern styles for everyday wear</p>
          </Link>

          <Link to="/category/women's clothing" className="category-card">
            <h3>Women’s Clothing</h3>
            <p>Comfortable and elegant fashion</p>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
