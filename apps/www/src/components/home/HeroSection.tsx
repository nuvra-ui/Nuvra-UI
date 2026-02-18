import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "../common/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "../../ui/Button";

const HeroSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".icon",
      { x: -50, opacity: 0 },
      { x: 0, stagger: 0.2, opacity: 1, duration: 1, ease: "bounce.out" },
    );
    gsap.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 3 });
    gsap.fromTo(
      ".arrow",
      { y: -20 },
      { y: -0, repeat: -1, duration: 1, ease: "power1.inOut", yoyo: true },
    );
  });

  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-center items-center w-full">
        <div className="header flex flex-col text-center">
          <h1 className="text-7xl md:text-9xl font-bold bg-linear-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
            Nuvra-UI
          </h1>
          <p className="-mt-3 text-center text-gray-700 text-lg">
            Build flexible, unstyled components - your design, your way.
          </p>
          <div className="flex flex-col lg:flex-row mx-auto gap-4 pt-4">
            <a href="https://docs.nuvra-ui.com/">
              <Button
                size="lg"
                className="bg-teal-400/90 hover:bg-teal-400 text-white"
              >
                Get Started
              </Button>
            </a>
            <a href="https://docs.nuvra-ui.com/components/button.html">
              <Button
                size="lg"
                className="bg-transparent text-gray-700 hover:bg-secondary border border-border gap-2"
              >
                <p>Explore Components</p> <FaArrowRight />
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="arrow w-full flex items-center justify-center p-2 text-xl text-gray-700">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default HeroSection;
