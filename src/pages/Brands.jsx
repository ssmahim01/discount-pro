import { useLoaderData } from "react-router-dom";
import BrandInfo from "../components/BrandInfo";

const Brands = () => {
    const brands = useLoaderData();

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto p-10">
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-0 gap-3">
        <h2 className="lg:text-2xl text-xl text-gray-800 font-bold">Collect your Coupon</h2>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
      </div>

      {/* Brands Information */}

      <section className="w-full mx-auto flex flex-col gap-8 py-7">
        {brands.map(brand => <BrandInfo key={brand._id} brand={brand}></BrandInfo>)}
      </section>
    </div>
  );
};

export default Brands;
