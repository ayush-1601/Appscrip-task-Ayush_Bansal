import { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";
import "../styles/home.css";

function Home() {
  const [showFilter, setShowFilter] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div style={{width: '100%'}}>
      <div className="home-bar">
        <div className="home-bar-left">
          <h3>{products.length} ITEMS</h3>
          <button
            onClick={toggleFilter}
          >
            {showFilter ? "Hide filter" : "Show filter"}
          </button>
        </div>
        <button>Recommended</button>
      </div>
      <div className="home-grid">
        {showFilter && <FilterSidebar />}
        <ProductGrid products={products}/>
      </div>
    </div>
  );
}

export default Home;
