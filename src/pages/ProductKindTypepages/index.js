import FixedTop from '../../components/FixedTop';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Text, Flex, Image , Grid} from '@chakra-ui/react';
import { useProductsContext } from '../../Contexts/ProductsContext';
import MainPageSlide from '../../components/MainPageSlide';
import { sortProducts } from '../../Functions/Array';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import backgroundImage from '../../images/back66.jfif'
import { useLang } from '../../Contexts/LanguageContext';
const FilteredProductsPage = () => {
  const {messages} = useLang();
  const {locale} =useProductsContext();
  const { kind, type } = useParams();
  const { filterProducts } = useSelector((state) => state.shop);
  const chunkedItems = sortProducts(filterProducts , 3)
  const isEmpty = chunkedItems.length === 0 ;
  const isWoman  = kind === "woman";
  return (
    <Flex flexDirection="column" minH="100vh" justifyContent={isEmpty ? "" :"space-between"}>
        <Box zIndex="999">
            <FixedTop/>
        </Box>
    <Box  mt={isEmpty ? "80px" :"10px"}  h={isEmpty ? "560px" :""}>
        <Flex flexDirection="row"  mt={isWoman ? "80px" :""}>
              <Box w={["15%" , "23%"]} >
            <MainPageSlide/>
        </Box>
        <Box w={["85%" , "77%"]} mt={isEmpty ? "80px" :"40px"} bg="#ebe5d5" justifyItems="center" pl="50px" border="1px"   borderColor="#d4cdba" pb="20px">
          <Flex flexDirection="column" pt="25px">
            <Box>
              <Text fontSize="22px" fontWeight="light"  textDecoration="underline" textDecorationColor="#787367" textDecorationThickness="from-font"> {kind} - {type} {messages[locale].productsOfSomething} </Text>
            </Box>
            <Box>
      <Flex wrap="wrap" pt="15px">
        {isEmpty? (
          <Text color="#5e5b50">Uygun ürün bulunamadı.</Text>
        ) : (
          chunkedItems.map((products , index) => (

          
           <Grid
              key={index}
             templateColumns={`repeat(4, 1fr)`}
               gap="3px"
               p="10px"
          >
             {products.map((product) => (
                  <Link to={`/product/${product.id}`}>
            <Box
              borderWidth="1px"
              p={3}
              h="245px"
              bg="whiteAlpha.800"
              rounded="md"
              w="275px"
              shadow="md"
            >
              <Image
                border="1px"
                borderColor="#ded6ca"
                src={product.image}
                alt={product.imageAlt[locale]}
                w="full"
                objectFit="cover"
                objectPosition="top"
                h="170px"
                
              />
              <Box  mt="10px" >
                <Flex flexDirection="row" justifyContent="space-between">
                  <Box>
              <Text fontWeight="normal" fontSize="14px">
                {product.title[locale]}
              </Text>
              </Box>
              <Box mr="10px">
              <Text  color="gray.600" fontSize="12px" textDecoration="underline" textDecorationColor="#b8afa2">
                {product.price}
              </Text>
              </Box>
              </Flex>
              </Box>
            </Box>
            </Link>
           ))}
            </Grid>
          ))
          
        )}
        
        </Flex>
        </Box>
        </Flex>
        </Box>
         <Box w={["5%" , "10%"]} bg="white"></Box>
      </Flex>
    </Box  >
    <Box as='footer'  mt={isEmpty ? "20px" :"10px"}>
      <Footer />
    </Box>
    </Flex>
  );
};

export default FilteredProductsPage;