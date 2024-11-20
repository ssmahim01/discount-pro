import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const BrandInfo = ({ brand }) => {
  const { _id, brand_name, brand_logo, rating, description, isSaleOn } =
    brand || {};

  return (
    <div className="card bg-base-100 w-full shadow-md lg:px-12 md:px-6 px-4 py-7 space-y-5 border border-gray-300">
     
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-0 gap-5">

      <figure>
        <img src={brand_logo} alt={brand_name} className="w-24 h-24 rounded-full" />
      </figure>

      <div>
        <h3 className="text-2xl font-bold">{brand_name}</h3>
      </div>

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
      </div>

     <div className="flex flex-wrap lg:justify-between justify-center items-center text-center">
        <h2 className="font-bold">Brand Name: <span className="text-gray-700">{brand_name}</span></h2>
        <p className="font-bold">Description: <span className="text-gray-700">{description}</span></p>
     </div>

     <div className="flex justify-between items-center md:gap-0 gap-6 pt-4 md:mx-0 mx-auto">
     {
      isSaleOn &&  <button className="text-white font-bold btn bg-purple-500 px-6 rounded-full"><Link to={`/brand/${_id}`}>View Coupons</Link></button>
     }

      {
        isSaleOn ? <h3 className="badge badge-success text-white font-semibold p-3 border-2 border-slate-300 animate-bounce shadow-md">Sale is on</h3> : <h3 className="badge badge-error text-white font-semibold p-4 border-2 border-slate-300 shadow-md">Sale is Unavailable</h3>
      }
     </div>
    </div>
  );
};

export default BrandInfo;
