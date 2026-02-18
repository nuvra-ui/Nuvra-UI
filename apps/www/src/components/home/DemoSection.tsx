import Tag from "../common/Tag";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FiTerminal } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const DemoSection = () => {
  const DemoSectionData = [
    {
      component: (
        <div className="w-full bg-secondary col-span-1 lg:col-span-2 lg:h-64 sm:h-68 h-72 rounded-2xl border border-gray-200 relative overflow-hidden">
          <div className="pt-3 pl-3 relative z-10 ">
            <h2 className="text-xl">Seamless integration</h2>
            <p className="text-gray-700 text-md">
              Nuvra-UI offers easy integration and clean results
            </p>
          </div>
          <div className="lg:flex flex-col justify-center space-y-2 p-2">
            <Tag className="lg:absolute relative lg:bottom-[20%] lg:right-[30%]">
              <BiLogoTailwindCss className="mr-1 text-xl" />
              TailwindCSS
            </Tag>
            <Tag className="lg:absolute relative lg:top-[40%] lg:right-[10%]">
              <FiTerminal className="mr-1 text-xl" />
              CLI-based installation
            </Tag>
            <Tag className="lg:absolute relative lg:bottom-[10%] lg:left-[10%]">
              <FaBookOpen className="mr-1 text-xl" />
              Open Source
            </Tag>
            <Tag className="lg:absolute relative lg:top-[35%] lg:left-[10%]">
              <SiTypescript className="mr-1 text-xl" />
              TypeScript/JavaScript
            </Tag>
          </div>

          <div className="size-24 z-0 bg-teal-400 absolute bottom-[-10%] right-[-5%] rounded-full blur-3xl" />
          <div className="absolute z-0 inset-x-0 bottom-[-5%] h-46 grid-bg" />
        </div>
      ),
    },
    {
      component: (
        <div className="w-full bg-secondary col-span-1 h-64 rounded-2xl border border-gray-200 relative overflow-hidden">
          <div className="pt-3 pl-3 relative z-10 ">
            <h2 className="text-xl">Build faster. Build better.</h2>
            <p className="text-gray-700 text-md">
              10+ Components (more coming soon!)
            </p>
          </div>
          <div className="flex justify-center items-center">
            <AiFillThunderbolt className="text-[180px] z-10 text-yellow-300/80" />
          </div>

          <div className="size-24 bg-teal-400 absolute bottom-[-10%] left-[-5%] rounded-full blur-3xl" />
          <div className="absolute inset-x-0 bottom-[-5%] h-46 grid-bg" />
        </div>
      ),
    },
    {
      component: (
        <div className="w-full bg-secondary col-span-1 h-64 rounded-2xl border border-gray-200 relative overflow-hidden">
          <div className="pt-3 pl-3 relative z-10 ">
            <h2 className="text-xl">Open Source</h2>
            <p className="text-gray-700 text-md">
              Join our community on GitHub
            </p>
          </div>
          <div className="flex justify-center pt-6">
            <FaStar className="text-8xl lg:text-9xl z-10 text-yellow-300/80" />
            <h2 className="text-8xl lg:text-9xl z-10 font-medium text-gray-700">
              2
            </h2>
          </div>

          <div className="size-24 bg-teal-400 absolute bottom-[-10%] right-[-5%] rounded-full blur-3xl" />
          <div className="absolute inset-x-0 bottom-[-5%] h-46 grid-bg" />
        </div>
      ),
    },
    {
      component: (
        <div className="w-full bg-secondary col-span-1 lg:col-span-2 h-64 rounded-2xl border border-gray-200 relative overflow-hidden">
          <div className="pt-3 pl-3 relative z-10 ">
            <h2 className="text-xl">Ready for an international performance</h2>
            <p className="text-gray-700 text-md">
              We make global-ready interfaces simple and elegant stage
            </p>
          </div>
          <div>
            <FaGlobe className="text-[250px] lg:text-[300px] z-10 text-teal-400 absolute bottom-[-45%] right-[-10%]" />
          </div>

          <div className="size-24 bg-teal-400 absolute bottom-[-10%] left-[-5%] rounded-full blur-3xl" />
          <div className="absolute inset-x-0 bottom-[-5%] h-46 grid-bg" />
        </div>
      ),
    },
  ];

  return (
    <section
      id="demo"
      className="relative grid lg:grid-cols-3 grid-cols-1 gap-4 max-w-5xl mx-auto p-5"
    >
      {DemoSectionData.map((item) => (
        <>{item.component}</>
      ))}
    </section>
  );
};

export default DemoSection;
