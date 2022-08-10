import React from "react";
import Logo from "../Images/buddyLogo.png";
import Button from "./Button";

function Footer() {
  return (
    <footer className=" py-1 mt-2  bg-gradient-to-b from-[#1d1d22] to-cyan-900 rounded-tl-2xl rounded-tr-2xl w-full flex justify-center">
      <p className="text center mx-auto text-gray-300 text-xs">
        Built with love by Kewa Blay
      </p>
    </footer>
  );
}

export default Footer;
