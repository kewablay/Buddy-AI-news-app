import Button from "./Button";
import Logo from "../Images/buddyLogo.png";
import Toggle from "../Images/hamburger.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-[1000] w-full bg-gray-50 px-4  py-3 flex justify-between items-center shadow-md md:px-10 ">
      {/* brandh */}
      <Link to="/" className="cursor-pointer">
        <img className="w-32" src={Logo} alt="" />
      </Link>
      {/* nav links */}
      <div
        className={`navLinks absolute flex space-y-4 text-center flex-col w-full bg bg-gray-50 shadow-2xl  ${
          toggle ? "top-20" : "-top-72"
        } left-0 py-8 duration-300 md:static md:w-fit md:flex-row md:items-center md:shadow-none md:p-0 md:space-y-0`}
      >
        <a href="#">Home</a>
        <a href="#">How it works</a>
        <a href="#">Contact Us</a>
      </div>
      {/* Button */}
      <div className="cursor-pointer">
        <img
          className="md:hidden"
          src={Toggle}
          alt=""
          onClick={() => setToggle(!toggle)}
        />
        <div className="hidden md:block">
          <Button text={"Let's Go"} px={"1.2rem"} py={".5rem"} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
