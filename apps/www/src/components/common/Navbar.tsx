import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-row gap-6 w-full justify-center md:justify-end px-6 py-2 items-center text-sm text-gray-700">
      <a href="https://docs.nuvra-ui.com" className="hover:text-black">
        Docs
      </a>
      <a href="#" className="hover:text-black">
        Showcase
      </a>
      <a
        href="https://docs.nuvra-ui.com/contributing.html"
        className="hover:text-black"
      >
        Contribute
      </a>
      <a href="https://github.com/nuvra-ui" className="hover:text-black">
        <FaGithub />
      </a>
    </nav>
  );
};

export default Navbar;
