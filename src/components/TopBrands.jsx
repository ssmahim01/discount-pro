import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("/coupons.json")
        .then(res => res.json())
        .then(data => setBrands(data))
    });

    return (
        <div className="md:w-4/5 w-11/12 mx-auto">
            <div className="space-y-5">
                <h2 className="md:text-4xl text-2xl text-center text-gray-700 font-bold pb-5">Your Favorite Top Brands</h2>

               <div className="bg-slate-200 rounded-lg flex gap-2 items-center">
                <span className="px-7 py-5 text-white bg-amber-500 font-bold">Brands</span>
               <Marquee speed={80} pauseOnHover={true}>
                    {brands.map(brand => 
                        <figure key={brand._id}>
                            <Link to={`/brand/${brand._id}`} className="*:ml-8">
                            <img  className="w-14 h-14 rounded-xl" src={brand.brand_logo} alt={brand.brand_name} />
                            </Link>
                        </figure>
                    )}
                </Marquee>
               </div>
            </div>
        </div>
    );
};

export default TopBrands;