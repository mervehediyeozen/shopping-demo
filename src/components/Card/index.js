import { Box, Badge, Text, HStack, Image, Button, Divider  , Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Yönlendirme için Link ekliyoruz
import { useLang } from '../../Contexts/LanguageContext';


function Card({ product, locale }) {
  const {messages} = useLang();


  return (
    <>
    <Box
      border="1px"
      borderColor="#b5ae98"
      width="250px"
      boxShadow="md"
      borderRadius="lg"
       height="auto"
    
      
    
    >
      <Link to={`/product/${product.id}`}>
        <Box     border="1px"
      borderColor="#b5ae98" >
          <Image
            src={product.image}
            alt={product.imageAlt[locale]} 
            w="100%"
            h="170px"
            objectFit="cover"
            objectPosition="top"
          />
        </Box>
        <Flex flexDirection="column" p="3" bg="#f5f2f0"  w="full"
        justifyContent="center">
          <Box justifyItems="center" > 
              <Text fontWeight="medium" fontSize="15px"  textDecoration="underline" color="#3b3a36">
            {product.title[locale]}
          </Text>
          </Box>
           
           <Flex flexDirection="row" justifyContent="space-evenly" h="24px">
            <Box>
            <Badge bg="softNav2.500" variant="solid" >
              Superhost
            </Badge>
            </Box>
           <Box>
            <Box  display="flex" gap="4px"> 
              <Text fontSize="12px" color="#636357">• {product.fav} fav</Text>
              <FontAwesomeIcon icon={faStar} size="sm"  color="orange" />
              
           </Box>
           </Box>
        
          </Flex>
          <Divider borderColor="#9c9a80" />
     
          <Flex flexDirection="row" w="full" h="30px" justifyContent="space-around">
            <Box h="full">
               <Button size="xs" variant="ghost" fontSize="13px" color="softGray.700"  _hover={{bg:"softNav2.100"}}>
              {messages[locale].goLink}
            </Button>
            </Box>
            <Box h="full">
            <Text fontSize="12px" color="#8a9974" fontFamily="cursive">{product.price}$</Text>
            </Box>
         
          </Flex>
        
        </Flex>
      </Link>
    </Box>
    </>
  );
  
}

export default Card;


