import ProductCard from "../ProductCard";

const Products = ({ products, quantity }) => {
  const productList = quantity ? products.slice(0, quantity) : products;

  return (
    <div className="flex justify-center max-sm:gap-x-4 sm:justify-between flex-wrap gap-y-4">
      {productList.map((product, idx) => (
        <div className="max-md:basis-[150px] basis-[16%]" key={idx}>
          <ProductCard
            name={product.name}
            image={product.image}
            price={product.price}
            discount={product.discountPercentage}
            normalPrice={product.normalPrice}
            link={product.link}
            key={idx}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
