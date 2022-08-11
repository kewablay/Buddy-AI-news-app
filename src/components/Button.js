import React from "react";
import { Link } from "react-router-dom";

function Button({ py, px, text, icon }) {
  return (
    <div>
      <Link
        to={"/news"}
        className="rounded-full font-bold flex w-fit bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md transition-all duration-200 hover:brightness-200 "
        style={{ padding: `${py} ${px}` }}
      >
        {text}

        {icon && (
          <span className="ml-2">
            <img src={icon} alt="" />
          </span>
        )}
      </Link>
    </div>
  );
}

export default Button;
