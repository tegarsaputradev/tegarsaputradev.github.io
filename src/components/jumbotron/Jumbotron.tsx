import { BiCool } from "react-icons/bi";
import DownloadCVButton from "../button/DownloadCVButton";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineWhatsapp } from "react-icons/md";

const Jumbotron = () => {
  return (
    <>
      <div className="sm:flex gap-2">
        <div className="py-2 md:py-10 max-w-3xl text-lg">
          <h2 className="text-white font-bold text-3xl flex items-center gap-4 py-8">
            Hi there, I`m <span className="text-sky-500">Tegar</span>
            <span className="text-slate-200">
              <BiCool />
            </span>
          </h2>
          <p className="text-white tracking-widest leading-loose font-[400]">
            Welcome to my portfolio website, where I showcase a variety of
            projects as a full-stack developer. Here, you’ll find work that
            highlights my skills in both front-end and back-end development.
            Explore my projects to see how I can help bring your ideas to life
            through innovative web solutions!
          </p>
          <div className="flex gap-2 items-center h-[50px] mt-8">
            <DownloadCVButton />
            <Link
              href="https://api.whatsapp.com/send/?phone=62816827249"
              target="_blank"
              className="flex items-center text-white h-9 rounded-xl border-2 border-teal-600 bg-teal-600 px-3 hover:bg-teal-700 hover:border-teal-700"
            >
              <MdOutlineWhatsapp />
            </Link>
          </div>
        </div>
        <div className="flex items-center md:justify-end justify-center w-full">
          <div className="relative w-[300px] h-[300px] mt-8">
            <Image
              src={`/images/killua.png`}
              alt="portofolio tegar"
              objectFit="content"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
