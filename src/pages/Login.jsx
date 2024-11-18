import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Provider";

const Login = () => {
  const { loginWithGoogle, setUser, loginWithEmailPassword } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
    })
    .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Failed to Google Login");
    })
  };

  const handleLoginWithEmailPass = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginWithEmailPassword(email, password)
    .then(result => {
      const user = result.user;
      setUser(user);

      navigate(location?.state ? location.state : "/");
    })

    .catch(error => {
      alert("Login Failed");
      console.log(error.message);
    })
  };

  return (
    <div className="flex justify-center items-center py-14">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-md border border-gray-300">
        <h2 className="w-4/5 mx-auto md:text-3xl text-xl font-bold pt-7 text-center border-b border-gray-300 pb-6">
          Login Form!
        </h2>

        <form onSubmit={handleLoginWithEmailPass} className="card-body">
          <div>
            <button
              onClick={handleGoogleLogin}
              className="btn w-full flex gap-3 justify-center items-center"
            >
              <FcGoogle className="text-2xl" />{" "}
              <span className="text-base font-bold">Login with Google</span>
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
            <label className="label">
              <a className="label-text-alt link link-hover font-semibold">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-success text-base text-white font-bold">
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
  );
};

export default Login;
