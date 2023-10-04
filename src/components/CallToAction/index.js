import { Link } from "react-router-dom";

const CallToAction = ({ cta }) => {
  return (
    <div id="cta" className="w-[95%] mx-auto mt-4 flex flex-col gap-0 items-center">
        <img src={cta.image} alt="Shop now" className="w-full" />
        <Link to={cta.link} className="max-md:px-4 max-md:py-1 px-10 py-2 bg-[#ECFF5A] text-[#850000] rounded-full border-none hover:scale-110 transition-normal relative max-md:-top-6 -top-11 z-10">
          Shop Now
        </Link>
    </div>
  );
};

export default CallToAction;
