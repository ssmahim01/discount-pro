import { useLoaderData } from "react-router-dom";
import BrandInfo from "../components/BrandInfo";
import { useState } from "react";

const Brands = () => {
  const brands = useLoaderData();
  const [search, setSearch] = useState("");
  // console.log(search);

  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto py-10 px-4">
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-0 gap-3">
        <h2 className="lg:text-2xl text-xl text-gray-800 font-bold">
          Collect your Coupon
        </h2>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by brand name..."
            className="input input-bordered input-accent w-full max-w-sm"
          />
        </div>
      </div>

      {/* Brands Information */}

      {filteredBrands.length > 0 ? (
        <section className="w-full mx-auto flex flex-col gap-8 py-7">
          {filteredBrands.map((brand) => (
            <BrandInfo key={brand._id} brand={brand}></BrandInfo>
          ))}
        </section>
      ) : (
        <div className="py-10 flex justify-center items-center">
          <p className="md:text-xl text-lg text-rose-500 font-bold">Brand is not found</p>
        </div>
      )}
    </div>
  );
};

export default Brands;
