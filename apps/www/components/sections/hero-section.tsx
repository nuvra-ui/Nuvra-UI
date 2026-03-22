"use client";

import { Button, Badge } from "@nuvra-ui/react";
import { CiStar } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import useGithubStars from "../../hooks/useGithubStars.ts";

const HeroSection = () => {
  const { stars } = useGithubStars();

  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      <h1 className="text-7xl md:text-9xl font-bold bg-linear-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
        Nuvra-UI
      </h1>
      <p className="-mt-3 text-center text-gray-700 text-base md:text-lg">
        Flexible, minimally styled components - your design, your way.
      </p>
      <div className="pt-3 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <a href="https://docs.nuvra-ui.com">
          <Button className="py-2 px-3 bg-teal-400/90 hover:bg-teal-400 w-40 text-lg">
            Start Building
          </Button>
        </a>
        <a href="https://github.com/nuvra-ui/nuvra-ui">
          <Button className="gap-2 py-2 px-3 text-lg w-40 bg-transparent hover:bg-gray-100 border border-gray-400 text-gray-600">
            <FaGithub />
            <p>GitHub</p>
            <p className="flex flex-row items-center font-light">
              {stars} <CiStar />
            </p>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
