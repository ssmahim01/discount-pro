import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Provider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { email, setEmail, loginWithGoogle, setUser, loginWithEmailPassword } =
    useContext(AuthContext);

  const [hidePassword, setHidePassword] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success(`${user.displayName} successfully Login`, {
          position: "top-center",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
        toast.error("Failed to Google Login", {
          position: "top-center",
        });
      });
  };

  const handleLoginWithEmailPass = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        navigate(location?.state ? location.state : "/");
        toast.success(`${user.displayName} successfully Login`, {
          position: "top-center",
        });
      })

      .catch((error) => {
        toast.error("Login Failed", {
          position: "top-center",
        });
        // console.log(error.message);
      });
  };

  const handleForgotPassword = () => {
    if (email && email.includes("@", ".com")) {
      return navigate("/forgetPassword");
    }
  };

  return (
    <div>
       <h2 className="w-4/5 mx-auto md:text-3xl text-2xl font-bold pt-12 text-center">
          Login Form!
        </h2>
      <div className="md:w-full w-11/12 mx-auto flex justify-center items-center py-12">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-md border border-gray-300">
          <form onSubmit={handleLoginWithEmailPass} className="card-body">
            <div>
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

            <div className="divider text-gray-600 font-medium">
              Or Login with Email
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
                onChange={(e) => setEmail(e.target.value)}
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
              <label className="label">
                <button
                  onClick={handleForgotPassword}
                  className="label-text-alt link link-hover font-semibold"
                >
                  Forget password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-cyan-500 text-base text-white font-bold">
                Login
              </button>
            </div>
          </form>

          <p className="text-gray-700 font-bold pb-8 text-center">
            If you new in this site? Please{" "}
            <Link
              to="/authentication/registration"
              className="text-rose-500 underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
