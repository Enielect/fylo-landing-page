import { useState } from "react";

function Nav() {
  const initial = "flex  items-center justify-between";
  return (
    <div className=" grid grid-cols-[130px_1fr] py-5 gap-8 text-white items-center px-10 lg:flex lg:justify-between">
      <img src="./images/logo.svg" alt="" className="h-10 w-32" />

      <div className="flex justify-between lg:gap-8">
        <div>Features</div>
        <div>Team</div>
        <div>Sign In</div>
      </div>
    </div>
  );
}

export default Nav;
