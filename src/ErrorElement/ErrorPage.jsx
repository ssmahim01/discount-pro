import { Link } from "react-router-dom";
import errorImg from "/src/assets/error.jpg";

const ErrorPage = () => {
    return (
        <div className="md:w-1/2 w-11/12 mx-auto flex flex-col gap-5 justify-center items-center lg:pt-28 pt-10">
            <figure className="md:w-[450px] md:h-80 w-full h-72">
                <img className="w-full h-full rounded-xl" src={errorImg} alt="The Error Image" />
            </figure>
            <h1 className="md:text-4xl text-3xl text-gray-700 font-bold pb-5">Page Not Found</h1>

            <button className="btn bg-amber-500 text-slate-100 font-bold rounded-none px-6"><Link to="/">Back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;