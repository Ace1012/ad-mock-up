import { useEffect, useState } from "react";

interface PropType{
  openMenu:boolean,
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = (props:PropType) => {
  const {openMenu, setOpenMenu} = props;

  const toggleOpen = () => {
    const menu = document.querySelector(".ham-btn");
    setOpenMenu((prevMenu) => !prevMenu);
    menu?.classList.toggle("open");
  };

  useEffect(() => {
    console.log(openMenu);
    const menu = document.querySelector(".ham-btn");
    menu?.addEventListener("click", toggleOpen);
    return () => {
      menu?.removeEventListener("click", toggleOpen);
    };
  }, [openMenu]);

  return (
    <ul className="navbar">
      <li className="left-nav-container">
        <div className="ham-btn">
          <div className="hamburger-icon"></div>
        </div>
        <span className="logo">Ad Mock Up</span>
      </li>
      <li className="right-nav-container">
        <div className="option">
          <span>&times; Option 1</span>
        </div>
        <div className="option">
          <span>&times; Option 2</span>
        </div>
        <div className="option">
          <span>&times; Option 3</span>
        </div>
      </li>
    </ul>
  );
};

export default Navbar;
