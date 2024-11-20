import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const BrandDetails = () => {
  const brandData = useLoaderData();
  // console.log(brandData);
  const { brand_name, brand_logo, rating, coupons, shop_Link } =
    brandData || {};

  const handleSuccessMessage = () => {
    toast.success("Coupon code copied successfully", {
      position: "top-center",
    });
  };

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto py-12">
      <div className="lg:px-10 md:px-5 flex flex-wrap md:justify-between justify-center items-center md:gap-0 gap-4">
        <h2 className="md:text-2xl text-lg text-gray-800 font-bold">
          {brand_name}
        </h2>
        <figure>
          <img
            className="md:w-20 md:h-20 w-16 h-16 rounded-full"
            src={brand_logo}
            alt={brand_name}
          />
        </figure>

        <div className="flex gap-3 items-center">
          <ReactStars
            count={5}
            size={24}
            value={rating}
            isHalf={true}
            edit={false}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />

          <span className="text-lg text-gray-700 font-bold">{rating}</span>
        </div>
      </div>

      <div className="md:w-11/12 w-full mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 py-10">
        {coupons.map((coupon, index) => (
          <div
            key={index}
            className="flex flex-col bg-base-100 rounded-xl shadow-md border border-gray-200 p-5"
          >
            <div className="space-y-3">
              <h3 className="text-lg font-bold">
                Coupon Type:
                <span className="text-gray-700 ml-2">{coupon.coupon_type}</span>
              </h3>

              <h3 className="text-lg font-bold">
                Code:
                <span className="text-gray-700 ml-2">{coupon.coupon_code}</span>
              </h3>

              <div className="divider"></div>

              <p className="font-bold">
                Condition:{" "}
                <span className="text-gray-600 font-semibold ml-1">
                  {coupon.condition}
                </span>
              </p>
              <p className="font-bold">
                Description:{" "}
                <span className="text-gray-600 font-semibold ml-1">
                  {coupon.description}
                </span>
              </p>

              <h3 className="font-bold">
                Expiry Date:{" "}
                <span className="text-gray-700 font-semibold ml-1">
                  {coupon.expiry_date}
                </span>
              </h3>
            </div>

            <div className="flex justify-between items-center mt-6">
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={handleSuccessMessage}
              >
                <button className="btn btn-info text-white font-bold rounded-full md:px-16 px-10">
                  Copy Code
                </button>
              </CopyToClipboard>

              <button
                className="btn bg-amber-400 text-white font-bold rounded-full md:px-20 px-10"
              >
                <Link to={shop_Link} target="_blank">Use Now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
