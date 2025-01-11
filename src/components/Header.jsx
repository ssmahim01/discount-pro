import { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import 'animate.css';
import { AuthContext } from "../providers/Provider";
import "./Navbar/Navbar.css";
import { useLocation } from "react-router-dom";

const Header = () => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    return (
        <div className="fixed z-10 w-full top-0 bg-base-100">
            {user && location.pathname === "/" && <h2 className="text-center md:text-3xl text-xl text-slate-700 font-bold pt-6 animate__animated animate__fadeInLeft title-style">Welcome <span className="text-indigo-500">{user?.displayName}</span></h2>}
            <Navbar></Navbar>
        </div>
    );
};

export default Header;