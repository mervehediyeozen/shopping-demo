import { useState } from "react";
import { Box , Flex , Text , Image, Button } from "@chakra-ui/react"
import FixedTop from "../../components/FixedTop"
import { useProductsContext } from "../../Contexts/ProductsContext"
import { sortProducts } from "../../Functions/Array";
import Footer from "../../components/Footer";
import { useLang } from "../../Contexts/LanguageContext";

function AllCommentsPage() {
  const {messages , locale} = useLang();
  const [ showAllFiveStarPictures , setShowAllFiveStarPictures] = useState(1);
  const [showAllFiveStarComments , setShowAllFiveStarComments] = useState(1);
  const [ buttonClicked , setButtonClicked] = useState ({
    fiveStarPhotos : false ,
    fiveStarComments : false ,
  })
  const [ showAll , setShowAll] = useState({
    fiveStarComment : false , 
    fiveStarPhoto : false,


  })
  const {products} = useProductsContext();
  const allProducts = Object.values(products);
  const productsWithFeedbacks = allProducts.filter(
    (product) => product.feedbacks
  );
 const allComments = productsWithFeedbacks.flatMap(
  (product) => product.feedbacks.comments || []
);
const fiveStarWrittenComments = allComments.filter(
  (comment) => comment.star === 5
);

  const allPhotoComments = productsWithFeedbacks.flatMap(
    (product) => product.feedbacks.photoComments || []
  );
  const fiveStarPhotoComments = allPhotoComments.filter((product) => 
product.star === 5);
  const chunkedItems = sortProducts(fiveStarPhotoComments , 5)
  const chunkedItems2 = sortProducts(fiveStarWrittenComments , 5)
  const sortingFiveStarPhotoComments = showAll.fiveStarPhoto ? chunkedItems : chunkedItems.slice(0, showAllFiveStarPictures)
  const sortingFiveStarComments = showAll.fiveStarComment ? chunkedItems2 : chunkedItems2.slice(0, showAllFiveStarComments)
  const showAllFiveComments = () => {
    setShowAllFiveStarComments((prev) => prev+1);
    setButtonClicked((prev) => ({
        ...prev ,
        fiveStarComments : true,

    }))
  }
  const showAllFiveCommentsWPhoto = () => {
    setShowAllFiveStarPictures((prev) => prev+1);
    setButtonClicked((prev) => ({
        ...prev ,
        fiveStarPhotos: true,

    }))
  }
  const showAllComments = (category) => {
    setShowAll((prev) => ({
        ...prev,
        [category] : true
    }))
  }

  return (
    <Flex flexDirection="column" justify="space-between" minH="100vh"  bg="#e3ddcc">
        <Box>
            <FixedTop /> 
        </Box>
        <Box mt="120px">
            <Flex flexDirection="column" >
                <Box  justifyItems="center" bg="#e3ddcc"  pt="20px">
                    <Text fontSize="20px" size="lg" fontWeight="light" color="#757063" > {messages[locale].comingFromYou}/ {messages[locale].yourComments}</Text>
                </Box>
                <Box    >
                    <Box pl="20px" pt="30px"  bg="#faf9f5" borderTop="1px" borderColor="#ccc5b1" >
                <Box>
                    <Flex flexDirection="row" justifyContent="space-between" > 
                        <Box>
                            <Text fontSize="20px" size="lg" fontWeight="light" color="#757063"  > {messages[locale].mostLiked} / 5 {messages[locale].star}</Text>
                        </Box>
                        <Box mr="10px">
                            <Button fontSize="20px" fontWeight="light" color="#757063" variant="ghost" _hover={{bg:"inherit" , textDecoration:"underline"}} onClick={() => showAllComments("fiveStarComment")}> {messages[locale].showAll}</Button>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Flex flexDirection="column" pb="15px"  gap="10px">
                  {sortingFiveStarComments.map((group, i) => (
                    <Flex key={i} gap="10px" justifyContent="center" mt="35px" mb="15px">
                        {group.map((comment, j) => (
                            <Flex flexDirection="row" justify="space-between">
                        <Box key={j} bg="#fafafa" p="14px" borderRadius="md" boxShadow="sm" w="230px" h="130px" _hover={{boxShadow:"lg"}}
                        border="1px" borderColor="#e0dcce"> 
                        <Box>
                            <Text fontSize="14px" fontWeight="light">{comment.comment}</Text>
                            </Box>
                            <Box as="footer">
                            <Text textAlign="right" fontSize="11px"fontWeight="medium" color="#636058">{comment.name}</Text>
                            </Box>
                        </Box>
                        </Flex>
                        ))}
                    </Flex>
                    ))}
                    {showAllFiveStarComments < chunkedItems2.length && (
                        <Flex justifyContent="center" mt="15px" pb="10px">
                        <Box >
                    <Button  fontSize="14px" fontWeight="medium" color="#918d80"variant="ghost" _hover={{bg:"inherit" , textDecoration:"underline"}}  onClick={showAllFiveComments}>
                        {messages[locale].showMore}
                    </Button>
                    </Box>
                    </Flex>
                    )}
                </Flex>
                </Box>
                </Box>
                <Box borderTop="1px" borderColor="#ebe1c3">
                    <Box pl="20px" pt="30px"   bg="#f7f5ed" >
                       <Box>
                    <Flex flexDirection="row" justifyContent="space-between" > 
                        <Box>
                            <Text fontSize="20px" size="lg" fontWeight="light" color="#757063"  > {messages[locale].photoComments}/ 5  {messages[locale].star}</Text>
                        </Box>
                        <Box mr="10px">
                            <Button fontSize="20px" fontWeight="light" color="#757063" variant="ghost" _hover={{bg:"inherit" , textDecoration:"underline"}} onClick={() => showAllComments("fiveStarPhoto")}> {messages[locale].showAll}</Button>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Flex flexDirection="column" pb="15px" gap="10px">
                  {sortingFiveStarPhotoComments.map((group, i) => (
                    <Flex key={i} gap="10px" justifyContent="center" mt="35px" mb="15px">
                        {group.map((comment, j) => (
                            <Flex flexDirection="row">
                        <Box key={j} bg="#fafafa" p="12px" borderRadius="md" boxShadow="sm" w="230px" h="210px" _hover={{boxShadow:"lg"}}
                        border="1px" borderColor="#e0dcce" flexDirection="column">
                            <Box justifySelf="center" border="1px" borderColor="#d1c9b6">
                                <Image src={comment.photo} w="200px" h="120px" objectFit="cover" objectPosition="top"/>
                                </Box> 
                                <Box justifySelf="center" mt="4px"  >
                            <Text fontSize="13px" fontWeight="light">{comment.comment}</Text>
                            <Text textAlign="right" fontSize="11px"fontWeight="medium" color="#636058">{comment.name}</Text>
                            </Box>
                        </Box>
                        </Flex>
                        ))}
                    </Flex>
                    ))}
                    {showAllFiveStarPictures < chunkedItems.length && (
                        <Flex justifyContent="center" mt="15px" pb="10px">
                        <Box >
                    <Button  fontSize="14px" fontWeight="medium" color="#918d80"variant="ghost" _hover={{bg:"inherit" , textDecoration:"underline"}}  onClick={showAllFiveCommentsWPhoto }>
                        {messages[locale].showMore}
                    </Button>
                    </Box>
                    </Flex>
                    )}
                </Flex>
                </Box>
                </Box>
                </Box>
                </Box>
            </Flex>
        </Box>
        <Box as="footer" mt="25px">
            <Footer/>
        </Box>
    </Flex>
  )
}

export default AllCommentsPage