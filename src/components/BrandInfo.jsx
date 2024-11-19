import ReactStars from "react-rating-stars-component";

const BrandInfo = ({ brand }) => {
  const { _id, brand_name, brand_logo, rating, description, isSaleOn } =
    brand || {};

  return (
    <div className="card bg-base-100 w-full shadow-md px-12 py-7 space-y-5 border border-gray-300">
     
      <div className="flex justify-between items-center">
     <div className="flex gap-2 items-center">
     <ReactStars
        count={5}
        size={30}
        value={rating}
        isHalf={true}
        edit={false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
      <button className="btn btn-circle font-bold">{rating}</button>
     </div>

      <figure>
        <img src={brand_logo} alt={brand_name} className="w-20 h-20 rounded-full" />
      </figure>

      <div>
        <h3 className="text-2xl font-bold">{brand_name}</h3>
      </div>
      </div>

     <div className="flex justify-between items-center">
        <h2 className="font-bold">Brand Name: <span className="text-gray-700">{brand_name}</span></h2>
        <p className="font-bold">Description: <span className="text-gray-700">{description}</span></p>
     </div>
    </div>
  );
};

export default BrandInfo;
