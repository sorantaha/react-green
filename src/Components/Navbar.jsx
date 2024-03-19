import { Link } from "react-router-dom";
import logo from "src/logo.svg";
import Button from "./Button";
import useCardShowStore from "src/Store/useCardShowStore";

export default function Navbar() {
  const { isOpen, setOpen } = useCardShowStore();
  console.log(isOpen);
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-20">
      <nav className="flex justify-between items-center w-5/6 h-[5rem] mx-auto">
        <div className="flex items-center">
          {" "}
          {/* Left Side of navigation bar */}
          <Link
            to={"/"}
            className="flex justify-center items-center text-[1.625rem] text-[#088516] tracking-[0.125rem] font-semibold "
          >
            <img src={logo} alt="React Logo" className="" />
            REENERY
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to={"/ProductSearch"}
            className="border-[1px] bg-[#088516] text-white font-semibold w-36 h-10 flex items-center text-xl gap-4 rounded-full"
          >
            <img src="Search-White.png" className="w-8 h-8 ml-2" alt="" />
            Search
          </Link>
          {/* <input
              className="w-[20rem] h-10 bg-gray-200 rounded-full px-3 outline-none"
              type={"text"}
              placeholder={"Search"}
            /> */}
          <div className="flex place-content-between gap-5 text-[#088516] text-[1rem] font-bold translate-x-[1.75rem]">
            <Link to={"/"}>Home</Link>
            <Link to={"/Product"}>Product</Link>
            <Link to={"/About"}>About</Link>
          </div>
        </div>
        {/* Right Side of navigation bar */}
        <div className="h-7 flex justify-between gap-6 text-[#088016] text-[1rem] font-semibold ml-8">
          <Link to={"/Saved"}>
            <img src="Saved.png" className="w-7 h-full" alt="" />
          </Link>
          <div
            onClick={() => {
              setOpen();
            }}
          >
            <Button>
              <img src="Add-To-Cart.png" className="w-7 h-full" alt="" />
            </Button>
          </div>
          {false ? (
            <Link to={"/SignIn"}>
              <img src="User.png" className="w-7 h-full" alt="" />
            </Link>
          ) : (
            <Link to={"/Account"}>
              <img src="User.png" className="w-7 h-full" alt="" />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
