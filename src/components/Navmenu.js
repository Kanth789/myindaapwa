import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavMenu = () => {
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState("/");
  useEffect(() => {
    window.scrollTo(0, 0);
    const { pathname } = location;
    setActiveUrl(pathname);
  }, [location]);
  return (
    <nav className="bg-lightCream text-brown p-4">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className={` ${
              activeUrl === "/" ? "font-semibold" : "font-normal"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={` ${
              activeUrl === "/products" ? "font-semibold" : "font-normal"
            }`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={` ${
              activeUrl === "/about" ? "font-semibold" : "font-normal"
            }`}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
