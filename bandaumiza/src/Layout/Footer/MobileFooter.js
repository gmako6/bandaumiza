import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsCollectionPlay } from "react-icons/bs";
import { FiHeart, FiUser } from "react-icons/fi";
import { CgMenuBoxed } from "react-icons/cg";
import MenuDrawer from "../../Components/Drawer/MenuDrawer";
import { SideBarContext } from "../../Context/DrawerContext";

function MobileFooter() {
  const { mobileDrawer, toggleDrawer } = useContext(SideBarContext);
  const active = "bg-white text-main";
  const inActive =
    "transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3 ";

  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;
  return (
    <>
      <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow">
        <MenuDrawer drawerOpen={mobileDrawer} toggleDrawer={toggleDrawer} />
      </div>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bg-dry rounded-md flex-btn w-full p-1">
          <NavLink to="/movies" className={Hover}>
            <BsCollectionPlay />
          </NavLink>

          <NavLink to="/favorites" className={Hover}>
            <div className="relative">
              <div className="w-4 h-4 flex-colo rounded-full text-xs bg-subMain text-white -top-3  right-1 absolute">
                4
              </div>
              <FiHeart />
            </div>
          </NavLink>

          <NavLink to="/login" className={Hover}>
            <FiUser />
          </NavLink>

          <button onClick={toggleDrawer} className={inActive}>
            <CgMenuBoxed />
          </button>
        </div>
      </footer>
    </>
  );
}

export default MobileFooter;
