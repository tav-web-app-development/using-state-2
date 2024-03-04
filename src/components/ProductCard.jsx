export default function ProductCard({ product }) {
  return (
    <>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">${product.price}</div>

      <button>Add to Cart</button>
      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
