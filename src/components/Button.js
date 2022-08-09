import React from "react";

function Button({ py, px, text }) {
  return (
    <div>
      <a
        href="#"
        className="rounded-full font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white transition-all duration-200 hover:brightness-200"
        style={{ padding: `${py} ${px}` }}
      >
        {text}
      </a>
    </div>
  );
}

export default Button;
