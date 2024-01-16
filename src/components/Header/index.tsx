import { BellIcon } from "@heroicons/react/24/outline";
import ProfileImg from "../../assets/profile.png";
import Search from "../Search";

function Header() {
  return (
    <div className=" fixed z-10 flex w-full justify-between bg-slate-0 px-10 py-5	">
      <div className="ml-64 ">
        <Search />
      </div>
      <div className="flex">
        <BellIcon className="w-[35px]" />
        <img src={ProfileImg} className=" rounded-full ml-10" alt="" />
      </div>
    </div>
  );
}
export default Header;
