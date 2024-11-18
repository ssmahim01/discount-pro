import { useLoaderData, useLocation } from "react-router-dom";
import BrandCard from "./BrandCard";

const SaleBrands = () => {
  const brands = useLoaderData();
  const location = useLocation();

  return (
    <div className="w-11/12 mx-auto pt-10">
        <h2 className="md:text-2xl text-xl text-gray-700 font-bold">
           {location.pathname === "/" ?  "Brands on Sell" : "The Brand On Sell"}
          </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-6 pb-10">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default SaleBrands;
