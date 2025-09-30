import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const TopNav = () => {
  return (
    <nav>
      <div className="container mx-auto p-5 flex items-center justify-between bg-[#FBFBFB] ">
        {/* logo */}
        <div className="logo">
          <h1 className="text-[#1B1B1B] font-bold ">Online Store</h1>
        </div>
        {/* search */}
        <div className=" relative">
          <CiSearch className=" absolute top-1/2 -translate-y-1/2 left-0" />
          <input
            className="w-[545px] px-[19px] py-[15px] rounded-[12px] bg-[#F1F1F1]"
            type="search"
            placeholder="Search for products, brands, or categories..."
          />
        </div>
        {/* icons */}
        <div className="icon flex gap-1 items-center ">
          <CiHeart className="w-[22px] h-[20.5px] text-[#C3C3C3] cursor-pointer " />
          <IoCartOutline className="w-[22px] h-[20.5px] text-[#C3C3C3] cursor-pointer " />
          <button className="cursor-pointer rounded-[11px] w-[138px] h-[51px] bg-[#C4E1F6] flex gap-2 items-center justify-center">
            <CiUser />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
