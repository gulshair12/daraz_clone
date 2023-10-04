import { Link } from "react-router-dom";
import { categoryList } from "../../constants";

const CategoryList = () => {
  return (
    <section className="mt-4 bg-white rounded-xl p-5 flex justify-between flex-wrap max-sm:hidden">
      {categoryList.map((item, idx) => (
        <div className="w-[10%] flex justify-between items-center" key={idx}>
          <Link
            to={item.link}
            key={item.label}
            className="h-fit flex flex-col gap-3 items-center w-full p-4 text-black text-sm hover:text-primary relative"
          >
            <img src={item.image} alt={item.label} className="w-[65%]" />
            <p className="transition-normal text-center">{item.label}</p>
          </Link>
          {idx < categoryList.length - 1 && (
            <div key={idx} className="w-0.5 h-16 bg-black/10 self-center" />
          )}
        </div>
      ))}
    </section>
  );
};

export default CategoryList;
