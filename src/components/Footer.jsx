import { FaDev, FaHome, FaInstagram, FaUser, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdBrandingWatermark } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
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

        <NavLink to="/myProfile">
          <div className="flex gap-2 items-center">
            <FaUser className="text-lg" /> <span>my-profile</span>
          </div>
        </NavLink>

        <NavLink to="/aboutDev">
          <div className="flex gap-2 items-center">
            <FaDev className="text-lg" />
            <span>About Dev</span>
          </div>
        </NavLink>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 *:hover:cursor-pointer">
          <a
            href="https://www.facebook.com/ssmahim/"
            target="_blank"
            className="text-cyan-600 bg-gray-300 p-1 text-2xl rounded-full"
          >
            <SiFacebook />
          </a>

          <a
            href="https://www.instagram.com/iammz01/"
            target="_blank"
            className="text-rose-500 bg-gray-300 p-1 text-2xl rounded-full"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/@MahimZayN"
            target="_blank"
            className="text-rose-500 bg-gray-300 p-1 text-2xl rounded-full"
          >
           <FaYoutube />
          </a>

          <a
            href="https://github.com/ssmahim01/"
            target="_blank"
            className="text-gray-800 bg-gray-300 p-1 text-2xl rounded-full"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-gray-600 font-medium">
          Copyright © {new Date().getFullYear()} - All right reserved by Discount Pro
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
