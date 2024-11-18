import { useLoaderData } from "react-router-dom";
import SaleOffBrandCard from "./SaleOffBrandCard";

const SaleOffBrands = () => {
  const brands = useLoaderData();

    return (
      <div className="w-full mx-auto pt-5">
      <h2 className="md:text-2xl text-xl text-gray-800 font-bold">
          Brands not on Sell
        </h2>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-6 pb-10">
      {brands.map((brand) => (
        <SaleOffBrandCard key={brand._id} brand={brand}></SaleOffBrandCard>
      ))}
    </div>
  </div>
  );
};

export default SaleOffBrands;