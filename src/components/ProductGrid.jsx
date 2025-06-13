import ProductCard from './ProductCard';
import '../styles/productGrid.css'

const ProductGrid = ({products}) => {
  

  return (
    <section className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.title}
          image={product.image}
          status={product.rating.count < 100 ? 'NEW PRODUCT' : ''}
        />
      ))}
    </section>
  );
};

export default ProductGrid;