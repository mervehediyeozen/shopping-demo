import { useState}from 'react'
import { Flex , Box, Image ,Text,  Button, HStack, Stack, Heading } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useLang } from '../../Contexts/LanguageContext'
import { useSelector } from 'react-redux'
import { sortProducts } from '../../Functions/Array'

function Favs() {
  const {messages, locale}=useLang();
  const [visibleFavs , setVisibleFavs] = useState(1);
  const [notShowMoreButtons , setNotShowButton] = useState(true);
  const favProducts = useSelector(state => state.shop.favProducts);
  const isLongerThan = favProducts.length > 3; 
  const chunkedItems = sortProducts(favProducts ,3)
  const visibleFavsItems =chunkedItems.slice(0, visibleFavs);
  const showFavsMore = () => {
        setVisibleFavs((prev) => prev+1)
        setNotShowButton(false)
    }
   if (!favProducts || favProducts.length === 0) {
    return (
      <Flex  flexDirection="column" pb="20px" h="270px" bg="#f5f1e1" pt="50px">
        <Box  pl="35px">
          <Link to="/FavProducts">
          <Heading  fontWeight="normal"color="#59564a" size="sm" >
                {messages[locale].favT}
          </Heading>
          </Link>
        </Box>
        <Box >
      <Flex flexDirection="row" gap="15px"  h="45px" justifyContent="center" >
        <Box>
          <Text fontSize="14px" color="#4d4a42" fontWeight="light" >Favori ürününüz yok.</Text>
        </Box>
        <Box   >
          <Link to="/Products">
            <Button
              variant="link"
               fontSize="14px"
              color="#788f68"
              fontWeight="light"
              textDecor="underline"
              _hover={{ bg: "inherit", textDecoration: "underline" }}
            >
              Ürünlere göz at
            </Button>
          </Link>
        </Box>
      </Flex>
      </Box>
      </Flex>
    );
  }
  return (
  

    <Stack h="310px" mb="15px" pl="35px" bg="#f5f1e1">
      <HStack  pt="17px">
         <Link to="/FavProducts">
   <Heading  color="#59564a" size="sm" fontWeight="normal" > 
    {messages[locale].favT}
   </Heading>
   </Link>
   </HStack>
<Flex   width="750px"  pt="10px" p="20px">
 {visibleFavsItems.map((row, rowIndex) => (
    <Box key={rowIndex} display="flex" gap="10px" flexWrap="no-wrap" w="100%">
      {row.map((product, i) => (
        <Flex key={i} gap="10px">
          <Box
            ml="2px"
            width="180px"
            bg="white"
            h="220px"
            border="2px solid"
            borderColor="#d9d5b8"
            padding="7px"
            boxShadow="sm"
            _hover={{boxShadow:"xl"}}
          >
            <Box mb="5px">
              <Link to={`/product/${product.id}`}>
                <Image src={product.image} w="100%" h="115px" objectFit="cover" />
              </Link>
            </Box>
            <Box>
              <Heading
                fontSize="13px"
                fontFamily="monospace"
                textDecoration="underline"
                color="black"
                mt="15px"
              >
                {product.title?.tr}
              </Heading>
            </Box>
            <HStack justifyContent="space-between">
              <Box>
                <Text fontSize="12px" fontFamily="monospace" color="green.600">
                  {product.price}
                </Text>
              </Box>
              <Link to={`/product/${product.id}`}>
              <Button
                mr="14px"
                mb="15px"
                variant="outline"
                outlineColor="softBrown.700"
                size="xxs"
              >
                <FontAwesomeIcon icon={faRightLong} color="gray" size="sm" />
              </Button>
              </Link>
            </HStack>
          </Box>
        </Flex>
      ))}
    </Box>
  ))}
     
          </Flex> 
            {isLongerThan && notShowMoreButtons && (
        <Flex justifyContent="right" mr="15px"  >
        <Box>
        <Button size="sm" fontWeight="light" variant="ghost"  onClick={showFavsMore} _hover={{bg:"inherit" , textDecoration:"underline"}}>
          hepsini gör
        </Button>
        </Box>
        </Flex>
       )}

          </Stack>
  
  )
}

export default Favs

