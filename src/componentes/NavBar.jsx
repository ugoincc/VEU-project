import React from "react";
import { NavBarPages } from "./NavBarPages";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navBar">
      <div>
        <div>
          {/*
          <a href="/homepage">
            <img src={logo} className="h-12" alt="Logo Dilettare" />
          </a>
          */}
        </div>

        <div>
          {NavBarPages.map((val, key) => (
            <a
              key={key}
              href={val.link}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(val.link);
              }}
              className={`w-1/2 lg:w-[20%] text-center text-gray-700 hover:text-gray-600 no-underline ${
                window.location.pathname === val.link ? "font-bold" : ""
              }`}
            >
              {val.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
