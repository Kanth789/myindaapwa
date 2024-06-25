import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Badge } from "@mui/material";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <header className="bg-customYellow text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">MyIndiaa</h1>
      <nav>
        <Link to="/cart" className="px-3">
          <Badge badgeContent={cart.items.length > 5 ? '+5' : cart.items.length} color="secondary">
            <LocalMallIcon />
          </Badge>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
