import { FaHtml5, FaReact } from "react-icons/fa";
import devImg from "/src/assets/mahim.jpg";
import { SiCss3, SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import dragonNews from "/src/assets/dragon-news-web.png";
import mzShop from "/src/assets/mz-shop.png";
import bplXI from "/src/assets/bpl-xi.png";
import { Link } from "react-router-dom";

const AboutDev = () => {
  return (
    <div className="py-16">
      <div className="pb-8">
        <h1 className="md:text-4xl text-3xl text-center font-bold">
          About Developer
        </h1>
      </div>
      <div className="lg:w-3/4 md:w-3/5 w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-center p-8 rounded-2xl shadow-md bg-white">
        <figure className="lg:w-1/2 w-full">
          <img
            className="lg:w-80 lg:h-80 w-full md:h-80 h-72 rounded-xl border-2 border-gray-200 shadow-md"
            src={devImg}
            alt="Image of Developer"
          />
        </figure>

        <div className="w-full lg:pt-0 pt-5">
          <div className="lg:pr-36 space-y-2">
            <h2 className="lg:text-3xl md:text-xl text-lg font-bold lg:text-left text-center">
              Sayman Shakil Mahim(Mahim Zayn)
            </h2>
            <p className="text-gray-600 font-semibold lg:text-left text-center">
              I live in Bangladesh. I am a student of English Department. Also,
              I was chose my profession as a developer.
            </p>
          </div>

          <div className="mt-3">
            <h2 className="text-xl font-bold pb-1">Skills</h2>
            <div className="flex gap-2 items-center text-gray-700 font-semibold">
              <FaHtml5 className="text-red-500" />{" "}
              <span>HTML5 - Hypertext Markup Language 5</span>
            </div>
            <div className="flex gap-2 items-center text-gray-700 font-semibold">
              <SiCss3 className="text-indigo-500" />{" "}
              <span>CSS3 - Cascading Style Sheets 3</span>
            </div>

            <div className="flex gap-2 items-center text-gray-700 font-semibold">
              <RiTailwindCssFill className="text-cyan-400" />{" "}
              <span>Tailwind CSS - An open-source CSS framework</span>
            </div>

            <div className="flex gap-2 items-center text-gray-700 font-semibold">
              <SiJavascript className="text-amber-500" />{" "}
              <span>
                JavaScript - World's most popular programming language
              </span>
            </div>
            <div className="flex gap-2 items-center text-gray-700 font-semibold">
              <FaReact className="text-cyan-500" />{" "}
              <span>
                React - A JavaScript library for building user interfaces
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 space-y-4 md:w-4/5 w-11/12 mx-auto">
        <h2 className="md:text-4xl text-3xl font-bold text-center">
          Latest Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          <div className="card bg-base-100 w-full shadow-sm p-5 border-2 border-gray-300">
            <figure>
              <img
                src={mzShop}
                alt="Image of Website"
                className="w-full lg:h-48 h-40 rounded-lg border-2 border-gray-200 shadow-md"
              />
            </figure>
            <div className="mt-3 mx-auto">
              <h2 className="card-title md:text-xl text-gray-700 font-bold">
                <span className="text-gray-950">Project Name:</span> MZ Shop
              </h2>

              <Link to="https://the-gadget.netlify.app/" target="_blank">
              <button className="mt-4 btn btn-info text-white font-bold rounded-full md:w-4/5 block w-full mx-auto">Click to View</button>
              </Link>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm p-5 border-2 border-gray-300">
            <figure>
              <img
                src={bplXI}
                alt="Image of Website"
                className="w-full lg:h-48 h-40 rounded-lg border-2 border-gray-200 shadow-md"
              />
            </figure>
            <div className="mt-3 mx-auto">
              <h2 className="card-title md:text-xl text-gray-700 font-bold">
                <span className="text-gray-950">Project Name:</span> BPL XI
              </h2>

              <Link to="https://bpl-xi.surge.sh/" target="_blank">
              <button className="mt-4 btn btn-info text-white font-bold rounded-full block md:w-4/5 w-full mx-auto">Click to View</button>
              </Link>
            </div>
          </div>
          <div className="card bg-base-100 w-full shadow-sm p-5 border-2 border-gray-300">
            <figure>
              <img
                src={dragonNews}
                alt="Image of Website"
                 className="w-full lg:h-48 h-40 rounded-lg border-2 border-gray-200 shadow-md"
              />
            </figure>
            <div className="mt-3 mx-auto">
              <h2 className="card-title md:text-xl text-gray-700 font-bold flex flex-wrap justify-center">
                <span className="text-gray-950">Project Name:</span> Dragon News Web
              </h2>

              <Link to="https://dragon-news-web-34946.web.app/" target="_blank">
               <button className="mt-4 btn btn-info text-white font-bold rounded-full block md:w-4/5 w-full mx-auto">Click to View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
