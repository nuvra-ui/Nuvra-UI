import { FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-white flex flex-row justify-between text-sm text-gray-700 py-1 px-2">
      <a href="/imprint">Imprint</a>
      <p>
        Made with ❤️ by{" "}
        <a href="https://github.com/brainlesslukas" className="text-black">
          brainlesslukas
        </a>
      </p>
      <div className="flex flex-row gap-2">
        <a href="https://github.com/nuvra-ui">
          <FaGithub />
        </a>
        <a href="https://www.npmjs.com/org/nuvra-ui">
          <SiNpm />
        </a>
      </div>
    </div>
  );
};

export default Footer;
