import React from "react";
import MainDrawer from "./MainDrawer";
import { Link, NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { BsCollectionPlay } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

function MenuDrawer({ drawerOpen, toggleDrawer }) {
  const active = "bg-dry text-subMain";
  const hover = "hover:bg-dry";
  const inActive =
    "rounded sm:gap-10 font-medium text-sm transitions flex gap-6 items-center sm:px-8 px-4 py-4 items-center";
  const Hover = ({ isActive }) =>
    isActive ? `${active}  ${inActive}` : `${inActive} ${hover}`;

  const Links = [
    {
      name: "Movies",
      link: "/movies",
      icon: BsCollectionPlay,
    },
    {
      name: "About",
      link: "/about-us",
      icon: HiOutlineUserGroup,
    },
    {
      name: "About Us",
      link: "/about-us",
      icon: HiOutlineUserGroup,
    },
    {
      name: "Contact Us",
      link: "/contact-us",
      icon: BiPhoneCall,
    },
  ];

  const LinkDatas = [
    {
      icon: FaFacebook,
      link: "#",
    },
    {
      icon: FaInstagram,
      link: "#",
    },
    {
      icon: FaTelegram,
      link: "#",
    },
    {
      icon: FaYoutube,
      link: "#",
    },
  ];

  return (
    <MainDrawer drawerOpen={drawerOpen} drawerClose={toggleDrawer}>
      <div className="flex flex-col w-full h-full justify-between items-center bg-main text-white rounded">
        <div className="w-full flex-btn h-16 px-6 py-4 bg-dry">
          <Link onClick={toggleDrawer} to="/">
            <img
              src="/image/logo.png"
              alt="logo"
              className="w-28 h-28 object-contain"
            />
          </Link>
          <button
            onClick={toggleDrawer}
            type="button"
            className=" transitions font-bold  w-12 h-12 flex-colo text-base  text-white bg-subMain rounded-full hover:bg-white hover:text-subMain"
          >
            <IoIosClose className="" />
          </button>
        </div>

        {/** menu links*/}
        <div className="w-full overflow-y-scroll flex-grow max-height-full">
          <div className="pb-12 pt-4">
            {Links.map((link, i) => (
              <NavLink
                to={link.link}
                key={i}
                onClick={toggleDrawer}
                className={Hover}
              >
                <link.icon className="text-lg" />
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="flex-rows gap-6 w-full">
            {LinkDatas.map((link, i) => (
              <a
                href={link.link}
                key={i}
                target="_blank"
                rel="noreferrer"
                className="flex-colo w-12 h-12 transitions hover:bg-subMain text-lg text-white rounded bg-opacity-30"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </MainDrawer>
  );
}

export default MenuDrawer;
