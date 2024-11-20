import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Provider";
import { toast } from "react-toastify";

const Registration = () => {
  const { setUser, registerUser, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have an Uppercase, a lowercase and 6 character or long",
        {
          position: "top-center",
        }
      );
      return;
    }

    if(name.length < 5){
      return toast.warning("Name must be at least 5 character or long", {
        position: "top-center",
      });
    }

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        updateUserInfo({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })

          .catch((error) => {
            const errorMessage = error.message;
            // console.log(errorMessage);
            toast.error("User profile update is failed", {
              position: "top-center",
            });
          });
      })

      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);

        toast.error("Registration Failed", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="md:w-full w-11/12 mx-auto flex justify-center items-center py-14">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-md border border-gray-300">
        <h2 className="animate__animated animate__fadeInRight md:text-3xl text-2xl font-bold pt-7 text-center">
          Register Form!
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control border-t border-gray-300 pt-4">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type your Email"
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
              placeholder="Provide a Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type your Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-purple-500 text-base text-white font-bold">
              Register
            </button>
          </div>
        </form>

        <p className="text-gray-700 font-bold pb-8 text-center">
          Already have an Account? Please{" "}
          <Link to="/authentication/login" className="text-cyan-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
