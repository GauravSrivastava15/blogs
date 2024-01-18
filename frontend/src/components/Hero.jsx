// import hero from "../assets/hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center text-white bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 h-[400px] p-2 gap-3 ">
        <div className="left w-1/2">
          <div className="flex flex-col items-center justify-center gap-3 text-center ">
            <div className="two text-3xl font-semibold text-blue-500">
              Let the world know what are you upto!
            </div>
            <div className="three md:text-lg">
              with over 5000+ monthly readers 
            </div>
            <div className="four">
              <Link to="/create">
                <button className="bg-gradient-to-r from-blue-500 via-blue-700 to-slate-500 hover:bg-gradient-to-br px-8 py-2 rounded-md shadow-lg shadow-blue-500/50">
                  Create Your Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="right w-1/2 flex items-center justify-center">
          <img
            className="w-[400px] animate-none"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cDrRVQH5Q1JJPnIzoeg25aKJTYKDr1N3YQ&usqp=CAU"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
