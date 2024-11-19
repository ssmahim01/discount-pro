import { useContext } from "react";
import { AuthContext } from "../providers/Provider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="py-16 w-11/12 mx-auto">
      <div className="w-11/12 mx-auto md:mb-0 mb-12 bg-purple-500 md:h-36 h-32 rounded-lg text-white flex justify-center items-center lg:px-0 md:px-12 px-8">

        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center">
          Welcome back <span className="text-amber-300 italic">{user?.displayName}</span>
        </h2>
        </div>

        <div className="lg:w-1/2 md:w-3/4 w-11/12 mx-auto card bg-base-100 shadow-md border-2 border-gray-200 p-6 mt-14">
          <figure>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="md:w-60 w-56 border-2 border-gray-300 rounded-full"
            />
          </figure>

          <div className="divider"></div>

          <div className="space-y-2 text-center">
            <h2 className="lg:text-xl text-lg text-gray-700 font-bold">
              <span className="text-gray-950">User Name:</span> {user?.displayName}
            </h2>
            <p className="lg:text-lg text-gray-700 font-bold">
              <span className="text-gray-900">User Email:</span> {user?.email}
            </p>

            <div className="pt-5">
                <button className="lg:w-3/4 md:w-11/12 w-full mx-auto btn bg-amber-500 text-white font-bold">Update Information</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MyProfile;
