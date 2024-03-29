import { useEffect, useState } from "react";

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
    const updateMedia = () => {
      if (window.innerWidth > 900) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  console.log(isDesktop);
  return { isDesktop };
};
