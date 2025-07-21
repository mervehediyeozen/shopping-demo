import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FixedTop from '../../components/FixedTop';
import { sortProducts } from '../../Functions/Array';
import { useProductsContext } from '../../Contexts/ProductsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Flex , Box , Text  , Image , Heading , Grid, Divider} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const ProductKindPages = () => {
  const { kind } = useParams();
  const products = useSelector((state) => state.shop.currentLink);
  const {locale} = useProductsContext();
  const filteredProducts = products.filter(p => p.kind === kind);
  const items = filteredProducts.map((item) => {return item;})
  const chunkedItems = sortProducts(items, 4);

  return (
    <>
    <Flex flexDirection="column">
        <Box mb="120px">
            <FixedTop/>
        </Box>
      
        <Box w={["100%" , "100%"]} borderColor="#5c584e" bg="#ede7df"  >
            <Flex flexDirection="row" justifyContent="center">
                <Box borderRight="4px" borderLeft="4px" borderTop="2px" p="20px" borderColor="#e3d8ca"  bg="#faf9f7"> 
        {chunkedItems.map((group, index) => (
                              
                           <Grid
                             key={index}
                             templateColumns="repeat(4, 1fr)"
                             gap={4}
                             ml="10px"
                             p="10px"
                             pb="40px"
                           >
                             
                             {group.map((product) => (
                                <Link to={`/product/${product.id}`}>
                               <Box
                                 h="320px"
                                 key={product._id}
                                 border="1px solid"
                                 borderColor="#adac9a"
                                 textAlign="center"
                                 bg="#ffffff"
                                
                                 w="270px"
                                 boxShadow="xl"
                                 p="10px"
                               
                               >
                                <Image src={product.image} width="300px" h="170px" objectFit="cover" objectPosition="top" />
                                <Box bg="#ede8dd" mt="5px"  border="1px solid"
                                 borderColor="#adac9a" >
                                   <Heading
                                     fontSize="16px"
                                     mt="10px"
                                     textAlign="center"
                                     color="black"
                                     fontWeight="hairline"                              >
                                     
                                     {product.title[locale]}
                                   </Heading>
                                   <Flex flexDirection="row" justifyContent="space-around" alignContent="center">
                                    <Box>
                                    <Text fontSize="13px" color="black" >• {product.fav} fav</Text>
                                    </Box>
                                    <Box display="flex" gap="8px">
                                              
                                                 <FontAwesomeIcon icon={faStar} size="sm"  color="orange" /> 
                                                 </Box>
                                                 </Flex>
                                                <Flex w="full" flexDirection="row"  >
                                             <Box w="full" borderTop="1px" borderColor="#adac9a"display="flex" bg="#f2ecdc" justifyContent="space-evenly"  alignItems="center"  >
                                               <Box ml="20px" mt="10px">
                                                <Text color="#363430" fontSize="14px" fontWeight="bold"  textAlign="center" fontFamily="revert" >
                                           {product.id}
                                           </Text>
                                              </Box>
                                              <Divider orientation="vertical" borderColor="#adac9a"  />
                                              <Box mr="20px" mt="10px">
                                              <Text color="#363430"fontSize="14px" fontWeight="bold"  textAlign="center" fontFamily="revert" >
                                     {product.price} 
                                   </Text>
                                   </Box>
                                   </Box>
                                   </Flex>
                                     
                             
                               </Box>
                               </Box>
                               </Link>
                             ))}
                           </Grid>
                           
         ))}
      </Box>
      </Flex>
     </Box>
    </Flex>
     </>
  );
};
export default ProductKindPages;