import { Link } from "react-router-dom";
import discountBG from "/src/assets/discountBG.jpg";

const DiscountCoupons = () => {
    return (
        <div className="flex lg:flex-row flex-col lg:justify-between items-center rounded-lg bg-base-100 shadow-md border border-indigo-100 p-8 gap-5">
            <div className="lg:w-1/2">
              <div className="lg:w-11/12 space-y-3 lg:text-left text-center">
              <h2 className="md:text-3xl text-2xl font-bold">The Best Coupons For You</h2>
              <p className="md:text-lg text-gray-600 font-semibold">Anyone can view and copy their available coupon for using those code. There are one and more coupon codes. The logged in user can view and get coupon codes.</p>
              </div>

                <div className="mt-6 lg:w-1/3 md:w-3/5 w-4/5 lg:mx-0 mx-auto">
                    <button className="block w-full btn bg-fuchsia-500 text-white font-bold px-6 rounded-full"><Link to="/brands">Visit to Brands</Link></button>
                </div>
            </div>

            <div className="lg:w-1/2 lg:mt-0 mt-4">
                <img className="w-full lg:h-96 rounded-lg" src={discountBG} alt="Image of discount" />
            </div>
        </div>
    );
};

export default DiscountCoupons;