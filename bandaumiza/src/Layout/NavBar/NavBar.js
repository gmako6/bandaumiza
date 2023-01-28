import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";

function NavBar() {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid  gap-10 grid-cols-7 justify-between items-center">
          {/**Logo */}
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src=""
                className="w-full h-12 object-contain"
                alt="bandaumiza"
              />
            </Link>
          </div>
          {/**Search box */}
          <div className="col-span-3">
            <form className="w-full text-xs bg-dryGray rounded flex-btn gap-3">
              <button className="bg-subMain w-12 h-12 flex-colo rounded text-white">
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Tafuta Muvi"
                className="font-bold placeholder:text-border text-sm w-11/12 h-12 px-2 border-none text-black bg-transparent "
              />
            </form>
          </div>

          {/**Menus */}
          <div className="col-span-3 font-medium text-sm hidden xl:gap-12 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink to={"/movies"} className={Hover}>
              Movies
            </NavLink>
            <NavLink to={"/about-us"} className={Hover}>
              About Us
            </NavLink>
            <NavLink to={"/contact-us"} className={Hover}>
              Contact Us
            </NavLink>
            <NavLink to={"/login"} className={Hover}>
              <CgUser className="w-8 h-8" />
            </NavLink>
            <NavLink to={"/favorite"} className={`${Hover} relative`}>
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white -top-4 -right-1">
                4
              </div>
              <FaHeart className="w-6 h-6" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
