import { useContext } from "react";
import { AuthContext } from "../providers/Provider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="pb-16">
      <div className="md:mb-0 mb-12 bg-purple-500 md:h-36 h-32 text-white flex justify-center items-center lg:px-0 md:px-12 px-8">

        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold flex md:flex-row flex-col justify-center items-center gap-2">
          Welcome back <span className="text-amber-300">{user?.displayName}</span>
        </h2>
        </div>

        <div className="lg:w-1/2 md:w-4/5 w-11/12 mx-auto card bg-base-100 shadow-md border-2 border-gray-200 p-6 mt-14">
          <figure>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-52 h-52 border-3 border-gray-300 rounded-full"
            />
          </figure>

          <div className="divider"></div>

          <div className="space-y-2 text-center">
            <h2 className="lg:text-xl text-lg text-gray-700 font-bold">
              <span className="text-gray-950">User Name:</span> {user?.displayName}
            </h2>
           <div className="flex md:flex-row flex-col justify-between items-center md:pt-6 lg:px-8 md:gap-0 gap-5">
           <p className="md:text-lg text-sm text-gray-700 font-bold">
              <span className="text-gray-900">User Email:</span> {user?.email}
            </p>
                <div className="lg:w-56 md:w-48 w-11/12">
                <button className="btn bg-amber-500 text-white text-base font-bold rounded-full w-full"><Link to="/updateInfo">Update</Link></button>
                </div>
           </div>
          </div>
        </div>
    </div>
  );
};

export default MyProfile;
