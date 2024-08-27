import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../imgs/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if the current page is sign-in or sign-up
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 mb-5 transition-all duration-300 ${
          scrolled || isAuthPage ? "bg-white border border-grey" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link
            to="/"
            className="flex-none w-16 h-16 rounded-full overflow-hidden"
          >
            <img src={logo} className="w-full h-auto mb-2" alt="Logo" />
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            <Link
              className={`btn py-2 px-5 rounded-full transition-colors  ${
                scrolled || isAuthPage
                  ? "bg-customGreen text-white"
                  : "bg-white text-customGreen"
              }`}
              to="/signin"
            >
              Sign In
            </Link>

            <Link
              className={`btn py-2 px-5 rounded-full transition-colors hidden md:block ${
                scrolled || isAuthPage
                  ? "bg-white text-customGreen border border-customGreen"
                  : "bg-customGreen text-white"
              }`}
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
};

export default Header;
