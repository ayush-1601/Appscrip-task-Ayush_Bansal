import '../styles/productCard.css'

const ProductCard = ({ name, image, status }) => (
  <div className="product-card">
    {status && <div className="ribbon">{status}</div>}
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <p>Sign in to see pricing</p>
  </div>
);

export default ProductCard;