import { useState } from "react";
import { HiBars3BottomLeft, HiOutlineXMark } from "react-icons/hi2";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const initial = "flex  items-center justify-between";
  return (
    <div className="relative grid grid-cols-[130px_1fr] py-5 gap-8 text-white items-center px-10 sp:flex sp:justify-between">
      <img src="./images/logo.svg" alt="" className="h-10 w-32" />

      <button
        onClick={() => setIsOpen(true)}
        className="absolute right-10 sp:hidden"
      >
        <HiBars3BottomLeft style={{ fontSize: "3rem" }} />
      </button>

      <div
        className={`h-screen absolute  ${
          isOpen ? "w-screen" : "w-0 left-[-44px]"
        } transition-all duration-300 text-black font-bold top-[0px] text-xl  backdrop-blur-sm`}
      >
        <button
          className="absolute right-10 top-4"
          onClick={() => setIsOpen(false)}
        >
          <HiOutlineXMark style={{ fontSize: "3rem" }} />
        </button>
        <div className={`flex flex-col  gap-11 items-center mt-[100px]`}>
          <button>Features</button>
          <button>Team</button>
          <button>Sign In</button>
        </div>
      </div>
      <div className="sp:flex sp:gap-6 hidden">
        <div>Features</div>
        <div>Team</div>
        <div>Sign In</div>
      </div>
    </div>
  );
}

export default Nav;
