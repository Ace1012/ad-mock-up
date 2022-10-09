import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SideMenu from "./components/side-menu";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="app">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div className="home">
        <section ></section>
      </div>
    </div>
  );
}

export default App;
