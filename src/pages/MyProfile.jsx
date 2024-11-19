import { useContext } from "react";
import { AuthContext } from "../providers/Provider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="py-16 w-11/12 mx-auto">
      <div className="w-11/12 mx-auto md:mb-0 mb-12 bg-purple-500 h-40 rounded-lg text-white flex justify-center items-center">

        <h2 className="md:text-4xl text-2xl font-bold">
          Welcome {user?.displayName}
        </h2>
        </div>

        <div className="md:w-1/2 w-11/12 mx-auto card bg-base-100 shadow-md border-2 border-gray-200 p-4 mt-14">
          <figure>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-60 border-2 border-gray-300 rounded-full"
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
                <button className="w-3/4 mx-auto btn bg-amber-500 text-white font-bold">Update Information</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MyProfile;
