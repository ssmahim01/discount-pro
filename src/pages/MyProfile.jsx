import { useContext } from "react";
import { AuthContext } from "../providers/Provider";
import coverBG from "/src/assets/discountBG.jpg";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="py-16 lg:w-3/5 w-11/12 mx-auto flex md:flex-row flex-col justify-between items-center">
      <div className="md:w-1/2 mx-auto md:mb-0 mb-12">
        <figure>
          <img
            className="w-11/12 mx-auto lg:h-80 h-64 rounded-xl border-2 border-gray-200 bg-base-100 shadow-md"
            src={coverBG}
            alt="Cover"
          />
        </figure>

        <h2 className="text-3xl text-center text-gray-800 font-bold mt-6">
          Welcome {user?.displayName}
        </h2>
        </div>

        <div className="divider divider-horizontal divider-start"></div>

        <div className="md:w-1/2 mx-auto card bg-base-100 w-11/12 shadow-md border-2 border-gray-300 p-4 ml-4">
          <figure>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-3/5 border-2 border-gray-300 rounded-full"
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
                <button className="w-full mx-auto btn bg-amber-500 text-white font-bold">Update Information</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MyProfile;
