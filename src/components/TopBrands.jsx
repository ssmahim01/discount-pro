import Marquee from "react-fast-marquee";
import { NavLink, useLoaderData } from "react-router-dom";
import SaleBrands from "./SaleBrands";

const TopBrands = () => {
  const brands = useLoaderData();

  return (
    <div className="md:w-4/5 w-11/12 mx-auto">
      <div className="space-y-5">
        <h2 className="md:text-4xl text-2xl text-center text-gray-800 font-bold pb-5 animate__animated animate__fadeInLeft">
          Your Favorite Top Brands
        </h2>

        <div className="bg-slate-200 rounded-lg flex gap-2 items-center">
          <span className="px-7 py-5 text-white bg-amber-500 font-bold">
            Brands
          </span>
          <Marquee speed={80} pauseOnHover={true}>
            {brands.map((brand) => (
              <figure key={brand._id}>
                <NavLink to={`/brand/${brand._id}`} className="*:ml-8">
                  <img
                    className="w-14 h-12 rounded-xl"
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                  />
                </NavLink>
              </figure>
            ))}
          </Marquee>
        </div>

        {/* Brands on Sell */}
        <section>
          <SaleBrands></SaleBrands>
        </section>
      </div>
    </div>
  );
};

export default TopBrands;