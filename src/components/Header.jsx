import { Link, Outlet } from "react-router-dom";
import logo from "../imgs/logo.png";


const Header = () => {
  return (
    <>
      <nav className="navbar ">
        <Link to="/" className="flex-none w-20 h-20 rounded-full overflow-hidden">
          <img src={logo} className="w-full h-auto" alt="Logo" />
        </Link>

        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <>
            <Link className="btn-dark bg-customGreen py-2" to="/signin">
              Sign In
            </Link>

            <Link className="btn-light py-2 hidden md:block" to="/signup">
              Sign Up
            </Link>
          </>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
