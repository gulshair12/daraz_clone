import { Link } from "react-router-dom";
import { categories } from "../../constants";

const Categories = () => {
  return (
    <div className="bg-white w-[240px] h-[360px] flex flex-col px-6 py-3 justify-between text-[#999] text-sm border border-slate-200 rounded-xl max-lg:hidden">
      {categories.map((category) => (
        <Link
          to={category.link}
          key={category.label}
          className="hover:text-primary transition-normal"
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
