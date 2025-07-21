import { useParams , Link } from "react-router-dom";
import FixedTop from "../../components/FixedTop";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mostLikedProducts } from "../../redux/shopSlice";
import { useProductsContext } from "../../Contexts/ProductsContext";
import { Flex, Box, Image, Text, VStack, HStack , Button } from "@chakra-ui/react";
import { sortProducts } from "../../Functions/Array";
import { useLang } from "../../Contexts/LanguageContext";

function ProductKindFavs() {
const {messages , locale} = useLang() ;
const { kind } = useParams();
const dispatch = useDispatch();
const [visibleRowsLess, setVisibleRowsLess] = useState(1);
const [visibleRowsNormal, setVisibleRowsNormal] = useState(1);
const [visibleRowsMore, setVisibleRowsMore] = useState(1);
const [showAll, setShowAll] = useState({
  mostFav: false,
  nlFav: false,
  lFav: false
});
  const { products } = useProductsContext();
  const mostLiked = useSelector((state) => state.shop.mostLiked);

  useEffect(() => {
    if (products && Object.values(products).length > 0) {
      dispatch(mostLikedProducts({ link: kind, product: Object.values(products) }));
    }
  }, [kind, dispatch, products]);

  useEffect(() => {
    console.log("mostLiked redux state güncellendi:", mostLiked);
  }, [mostLiked]);

  if (!mostLiked) return <Box textAlign="center" mt="50px">Yükleniyor...</Box>;

  if (mostLiked.length === 0) return <Box textAlign="center" mt="50px">Ürün bulunamadı.</Box>;


  const lessFav =  mostLiked.filter((pro) => pro.fav <= 2000 && pro.fav >= 1000);
  const isLessFav = lessFav.length > 4;
  const normalFav = mostLiked.filter((pro) =>  pro.fav <= 3000 && pro.fav > 2000) ;
  const isNormalFav = normalFav.length > 4;
 const  moreFav =  mostLiked.filter((pro) => pro.fav >= 4000 );
   const ismoreFav = moreFav.length > 4;
  const chunkedItems = sortProducts(lessFav, 4);
  const chunkedItems2 = sortProducts(normalFav, 4)
  const chunkedItems3 = sortProducts(moreFav, 4)
const visibleNormalItems = showAll.nlFav ? chunkedItems2 : chunkedItems2.slice(0, visibleRowsNormal);
const visibleLessItems = showAll.lFav ? chunkedItems : chunkedItems.slice(0, visibleRowsLess);
const visibleMoreItems = showAll.mostFav ? chunkedItems3 : chunkedItems3.slice(0, visibleRowsMore);
const showAllProductByCategory = (category) => {
  setShowAll((prev) => ({ ...prev, [category]: true }));
};
  

  return ( 
    <Flex flexDirection="column">
      <Box>
        <FixedTop />
      </Box>

      <Box mt="120px" >
      {moreFav.length > 0  && (
        <Flex flexDirection="column"  bg="#faf8f2"borderBottom="1px" borderColor="#ebe2ca">
            <Box m="25px">
                <Flex flexDirection="row" justifyContent="space-between" >
                    <Box display="flex" >
                    <Box >
                  <Text fontSize="20px" fontWeight="light" color="#54524b">
                   {messages[locale].mostLiked}
                </Text>
                    </Box>
                    <Box ml="10px">
                        <Text fontSize="20px" fontWeight="light" color="#54524b">
                          4.000+ FAV
                        </Text>
                        
                    </Box>
                    </Box>
                    {ismoreFav && (
                    <Box>
                        <Button variant="ghost" fontSize="20px" fontWeight="light" color="#54524b" _hover={{bg:"inherit", color:"#262624" , textDecoration:"underline" , textDecorationColor:"from-font"}}
                        onClick={() => showAllProductByCategory("mostFav")}
                        >
                            {messages[locale].showAll}
                        </Button>

                    </Box>
                    )}
              
                </Flex>
            </Box>
        
        {visibleMoreItems.map((row, rowIndex) => (
          <Flex key={rowIndex} gap={5} mb={8} flexWrap="wrap" justify="center">
            {row.map((product) => (

              <Box
                key={product.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                width="250px"
                p={4}
                boxShadow="md"
                _hover={{ boxShadow: "2xl" }}
              >
                <Link to={`/product/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.imageAlt?.tr || "Ürün"}
                  objectFit="cover"
                  objectPosition="top"
                  w="100%"
                  h="170px"
                  borderRadius="md"
                />
                <VStack align="start" mt={4} spacing={1}>
                  <Text fontWeight="medium" fontSize="16px">
                    {product.title?.tr}
                  </Text>
                   <HStack gap={5}>
                  <Text color="gray.500" fontSize="14px">
                    {product.brand} - {product.style}
                  </Text>
                  <Text fontWeight="medium" color="green.600">
                    {product.formattedPrice?.tr || product.price + "₺"}
                    
                  </Text>
                  </HStack>
                </VStack>
                </Link>
              </Box>
            ))}
          </Flex>
        ))}
          
      
              {visibleRowsMore < chunkedItems3.length && (
      <Box textAlign="center" mt="10px">
        <Text
          cursor="pointer"
          fontWeight="bold"
          color="#59564d"
          _hover={{bg:"inherit" , color:"#42413c" , textDecoration:"underline" , textDecorationColor:"#59564d"}}
          onClick={() => setVisibleRowsMore((prev) => prev + 1)}
        >
          {messages[locale].showMore}
        </Text>
      </Box>
        )}
       
        </Flex>
          )}
        <Box>
          {normalFav.length > 0 && (
            <Flex flexDirection="column"  bg="#f5f0e1"borderBottom="1px" borderColor="#ebe2ca">
                  <Box m="25px">
                <Flex flexDirection="row" justifyContent="space-between" >
                    <Box display="flex" >
                    <Box >
                  <Text fontSize="20px" fontWeight="light" color="#54524b">
                      {messages[locale].liked}
                </Text>
                    </Box>
                    <Box ml="10px">
                        <Text fontSize="20px" fontWeight="light" color="#54524b">
                          3.000+ FAV
                        </Text>
                        
                    </Box>
                    </Box>
                    {isNormalFav && (
                    <Box>
                        <Button variant="ghost" fontSize="20px" fontWeight="light" color="#54524b" _hover={{bg:"inherit", color:"#262624" , textDecoration:"underline" , textDecorationColor:"from-font"}}
                        onClick={() => showAllProductByCategory("nlFav")}
                        >
                            {messages[locale].showAll}
                        </Button>

                    </Box>
              )}
                </Flex>
            </Box>
            <Box>
        
                {visibleNormalItems.map((row, rowIndex) => (
          <Flex key={rowIndex} gap={5} mb={8} flexWrap="wrap" justify="center">
            {row.map((product) => (
              <Box
                key={product.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                width="250px"
                p={4}
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              >
                <Link to={`/product/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.imageAlt?.tr || "Ürün"}
                  objectFit="cover"
                  w="100%"
                  h="200px"
                  borderRadius="md"
                />
                <VStack align="start" mt={4} spacing={1}>
                  <Text fontWeight="bold" fontSize="lg">
                    {product.title?.tr}
                     {product.id}
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    {product.brand} - {product.style}
                  </Text>
                  <Text fontWeight="medium" color="green.600">
                    {product.formattedPrice?.tr || product.price + "₺"}
                  </Text>
                </VStack>
                </Link>
              </Box>
            ))}
          </Flex>
        ))}
         {visibleRowsNormal < chunkedItems2.length && (
             <Box textAlign="center">
        <Text
          cursor="pointer"
          fontWeight="bold"
          color="blue.500"
          onClick={() => setVisibleRowsMore((prev) => prev + 1)}
        >
           {messages[locale].showMore}
        </Text>
      </Box>

         )}
     
        </Box>
        </Flex>
        )}
        </Box>
         <Box>
          {lessFav.length > 0  && (
             <Flex flexDirection="column"  bg="#f7f4e9"  borderBottom="1px" borderColor="#ebe2ca">
              <Box m="25px">
                 <Flex flexDirection="row" justifyContent="space-between">
                    <Box display="flex" >
                    <Box >
                  <Text fontSize="20px" fontWeight="light" color="#54524b">
                     {messages[locale].lessLiked}
                </Text>
                    </Box>
                    <Box ml="10px">
                        <Text fontSize="20px" fontWeight="light" color="#54524b">
                          2.000+ FAV
                        </Text>
                        
                    </Box>
                    </Box>
                    {isLessFav && (
                    <Box>
                        <Button variant="ghost" fontSize="20px" fontWeight="light" color="#54524b" _hover={{bg:"inherit", color:"#262624" , textDecoration:"underline" , textDecorationColor:"from-font"}}
                        onClick={() => showAllProductByCategory("mostFav")}
                        >
                           {messages[locale].showAll}
                        </Button>
                  
                   
                  </Box>
                  )}
                  </Flex>
                  </Box>
       
          
                {visibleLessItems.map((row, rowIndex) => (
          <Flex key={rowIndex} gap={5} mb={8} flexWrap="wrap" justify="center">
            {row.map((product) => (
              <Box
                key={product.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                width="250px"
                p={4}
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              >
                <Link to={`/product/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.imageAlt?.tr || "Ürün"}
                  objectFit="cover"
                  w="100%"
                  h="200px"
                  borderRadius="md"
                />
                <VStack align="start" mt={4} spacing={1}>
                  <Text fontWeight="bold" fontSize="lg">
                    {product.title?.tr}
                     {product.id}
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    {product.brand} - {product.style}
                  </Text>
                  <Text fontWeight="medium" color="green.600">
                    {product.formattedPrice?.tr || product.price + "₺"}
                  </Text>
                </VStack>
                </Link>
              </Box>
            ))}
          </Flex>
        ))}
        
         {visibleRowsLess < chunkedItems.length && (
               <Box textAlign="center">
        <Text
          cursor="pointer"
          fontWeight="bold"
          color="blue.500"
          onClick={() => setVisibleRowsMore((prev) => prev + 1)}
        >
         {messages[locale].showMore}
        </Text>
      </Box>
         )}
  
        </Flex>
        )}
        
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductKindFavs;
