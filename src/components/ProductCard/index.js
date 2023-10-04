import { Link } from "react-router-dom";

const ProductCard = ({ image, name, link, price, normalPrice, discount }) => {
  return (
    <Link
      to={link}
      className="text-black bg-white flex flex-col gap-4 hover:shadow-xl transition-normal"
    >
      <img src={image} alt={name.slice(0, 10)} className="w-full" />

      <div className="flex flex-col gap-[2px] w-[80%] mx-auto">
        <h4 className="text-sm">{name.slice(0, 38)}</h4>
        <p className="text-base text-primary">Rs.{price}</p>
        <p className="text-sm text-gray-400">
          Rs.{normalPrice}
          <span className="text-black text-base ml-1">{discount}%</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
