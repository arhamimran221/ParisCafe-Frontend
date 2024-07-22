import { useState } from "react";
import "./Navbar.css";
import DestopMenu from "./DestopMenu";
import MobileMenu from "./MobileMenu";


const Navbar = () => {
  const [isDestop, setIsDestop] = useState(false)

  return (
    <>
      <div className="bg-[#fbf8f1]">
        <nav className="container mx-auto">
            {/* <DestopMenu /> */}

            <MobileMenu />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
