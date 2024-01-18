import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-start px-5 py-4 bg-zinc-900">
        <div className="logo mr-5">
          
        </div>
        <ul className="flex text-white gap-5 text-md cursor-pointer">
          <Link to="/">
            <li>Home</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
