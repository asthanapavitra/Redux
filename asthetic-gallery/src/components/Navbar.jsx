import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-(--c2) text-white  px-8 py-6">
      <h2 className="text-2xl font-medium">MediaWorld</h2>
      <div className="flex gap-6 items-center ">
        <Link
          className="text-md font-medium bg-white rounded px-3 py-2 text-black active:scale-95 "
          to={"/"}
        >
          Search
        </Link>
        <Link
          className="text-md font-medium bg-white rounded px-3 py-2 text-black active:scale-95 "
          to={"/collection"}
        >
          Collections
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
