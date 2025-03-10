import { FaDev, FaHome, FaUser } from "react-icons/fa";
import { MdBrandingWatermark } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logoImg from "/src/assets/discount.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/Provider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      toast.success("Log Out Successfully", {
        position: "top-center"
    });
  };

  const routeLinks = (
    <>
      <NavLink to="/">
        <div className="flex gap-2 items-center">
          <FaHome className="text-lg" /> <span>Home</span>
        </div>
      </NavLink>

      <NavLink to="/brands">
        <div className="flex gap-2 items-center">
          <MdBrandingWatermark className="text-lg" /> <span>Brands</span>
        </div>
      </NavLink>

      {user && (
        <NavLink to="/myProfile">
          <div className="flex gap-2 items-center">
            <FaUser className="text-lg" /> <span>My Profile</span>
          </div>
        </NavLink>
      )}

      <NavLink to="/aboutDev">
        <div className="flex gap-2 items-center">
          <FaDev className="text-lg" />
          <span>About Dev</span>
        </div>
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-200 navbar fixed z-10 w-full py-2 lg:px-24 border-b border-gray-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden border-2 border-gray-200 shadow-sm mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-56 p-5 shadow space-y-3 *:font-semibold"
          >
            {routeLinks}
          </ul>
        </div>
        <div className="md:text-2xl font-bold flex items-center gap-2">
          <img
            className="w-14 border border-gray-200 shadow-md rounded-lg"
            src={logoImg}
            alt="Logo"
          />
          <span className="hidden md:block text-gray-800">Discount PRO</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 *:font-bold *:ml-5">
          {routeLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <figure>
                <img
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
              </figure>

              <p className="text-sm text-gray-600 font-bold md:block hidden">
                {user?.email}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="btn bg-rose-500 rounded-none text-white font-bold"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <button className="btn btn-outline text-base border-2 hover:bg-green-500 hover:border-none px-5 text-success hover:text-white font-bold">
              <Link to="/authentication/login">Login</Link>
            </button>
            <button className="btn bg-fuchsia-500 px-4 text-white font-bold ml-2">
              <Link to="/authentication/registration">Registration</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
