import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-row gap-6 w-full justify-center md:justify-end px-6 py-2 items-center text-sm text-gray-700">
      <a href="https://docs.nuvra-ui.com" className="hover:text-black">
        Docs
      </a>
      <a
        href="https://docs.nuvra-ui.com/components/component-gallery.html"
        className="hover:text-black"
      >
        Component Gallery
      </a>
      <a
        href="https://docs.nuvra-ui.com/contributing/contributing.html"
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
