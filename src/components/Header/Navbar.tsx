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
    <div className="h-[5rem] px-8 text-xl bg-slate-50 flex items-center border-b shadow-md justify-between">
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
      <p className="relative bg-blue-300 px-3 border-2 hover:border-blue-600 py-2 rounded-full cursor-pointer">
        <ShoppingCartOutlinedIcon
          className=" text-white"
          style={{ fontSize: "1.5rem" }}
        />
        <span
          className="absolute top-0 right-0 text-white text-[14px] bg-red-400 px-[6px] -py-[4px] text-center rounded-full"
          style={{
            transform: "translate(25%,-25%)",
          }}
        >
          2
        </span>
      </p>
    </div>
  );
};

export default Navbar;
