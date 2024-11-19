import { useContext } from "react";
import { AuthContext } from "../providers/Provider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="py-16 lg:w-3/5 w-11/12 mx-auto flex md:flex-row flex-col justify-between">
      <div className="md:w-1/2 mx-auto md:border-r-2 border-gray-300 md:mr-20 md:mb-0 mb-12">
        <figure>
          <img
            className="md:w-1/2 w-11/12 rounded-full border-2 border-gray-300"
            src={user.photoURL}
            alt={user.displayName}
          />
        </figure>

        <h2 className="lg:text-3xl text-2xl text-gray-800 font-bold mt-4">
          Welcome {user?.displayName}
        </h2>

        </div>

        <div className="md:w-1/2 mx-auto card bg-base-100 w-11/12 shadow-md border-2 border-gray-300">
          <figure>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-full lg:h-64 h-52 rounded-t-lg"
            />
          </figure>
          <div className="space-y-2 p-5 text-center">
            <h2 className="lg:text-xl text-lg text-gray-800 font-bold">
              <span className="text-gray-950">User Name:</span> {user?.displayName}
            </h2>
            <p className="lg:text-lg text-gray-800 font-bold">
              <span className="text-gray-900">User Email:</span> {user?.email}
            </p>

            <div className="pt-5">
                <button className="w-full mx-auto btn bg-amber-500 text-white font-bold">Update Information</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MyProfile;
