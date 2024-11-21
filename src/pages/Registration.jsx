import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Provider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const { setUser, registerUser, updateUserInfo, loginWithGoogle } =
    useContext(AuthContext);
  const [hidePassword, setHidePassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
     setErrorMessage("Password must have an Uppercase, a lowercase and 6 character or long");
      return;
    }

    if (name.length < 5) {
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
            toast.success(`${user.displayName} successfully Registered`, {
              position: "top-center",
            });
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

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`${user.displayName} successfully Login`, {
          position: "top-center",
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
        toast.error("Failed to Google Login", {
          position: "top-center",
        });
      });
  };

  return (
    <div>
       <h2 className="md:text-3xl text-2xl font-bold pt-10 text-center">
          Register Form!
        </h2>
      <div className="md:w-full w-11/12 mx-auto flex justify-center items-center py-12">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-md border border-gray-300">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type={hidePassword ? "password" : "text"}
                name="password"
                placeholder="Type your Password"
                className="input input-bordered"
                required
              />

              <button
                onClick={() => setHidePassword(!hidePassword)}
                className="absolute btn btn-xs top-12 right-3"
                type="button"
              >
                {hidePassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

              <div>
               {
                errorMessage && <p className="text-rose-500 text-center font-bold mt-5">{errorMessage}</p>
               }
              </div>

            <div className="form-control mt-6">
              <button className="btn bg-purple-500 text-base text-white font-bold">
                Register
              </button>
            </div>
          </form>

          <p className="text-gray-700 font-bold text-center">
            Already have an Account? Please{" "}
            <Link
              to="/authentication/login"
              className="text-cyan-500 underline"
            >
              Login
            </Link>
          </p>

          <div className="divider w-4/5 mx-auto font-medium">Or</div>

          <div className="w-4/5 mx-auto pb-8">
            <button
              onClick={handleGoogleLogin}
              className="btn w-full flex gap-3 justify-center items-center"
            >
              <FcGoogle className="text-2xl" />{" "}
              <span className="text-base text-gray-800 font-bold">
                Login with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
