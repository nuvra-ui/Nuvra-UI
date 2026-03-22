import { useEffect, useState } from "react";

const useGithubStars = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/nuvra-ui/nuvra-ui",
        );
        const data = await res.json();
        setStars(data.stargazers_count);
      } catch (err) {
        setStars(0);
      }
    };

    fetchStars();
  }, []);

  return { stars };
};

export default useGithubStars;
