import { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import 'animate.css';
import { AuthContext } from "../providers/Provider";

const Header = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            {user && <h2 className="text-center md:text-3xl text-2xl text-slate-700 font-bold pt-6 animate__animated animate__fadeInLeft">Welcome {user.displayName}...</h2>}
            <Navbar></Navbar>
        </div>
    );
};

export default Header;