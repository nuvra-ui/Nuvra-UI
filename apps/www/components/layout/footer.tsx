import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-50 border border-gray-300 flex justify-center items-center flex-col">
      <div className="p-4 pt-8 flex max-w-7xl w-full flex-col sm:grid sm:grid-cols-4 gap-4">
        <div className="text-lg flex flex-row items-start gap-2">
          <span>
            <Image src="/logo.svg" alt="Logo" width={25} height={25} />
          </span>
          <span>Nuvra-UI</span>
        </div>

        <div className="flex flex-col">
          <p className="text-lg">Documentation</p>
          <div className="flex flex-col text-gray-400">
            <a>Installation</a>
            <a>Components</a>
            <a>Contributing</a>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-lg">Communtiy</p>
          <div className="flex flex-col text-gray-400">
            <a>GitHub</a>
            <a>Discord</a>
            <a>X</a>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-lg">Legal</p>
          <div className="flex flex-col text-gray-400">
            <a>Imprint</a>
          </div>
        </div>
      </div>
      <div className="mt-2 bg-gray-300 flex max-w-7xl w-full h-[1px]" />

      <div className="max-w-7xl p-4 flex-col-reverse sm:flex-row-reverse flex w-full justify-between text-sm text-gray-400">
        <p className="flex items-center gap-1">
          Made with{" "}
          <span className="text-red-600">
            <FaHeart />
          </span>{" "}
          by brainlesslukas
        </p>
        <p className="flex items-center gap-1">
          MIT {currentYear} <FaRegCopyright /> Nuvra-UI
        </p>
      </div>
    </div>
  );
};

export default Footer;
