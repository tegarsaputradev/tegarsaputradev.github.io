import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="border-t py-4 mt-20 mb-2 text-white text-xs flex justify-between">
      <p className="flex gap-1">
        <span>
          Copyright © 2022
          <span className="name">&nbsp;by Tegar Saputra</span>
        </span>
      </p>
      <div className="flex gap-1 items-center">
        <MdOutlineMailOutline className="text-lg" />
        <p>tegaracs.ti@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
