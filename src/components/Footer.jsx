import { FaDev, FaHome, FaInstagram, FaUser, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdBrandingWatermark } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";
import logoImg from "../assets/discount.png";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content rounded p-10">

      <section>
      <div className="md:text-2xl font-bold flex items-center gap-2">
            <img className="w-14 border border-gray-200 shadow-md rounded-lg" src={logoImg} alt="Logo" />
             <span>Discount PRO</span>
      </div>
      </section>

      <nav className="md:grid md:grid-flow-col flex flex-wrap justify-center items-center gap-6">

        <Link to="/">
          <div className="flex gap-2 items-center">
            <FaHome className="text-lg" /> <span>Home</span>
          </div>
        </Link>

        <Link to="/brands">
          <div className="flex gap-2 items-center">
            <MdBrandingWatermark className="text-lg" /> <span>Brands</span>
          </div>
        </Link>

        <Link to="/myProfile">
          <div className="flex gap-2 items-center">
            <FaUser className="text-lg" /> <span>my-profile</span>
          </div>
        </Link>

        <Link to="/aboutDev">
          <div className="flex gap-2 items-center">
            <FaDev className="text-lg" />
            <span>About Dev</span>
          </div>
        </Link>
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
        <p className="text-gray-700 font-medium">
          Copyright © {new Date().getFullYear()} - All right reserved by Discount PRO
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
