import { Link } from "react-router-dom";
import { productCategories } from "../../constants";

const ProductCategories = () => {
    return (
        <section className="flex flex-col gap-2 mt-8">
                  <h2 className="text-gray-600 text-2xl tracking-wide">Categories</h2>
        <div className="flex justify-evenly md:justify-between flex-wrap gap-y-1 max-md:gap-3">
            {productCategories.map((category, idx) => (
                <div className="basis-[150px] md:basis-[12%] bg-white text-gray-800 hover:shadow-xl transition-normal" key={idx}>
                <Link to="/" className="flex flex-col gap-2 px-2 py-4 w-full items-center">
                    <img src={category.image} alt={category.label} className="w-[75%]" />
                    <p className="text-sm text-center">
                        {category.label}
                    </p>
                </Link>
                </div>
            ))}
        </div>
        </section>
    )
}

export default ProductCategories;
