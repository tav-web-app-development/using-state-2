export default function ProductCard({ product }) {
  let shouldShowDescription = false;
  let currentImageIndex = 0;
  let itemsInCart = 0;

  const handleAddToCartClick = () => {
    itemsInCart++;
    alert(`you added ${itemsInCart}`);
  };
  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <button>Next</button>
        <button>previous</button>
      </div>

      <h3>{product.name}</h3>
      {shouldShowDescription && <p>{product.description}</p>}
      <button>Show Description</button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
