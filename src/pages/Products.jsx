import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import "./Products.css";

export default function Products() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="products-page">
      <h2 className="gallery-title"> Product Gallery</h2>

    
      <div className="filter-bar">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

    
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">
              <strong>Price starting from: UGX {product.price}</strong>
            </p>
            <p className="product-category">{product.category}</p>

           
            <div className="product-images">
              {(selectedCategory === "All"
                ? [product.images[0]]
                : product.images
              ).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  onClick={() => setLightboxImage(img)}
                  className="product-thumbnail"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

  {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Full size" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}
