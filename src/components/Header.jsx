
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../imgs/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link
            to="/"
            className="flex-none w-16 h-16 rounded-full overflow-hidden"
          >
            <img src={logo} className="w-full h-auto mb-2" alt="Logo" />
          </Link>
          <p className="text-2xl md:text-3xl font-extrabold text-customGreen drop-shadow-md">
            InstaFarm
          </p>
          <div className="flex items-center gap-3 md:gap-6">
            <Link
              className={`btn py-2 px-4 rounded-md transition-colors ${
                scrolled
                  ? "bg-customGreen text-white"
                  : "bg-white text-customGreen"
              }`}
              to="/signin"
            >
              Sign In
            </Link>

            <Link
              className={`btn py-2 px-4 rounded-md transition-colors hidden md:block ${
                scrolled
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
