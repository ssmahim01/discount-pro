const BrandCard = ({ brand }) => {
  const { brand_name, brand_logo, coupons, category, isSaleOn } = brand || {};

  if (isSaleOn) {
    return (
      <div className="card bg-base-100 w-full shadow-md">
        <figure>
          <img
            src={brand_logo}
            alt={brand_name}
            className="w-full h-56 rounded-lg"
          />
        </figure>
        <div className="card-body px-3 py-5 space-y-2">
          <h2 className="card-title md:text-xl text-gray-800 font-bold">
            Brand Name: {brand_name}
          </h2>
          <p className="md:text-lg text-gray-700 font-bold">
            Total Coupons: {coupons.length}
          </p>
          <p className="md:text-lg text-gray-700 font-bold">
            Category: {category}
          </p>
        </div>
      </div>
    );
  }
};

export default BrandCard;
