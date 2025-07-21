import { Flex , Box , Image , Text  , Button ,  Divider} from "@chakra-ui/react"
import FixedTop from '../../components/FixedTop'
import { useProductsContext } from "../../Contexts/ProductsContext"
import { sortProducts } from "../../Functions/Array";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../Contexts/LanguageContext";
import Footer from "../../components/Footer";


function MostSellers() {
  const { messages , locale} = useLang();
  const [ showAllFav , setShowAllFav] = useState(1);
  const [showAllLessFav , setShowAllLessFav ] = useState(1);
  const [ buttonClicked , setButtonClicked] =useState({
    hasMoreFav : false ,
    hasLessFav : false,
  })
  
  const {products} = useProductsContext();
  const showAllFavs = Object.values(products).filter((product) => product.fav > 5000)
  const isLonger = showAllFavs.length > 4 
  const chunkedItems = sortProducts(showAllFavs , 4);
  const sortingFavs = chunkedItems.slice(chunkedItems , showAllFav);
  const lessFavs = Object.values(products).filter((pro) => pro.fav > 4000 && pro.fav < 5000);
  const isLongerThan=  lessFavs.length > 4
  const chunkedItems2 = sortProducts(lessFavs , 4);
  const sortingLessFavs = chunkedItems2.slice(chunkedItems2, showAllLessFav);
  const showAllFavProducts = showAllFavs.length > 7
  const showAllLessFavProducts = lessFavs.length > 7
  const showAll = () => {
    setShowAllFav((prev) => prev+1);
  setButtonClicked((prev) => ({
  ...prev,
  hasMoreFav: true,
}))
  }
   const showAllLessFavs = () => {
    setShowAllLessFav((prev) => prev+1);
    setButtonClicked((prev) => ({
  ...prev,
  hasLessFav: true,
}))
  }
  return (
   <>
   <Flex flexDirection="column" justify="space-between" minH="100vh" bg="#fafafa">
    <Box>
      <FixedTop/>
    </Box>
    <Box mt="120px">
     <Flex flexDirection="column"bg="#e6e1d5">
      <Box  ml="20px" mt="32px" pb="20px" >
      <Box>
        <Flex flexDirection="row" justifyContent="space-between" >
          <Text fontWeight="light"  fontSize="20px" color="#54524b">
             {messages[locale].mostLiked} / +5000 FAV
          </Text>
          {showAllFavProducts && (
          <Button variant="ghost" fontSize="20px"  color="#54524b" mr="15px" fontWeight="light" _hover={{bg:"inherit", textDecoration:"underline" , textDecorationColor:"#8f8979" , textDecorationThickness:"from-font"}}>
              {messages[locale].showAll}
          </Button>
          )}
        </Flex>
      </Box>
  
        <Box mt="10px" ml="120px">
         {sortingFavs.map((row, i) => (
          <Flex key={i}  gap="20px" > 
            {row.map((product , i) => (
              <Flex flexDirection="row"  >
                <Box h="240px" w="240px" padding="10px" bg="#fcfcfa" border="1px" borderColor="#d1c9b2"  _hover={{boxShadow:"xl"}} > 
                  <Link to={`/product/${product.id}`}>
                  <Box justifySelf="center"> 
                    <Image  src={product.image} w="200px" h="155px" objectFit="cover" objectPosition="top"/>
                  </Box>
                  <Box mt="15px" justifySelf="center">
                    <Flex flexDirection="row" gap="20px">
                       <Text fontSize="14px" fontWeight="light" textDecoration="underline" textDecorationThickness="from-font" textDecorationColor="#c7c5af"> {product.title?.tr}</Text>
                      <Text  fontSize="14px" fontWeight="light" color="#79806a">
                        {product.price}$
                      </Text>
                    </Flex>
                   
                  </Box>
                  </Link>
                </Box>
              </Flex>
            )
            )}
          </Flex>
         ))}
         {isLonger && !buttonClicked.hasMoreFav && (
          <Flex flexDirection="row" justifyContent="center" mt="16px">
          <Button variant="ghost" fontSize="14px" fontWeight="bold" color="#807b6e" _hover={{bg:"inherit" , textDecoration:"underline", textDecorationThickness:"from-font" , textDecorationColor:"#8f8979"}} onClick={showAll}>
           {messages[locale].showMore}
          </Button>
          </Flex>
         )}
        </Box>
        </Box>
      </Flex>
   
          <Flex flexDirection="column"bg="#edebe4" borderTop="1px" borderBottom="1px" borderColor="#c7c0ad" >
            <Box  ml="20px"  mt="32px" pb="20px">
      <Box>
        <Flex flexDirection="row" justifyContent="space-between">
          <Text fontWeight="light"  fontSize="20px" color="#54524b" >
             {messages[locale].liked} / +4000 FAV
          </Text>
          {showAllLessFavProducts && (
          <Button variant="ghost" fontSize="20px"  color="#54524b"  mr="15px" fontWeight="light" _hover={{bg:"inherit", textDecoration:"underline" , textDecorationColor:"#8f8979" , textDecorationThickness:"from-font"}}>
           {messages[locale].showAll}
          </Button>
          )}
        </Flex>
      </Box>
        <Box mt="10px" ml="120px">
         {sortingLessFavs.map((row, i) => (
          <Flex key={i}  gap="20px" > 
            {row.map((product , i) => (
              <Flex flexDirection="row" >
                <Box h="240px" w="240px" padding="10px" bg="#fcfcfa" border="1px" borderColor="#d1c9b2" justifyItems="center" _hover={{boxShadow:"xl"}}> 
                  <Link to={`/product/${product.id}`}>
                  <Box justifySelf="center">
                    <Image src={product.image} w="200px" h="155px" objectFit="cover" objectPosition="top"/>
                  </Box>
                  <Box mt="15px" justifySelf="center">
                    <Flex flexDirection="row" gap="20px">
                       <Text fontSize="14px" fontWeight="light" textDecoration="underline" textDecorationThickness="from-font" textDecorationColor="#c7c5af"> {product.title?.tr}</Text>
                      <Text  fontSize="14px" fontWeight="light" color="#79806a">
                        {product.price}$
                      </Text>
                    </Flex>
                   
                  </Box>
                  </Link>
                </Box>
              </Flex>
            )
            )}
          </Flex>
         ))}
         {isLongerThan && !buttonClicked.hasLessFav && (
         <Flex flexDirection="row" justifyContent="center" mt="16px">
          <Button variant="ghost" fontSize="14px" fontWeight="bold" color="#807b6e" _hover={{bg:"inherit" , textDecoration:"underline", textDecorationThickness:"from-font" , textDecorationColor:"#8f8979"}} onClick={showAllLessFavs}>
            {messages[locale].showMore}
          </Button>
          </Flex>
         )}
        </Box>
        </Box>
      </Flex>
    </Box>
    
    <Box as="footer" mt="45px">
      <Footer/>
    </Box>
   </Flex>
   </>
  )
}

export default MostSellers