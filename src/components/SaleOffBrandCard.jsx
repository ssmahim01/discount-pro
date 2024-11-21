const SaleOffBrandCard = ({brand}) => {
    const { brand_name, brand_logo, category, description, isSaleOn } = brand || {};

   if(!isSaleOn){
    return (
        <div className="card bg-base-100 w-full shadow-sm p-5 border-2 border-gray-300">
        <figure>
          <img
            src={brand_logo}
            alt={brand_name}
            className="w-full h-52 rounded-lg"
          />
        </figure>
        <div className="pt-4 space-y-2 pr-3">
          <h2 className="card-title md:text-xl text-gray-700 font-bold flex flex-wrap">
           <span className="text-gray-950">Brand Name:</span> {brand_name}
          </h2>
          <p className="md:text-lg text-gray-700 font-bold">
           <span className="text-gray-900">Category:</span> {category}
          </p>
          <p className="md:text-lg text-gray-700 font-semibold">
           <span className="text-gray-900 font-bold">Description:</span> {description}
          </p>
        </div>
      </div>
    );
   }
};

export default SaleOffBrandCard;