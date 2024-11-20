import { useContext } from "react";
import { AuthContext } from "../providers/Provider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const {updateUserInfo} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateInfo = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const photo = event.target.photoURL.value;

        const profile = {
           displayName: name,
            photoURL:photo
        };

        if(name.length < 5){
            return toast.warning("Name must be at least 5 character or long", {
              position: "top-center",
            });
          };

        updateUserInfo(profile)
        .then(() => {
            navigate("/myProfile");
            toast.success("Updated successfully", {
                position: "top-center"
            })
        })

        .catch(error => {
            const errorMessage = error.message;
            // console.log(errorMessage);
            toast.error("Failed to Update");
        })
    };

    return (
        <div className="md:w-full w-11/12 mx-auto flex justify-center items-center py-14">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-md border border-gray-300">
        <h2 className="w-4/5 mx-auto md:text-3xl text-2xl font-bold pt-7 text-center border-b border-gray-300 pb-6">
          Update Your Info
        </h2>

        <form onSubmit={handleUpdateInfo} className="card-body">

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Provide Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo-URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Provide Your Photo-URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-warning text-base text-white font-bold rounded-full">
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateProfile;