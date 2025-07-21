import { useEffect ,  useState} from "react"; 
import { Flex , Box , Text , Image  , Button} from "@chakra-ui/react"
import FixedTop from "../../components/FixedTop"
import { useProductsContext } from "../../Contexts/ProductsContext";
import { useSelector } from "react-redux"
import { sortProducts } from "../../Functions/Array";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useLang } from "../../Contexts/LanguageContext";


function FavProducts() {
    const {messages , locale} = useLang();
    const [visibleFavs , setVisibleFavs] = useState(1);
    const [visibleSimilar , setVisibleSimilar] = useState(1);
    const {products} = useProductsContext();
    const favProducts = useSelector(state => state.shop.favProducts);
    const allProducts = Object.values(products);
    const similarProducts = allProducts.filter(p =>
      favProducts.some(fav =>
        (p.type === fav.type && p.color === fav.color  && p.kind === fav.kind &&  p.id !== fav.id ) 
      )
    );
    const isFavsEmpty = favProducts.length === 0 ;

    const isLongerThanPage = similarProducts.length > 3 ;
    const isLongerThan = favProducts.length > 3; 
    const chunkedItems2 = sortProducts(similarProducts , 3);
    const chunkedItems = sortProducts(favProducts ,3)
    const visibleFavsItems =chunkedItems.slice(0, visibleFavs);
    const visibleSimilarItems = chunkedItems2.slice(0, visibleSimilar);
    const showFavsMore = () => {
        setVisibleFavs((prev) => prev+1)
    }
     const showVisibleMore = () => {
        setVisibleSimilar((prev) => prev+1)
    }
    useEffect(() => {
  console.log("FAV SAYFASI ÜRÜNLERİ:", favProducts);
}, [favProducts]);
    
  return (
    
   <>
    <Flex flexDirection="column" minH="100vh"  justify="space-between" bg="#fcfcfc" >
       <Box>
        <FixedTop/>
       </Box>
       <Box  >
       <Flex flexDirection="row"  bg="#e3e0cf">
       <Box  width={["90%" , "85%"]}  h={isFavsEmpty ? "570px" :"auto"}  pb="40px"maxH="570px"  borderTop="1px" borderColor="#878576" bg="#fcfcfc" borderBottom="1px"
       borderBottomColor="#ccc6af" >
        <Flex flexDirection="column">
            <Box p="20px" mt={isFavsEmpty ? "48px" :"25px"}>
               <Text fontSize="2xl" ml={isFavsEmpty ? "38px" :"20px"} fontWeight="light" mb="4" textDecoration="underline" textDecorationThickness="from-font" color="#6c735b" textDecorationColor="#6c735b"  > {messages[locale].favProducts}</Text>
            </Box>
      
        <Flex direction="row" ml="60px" >
         
            {isFavsEmpty? (
              <Flex flexDirection="row"   gap="7px" ml="15px"> 
              <Box  >
                    <Text fontSize="15px" fontWeight="light"> {messages[locale].noProductAlert}</Text>
              </Box>
              <Box>
                <Link to="/Products">
                <Button variant="ghost" size="xs" color="#8c9674" _hover={{bg:"inherit" , textDecoration:"underline"}}>
                 ürünlere göz at.
                </Button>
                </Link>
              </Box>
              </Flex>
            ) : (
                <>
             {visibleFavsItems.map((row, rowIndex) => (
                <Flex  key={rowIndex}  wrap="wrap" gap="22px"> 
                 {row.map((product) => (
                <Box key={product.id} w="200px" borderWidth="1px" borderRadius="md" overflow="hidden" p="15px" bg="#fafafa" border="1px" borderColor="#bdb9a0" >
                    <Link to={`/product/${product.id}`}>
                    <Box>
                  <Image src={product.image} alt={product.imageAlt?.tr || "Ürün"} w="100%" h="150px" objectFit="cover"  border="1px" borderColor="#cfccb8"/>
                  <Flex flexDirection="row"  mt="2" justifyContent="space-between">
                  <Text fontWeight="light" isTruncated>{product.title?.tr}</Text>
                  <Text fontWeight="light" mt="2px" mr="4px" fontSize="14px" textDecoration="underline" color="#80916e">  {product.formattedPrice?.tr}</Text>
                  </Flex>
                  </Box>
                  </Link>
                </Box>
               ))}
               </Flex>
        ))}
        </>
    )}
    </Flex>
    {isLongerThan && (
        <Flex  w="full" justifyContent="right" >
    <Box>
        <Button mr="20px"color="#45443d" variant="ghost" onClick={showFavsMore} _hover={{bg:"inherit" , textDecoration:"underline"}} > Daha fazla göster </Button>
    </Box>
       </Flex>
    )}
    </Flex>
    </Box>
    <Box  bg="#e3e0cf" width={["10%" , "15%"]} pt="5px" borderLeft="1px" borderColor="#ccc6af">
      <Flex flexDirection="column"  w="full" p="20px">
          {!isFavsEmpty  && (
        <>
    <Box justifyItems="center" justifySelf="center">
    
        <Text fontSize="18px" color="#45443d"  fontWeight="light" textDecoration="underline" textDecorationColor="#99997f">   Benzer ürünler </Text>
    </Box>
       <Flex flexDirection="column" pb="10px"   justifyItems="center">
            {similarProducts.length === 0 ? (
              <Text fontSize="17px" color="#45443d">Benzer ürün yok.</Text>
            ) : (
                <>
             {visibleSimilarItems.map((row, rowIndex) => (
                <Box key={rowIndex} justifyItems="center"  > 
                 {row.map((product) => (
                <Box  border="1px" borderColor="#dedbc8" bg="#fafafa" key={product.id} w="200px" borderWidth="1px" overflow="hidden" p="15px" pb="10px" mb="10px">
                    <Link to={`/product/${product.id}`}>
                    <Box>
                  <Image src={product.image} alt={product.imageAlt?.tr || "Ürün"} w="100%" h="150px" objectFit="cover" border="1px" borderColor="#d9d8c5"/>
                  </Box>
                  <Box  mt="2" >
                    <Flex flexDirection="row" justifyContent="space-between">
                  <Text fontWeight="light" fontSize="14px" color="#525048"isTruncated>{product.title?.tr}</Text>
                  <Text  fontWeight="light" fontSize="13px" color="#788a65"> {product.formattedPrice?.tr}</Text>
                  </Flex>
                  </Box>
                  </Link>
                </Box>
               ))}
               </Box>
        ))}
      </>
    )}
    </Flex>
    {isLongerThanPage && (
        <Flex  w="full" justifyContent="center">
    <Box >
        <Button color="#45443d" variant="ghost" _hover={{bg:"inherit" , textDecoration:"underline"}}  onClick={showVisibleMore}>
         Daha fazla göster
        </Button>
    </Box>
    </Flex>
    )}
   </>
      )}
    </Flex>
    
    </Box>
    </Flex>
    </Box>
    <Box as="footer">
      <Footer />
    </Box>
    </Flex>
    </>
  )
}

export default FavProducts