import React from "react";
import { Link, useLocation } from "react-router-dom";
// mui
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const headerLinkData = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Store", to: "/store" },
];

const Navbar: React.FC = () => {
  const { pathname: currentLocation } = useLocation();

  return (
    <div className="h-[4rem] px-4 text-lg bg-slate-50 flex items-center border-b shadow-md justify-between">
      <ul className="flex gap-x-4">
        {headerLinkData.map(({ title, to }, idx) => (
          <Link
            to={to}
            key={idx}
            className={`${
              currentLocation === to ? "text-blue-500" : ""
            } hover:text-blue-300`}
          >
            {title}
          </Link>
        ))}
      </ul>
      <p className="bg-blue-300 p-2 rounded-full cursor-pointer hover:bg-slate-200">
        <ShoppingCartOutlinedIcon className="text-xl text-white" />
      </p>
    </div>
  );
};

export default Navbar;
