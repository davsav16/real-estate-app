import { Image } from "@chakra-ui/react";
import { partners } from "./partnersConst";

const Partners = () => {
  return (
    <>
      {partners.map((partner) => (
        <Image
          key={partner}
          src={partner}
          alignSelf="center"
          padding={{ base: "2rem", sm: "3rem" }}
          filter="grayscale(1)"
          opacity="0.4"
        />
      ))}
    </>
  );
};

export default Partners;
