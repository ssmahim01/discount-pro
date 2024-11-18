import Navbar from "./Navbar/Navbar";
import 'animate.css';

const Header = () => {
    return (
        <div>
            <h2 className="text-center md:text-3xl text-2xl text-slate-700 font-bold pt-6 animate__animated animate__fadeInLeft">Welcome Mahim Zayn...</h2>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;