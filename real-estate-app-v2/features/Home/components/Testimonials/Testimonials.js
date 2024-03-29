import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { testimonials } from "./testimonialsConst";
import TestimonialCard from "./Componets/TestimonialCard";

const Testimonials = () => {
  return (
    <Box backgroundColor="blue.50">
      <Box
        maxWidth="1280px"
        margin="0 auto"
        paddingY={{ base: "3rem", sm: "6rem" }}
      >
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          textAlign="center"
        >
          Testimonials
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="light"
          marginTop="1rem"
          marginBottom="3rem"
          paddingX="2rem"
          textAlign="center"
        >
          Here's what our valued clients have to say
        </Text>
        <SimpleGrid
          columns="3"
          minChildWidth="300px"
          gap={{ base: "0.5rem", sm: "2.5rem" }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
