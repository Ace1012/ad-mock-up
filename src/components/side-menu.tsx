import { useEffect, useRef } from "react";

interface PropType {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu = (props: PropType) => {
  const { openMenu, setOpenMenu } = props;
  const sideMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sideMenu = document.querySelector(".side-menu");
    openMenu
      ? sideMenuRef.current?.classList.add("reveal")
      : sideMenuRef.current?.classList.remove("reveal");
  }, [openMenu]);

  return (
    <ul ref={sideMenuRef} className="side-menu">
      <li className="option">
        <span>&times; Option 1</span>
      </li>
      <li className="option">
        <span>&times; Option 2</span>
      </li>
      <li className="option">
        <span>&times; Option 3</span>
      </li>
    </ul>
  );
};

export default SideMenu;
