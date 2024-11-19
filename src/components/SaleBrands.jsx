import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import BrandCard from "./BrandCard";
import { useContext } from "react";
import { AuthContext } from "../providers/Provider";
import { FcGoogle } from "react-icons/fc";

const SaleBrands = () => {
  const brands = useLoaderData();
  const location = useLocation();

  const { user, loginWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
        // alert("Failed to Google Login");
      });
  };

  return (
    <div className="w-full mx-auto pt-10">
      <div className="flex justify-between">
        <h2 className="md:text-2xl text-xl text-gray-700 font-bold">
          {location.pathname === "/" ? "Brands on Sell" : "The Brand On Sell"}
        </h2>

        {!user && (
          <div>
            <button
              onClick={handleGoogleLogin}
              className="btn bg-zinc-300 w-full flex gap-2 justify-center items-center"
            >
              <FcGoogle className="text-2xl" />
              <span className="text-gray-800 font-bold">Login with Google</span>
            </button>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-6 pb-10">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default SaleBrands;
