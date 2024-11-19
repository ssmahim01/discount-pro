import { useLoaderData } from "react-router-dom";
import SaleOffBrandCard from "./SaleOffBrandCard";

const SaleOffBrands = () => {
  const brands = useLoaderData();

  return (
    <div className="w-full mx-auto pt-5">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="md:text-4xl text-2xl text-center text-gray-800 font-bold">
          Brands Where Sale is Off
        </h2>

        <p className="lg:w-3/5 w-4/5 md:text-base text-sm text-gray-500 font-semibold text-center">
          A brand always try to get customers love. Some brand provide the best
          discount for their customers through coupon code. When time will
          finish, anyone does not access to use the coupon.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-10">
        {brands.map((brand) => (
          <SaleOffBrandCard key={brand._id} brand={brand}></SaleOffBrandCard>
        ))}
      </div>
    </div>
  );
};

export default SaleOffBrands;
