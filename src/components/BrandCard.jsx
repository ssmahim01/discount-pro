const BrandCard = ({ brand }) => {
  const { brand_name, brand_logo, coupons, category, isSaleOn } = brand || {};

  if (isSaleOn) {
    return (
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img
            src={brand_logo}
            alt={brand_name}
            className="w-full h-56 rounded-t-lg"
          />
        </figure>
        <div className="card-body px-3 py-5 space-y-2">
          <h2 className="card-title md:text-xl text-gray-700 font-bold border-b border-gray-300 pb-3">
            <span className="text-gray-900">Brand Name:</span> {brand_name}
          </h2>
          <p className="md:text-lg text-gray-700 font-bold">
           <span className="text-gray-900">Total Coupons:</span> {coupons.length}
          </p>
          <p className="md:text-lg text-gray-700 font-bold">
           <span className="text-gray-900">Category:</span> {category}
          </p>
        </div>
      </div>
    );
  }
};

export default BrandCard;
