import Link from "next/link";
import { BsRobot } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="text-sky-500 font-bold text-lg py-4 flex gap-2 items-center">
        <BsRobot className="text-2xl" />
        <h1>Tegar Dev</h1>
      </div>
      <div className="flex gap-1 items-center">
        <Link
          href={`https://github.com/tegarsaputradev`}
          className="flex gap-2 items-center hover:bg-sky-500 p-1 rounded-full"
          target="_blank"
        >
          <div className="p-1 rounded-full bg-white">
            <TbBrandGithubFilled />
          </div>
          <p className="text-white text-sm">Github</p>
        </Link>
        <Link
          href={`https://facebook.com/tegar7jr`}
          className="flex gap-2 items-center hover:bg-sky-500 p-1 rounded-full"
          target="_blank"
        >
          <div className="p-1 rounded-full bg-white">
            <FaFacebook className="text-sky-500" />
          </div>
          <p className="text-white text-sm">Facebook</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
