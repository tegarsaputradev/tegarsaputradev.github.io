import Link from "next/link";

const DownloadCVButton = () => {
  return (
    <Link
      href="https://github.com/tegarsaputradev/tegarsaputradev.github.io/raw/main/CV.pdf"
      className="bg-sky-700 px-6 py-2 rounded-md text-white font-semibold text-sm hover:bg-sky-900"
    >
      Download CV
    </Link>
  );
};

export default DownloadCVButton;
