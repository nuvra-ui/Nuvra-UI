import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-50 border border-gray-300 flex justify-center items-center">
      <div className="p-4 pt-8 flex max-w-7xl w-full grid grid-cols-4 gap-4">
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
    </div>
  );
};

export default Footer;
