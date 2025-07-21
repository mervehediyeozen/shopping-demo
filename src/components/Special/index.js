import React from 'react'
import {  Heading , Box , Flex, Image, Text, HStack,  Badge , Stack} from '@chakra-ui/react'
import { useProductsContext } from '../../Contexts/ProductsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import femalefoto4 from '../../images/femalefoto4.jpg';



function Special() {
  const products = useProductsContext();
  const product1 = products.firstOne;
  return (
    <div>
        <Stack>
        <Box textAlign="center" borderBottom="1px" mt="5px" >
       <Heading size="md" >

        Geri Sayım
       </Heading>
       </Box>
        </Stack>
       <Flex direction="row" wrap="nowrap" justify="center" gap="2" p="5">
      
      
      {/* Ürün 1 */}
      <Box
        borderWidth="1px"
        borderColor="softBrown.700"
        width={["25%", "65%"]}  // Responsive boyutlandırma
        boxShadow="md"
        borderRadius="lg"
      >
        <Box>
          <Image
            src={femalefoto4}
            alt={product1.imageAlt}
            w="100%" // Genişlik tam uyumlu
            h="200px" // Sabit yükseklik
            objectFit="cover" // Resmi keserek uyum sağlar
            objectPosition="top" // Resmin ortasını göster
          />
        </Box>
        <Box p="4">
          <HStack>
            <Badge bg="softBrown.300" variant="solid">
              Superhost
            </Badge>
            <HStack gap="1" fontWeight="medium">
              <FontAwesomeIcon icon={faStar} size="sm" color="orange" />
              <Text>
                {product1.rating} ({product1.reviewCount} reviews)
              </Text>
            </HStack>
          </HStack>
          <Text fontWeight="medium" mt="2">
            {product1.title}
          </Text>
          <HStack mt="2" color="softGray.500">
            <Text>{product1.formattedPrice}</Text>
            <Text>• {product1.fav} fav</Text>
          </HStack>
        </Box>
      </Box>
      </Flex>
      
      
    </div>
  )
}

export default Special