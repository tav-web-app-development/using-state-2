import ProductCard from "./ProductCard";

export default function ProductCardContainer({
  itemsInCart,
  handleAddToCartClick,
  products,
}) {
  const productsJsx = products.map((product) => (
    <ProductCard
      key={product.id}
      handleAddToCartClick={handleAddToCartClick}
      product={product}
    />
  ));
  return (
    <>
      <h1>Discover Your Favorite Products</h1>
      {productsJsx}
    </>
  );
}
