import DefaultLayout from "@/features/Layouts/DefaultLayout";
import { usePropertyFormat } from "@/features/common/Hooks/usePropertyFormat";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const PropertySingle = ({ property }) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
    furnished,
  } = usePropertyFormat(property);
  return (
    <DefaultLayout>
      <Box backgroundColor="##f7f8f9" paddingY="3rem">
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap="5"
          maxWidth="1280px"
          margin="0 auto"
        >
          <GridItem>
            <Text>
              {propertyType} {title}
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default PropertySingle;

export async function getServerSideProps(context) {
  const property = require("@/features/data/property");
  return {
    props: { property },
  };
}
