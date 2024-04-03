import { useForm } from "react-hook-form";
import {
  Box,
  Text,
  FormControl,
  Input,
  Flex,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const HeroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Box
        width="100%"
        padding="2rem"
        borderRadius="small"
        backgroundColor="white"
        color="gray.700"
      >
        <Text fontSize="xl" fontWeight="bold">
          Free PDF Guid
        </Text>
        <Text fontSize="lg">
          Complete the form below to download your guide
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input
              marginTop="1.3rem"
              id="name"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <Text fontSize="xl" color="red.400">
                {errors.name.type}
              </Text>
            )}
            <Flex
              gap={{ base: "0", sm: "1rem" }}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Input
                marginTop="1.3rem"
                id="email"
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <Text fontSize="xl" color="red.400">
                  {errors.email.type}
                </Text>
              )}
              <Input
                marginTop="1.3rem"
                id="phone"
                type="text"
                placeholder="Phone"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <Text fontSize="xl" color="red.400">
                  {errors.phone.type}
                </Text>
              )}
            </Flex>
            <Checkbox
              marginTop="1.3rem"
              id="gdpr"
              type="checkbox"
              placeholder="GDPR"
              {...register("gdpr", { required: true })}
            >
              I consent to having this website store my submitted info
            </Checkbox>
            {errors.gdpr && (
              <Text fontSize="xl" color="red.400">
                {errors.phone.type}
              </Text>
            )}
            <Button
              type="submit"
              colorScheme="blue"
              width="100%"
              fontSize="xl"
              padding="2rem"
              marginTop="2rem"
            >
              Download
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default HeroForm;
