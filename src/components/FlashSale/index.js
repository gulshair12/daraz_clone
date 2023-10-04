import { Link } from "react-router-dom";
import { Button } from "../Button";
import Products from "../Products";

const FlashSale = ({ products }) => {
  return (
    <section className="flex flex-col mt-6 gap-4">
      <h2 className="text-gray-500 text-2xl tracking-wide">Flash Sale</h2>
      <div className="py-4 bg-white flex flex-col gap-3">
        <div className="flex justify-between px-2">
          <h3 className="text-primary text-lg tracking-wide uppercase">
            On Sale Now
          </h3>
          <Link
            to="/products"
            variant="secondary"
            size="small"
            className="rounded-none font-light bg-white text-primary hover:bg-primary hover:text-white focus:ring-primary border !border-primary px-2 py-1 text-base leading-1 inline-flex justify-center items-center transition-normal"
          >
            Shop More
          </Link>
        </div>

        <div className="px-2">
          <Products products={products} quantity={6} />
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
