import React from "react";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-700 hover:text-white"
    >
      {children}
    </Link>
  );
};

export default NavLink;
