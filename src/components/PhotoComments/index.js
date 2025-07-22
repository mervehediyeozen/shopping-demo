import {useState ,  useEffect} from 'react'
import { Flex , Box, Image ,Text,  Textarea, Divider,  Button , useToast } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'

function PhotoComments({product}) {
  const photoComments = product.feedbacks?.photoComments || [];
  const [writtenComments, setWrittenComments] = useState(product.feedbacks?.comments || []);
   const userInfo = useSelector(state => state.shop.userInfo);
    const toast = useToast();
    const [isCommentSent , setIsCommentSent] = useState(false);
    const [comment, setComment] = useState(''); 
    const changeComment = (e) => {
  setComment(e.target.value);
};
    useEffect(() => {
  const savedComments = localStorage.getItem('writtenComments');
  if (savedComments) {
    setWrittenComments(JSON.parse(savedComments));
  }
}, []);

const sendComment = (e) => {
  e.preventDefault();

  if (isCommentSent) {
    toast({
    title: "Yorum zaten gönderildi.",
    description: "Yorumunuzu yalnızca bir kez gönderebilirsiniz.",
    status: "warning",
    duration: 3000,
    isClosable: true,
     });
    return;
  }

  const newComment = {
    name: userInfo?.name || "Anonim",
    writtenComment: comment
  };

  const updatedComments = [...writtenComments, newComment];
  setWrittenComments(updatedComments);
  localStorage.setItem('writtenComments', JSON.stringify(updatedComments)); 
  setIsCommentSent(true);
  setComment('');
};
const [showAllPhotos, setShowAllPhotos] = useState(false);
const [showAllComments, setShowAllComments] = useState(false);
const visiblePhotoComments = showAllPhotos ? photoComments : photoComments.slice(0, 4);
const visibleComments = showAllComments ? writtenComments : writtenComments.slice(0,4);


  return (
    <Flex direction="column" mt="20px"  pb="20px" borderRadius="xl" >
      <Box  maxH="1600px">
        <Flex flexDirection="row" gap="20px">
         
          {visiblePhotoComments.map((com, i) => (
            <>
        <Box key={`photo-${i}`} mt="20px">
          <Flex flexDirection="row">
            <Box
              width="160px"
              bg="#f5f0e9"
              border="1px solid"
              borderColor="blackAlpha.300"
              h="175px"
              padding="5px"
              boxShadow="md"
            >
              <Image src={com.photo} w="100%" h="100px" objectFit="cover" objectPosition="center"/>
              <Text fontSize="11px" mt="5px" fontWeight="light" fontFamily="heading">{com.comment}</Text>
              <Flex flexDirection="row" justifyContent="right" gap="2px" >
                
                <FontAwesomeIcon icon={faStar} color="orange" size="2xs" />
                <FontAwesomeIcon icon={faStar} color="orange" size="2xs" />
                <FontAwesomeIcon icon={faStar} color="orange" size="2xs" />
               
               
                <Text fontSize="9px"  fontFamily="heading">{com.name}</Text>
               
                
              </Flex>
            </Box>
          </Flex>
        </Box>
         </>
      ))}
       {!showAllPhotos && photoComments.length > 4 && (
           <Flex justify="right">
            <Button 
              variant="ghost" 
              bg="#c9bca3"
               _hover={{bg:"#a39479" }}
              h="full" 
              size="xs"
              onClick={() => setShowAllPhotos(true)}
            >
              <FontAwesomeIcon icon={faChevronRight}/>
              </Button>
              </Flex>
          )}
      </Flex>
      </Box>
      {photoComments.length > 0 && (
       <Box mt="20px" > 
            <Divider  borderColor="#d1ccba" />
          </Box>
          )}
         <Box  mt="20px">
          <Flex flexDirection="column">
            <Box>
      {/* YAZILI YORUMLAR */}
      {visibleComments.map((com, i) => (
        <Box key={`comment-${i}`} mt="10px">
          <Flex direction="column" bg="#f7f6f2" border="1px" maxWidth="720px" mb="3px" borderColor="blackAlpha.200" p="5px">
            <Flex flexDirection="row" justifyContent="space-between" height="20px" mt="5px" >
              <Box>
                <Flex flexDirection="row" gap="5px">
                  <FontAwesomeIcon icon={faStar} size="xs" color="orange" />
                  <FontAwesomeIcon icon={faStar} size="xs" color="orange" />
                  <Text fontSize="12px" textAlign="right"  textDecoration="underline" fontWeight="light" textDecorationThickness="from-front">
                    {com.name}
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Text fontSize="10px" fontWeight="light" >1 hafta önce</Text>
              </Box>
            </Flex>
            <Box mt="5px">
              <Text fontSize="12px" ml="10px">{com.comment}</Text>
            </Box>
          </Flex>
        </Box>
  
           ))}
           </Box>
           <Box  >
            {!showAllComments && writtenComments.length>= 4 && (
              <Box justifySelf="right" justifyItems="right">
             
            <Button 
             variant="ghost" 
             mr="20px"
             size="xs"
             h="full"
               
              onClick={() => setShowAllComments(true)}_hover={{bg:"#f7f7f5" , color:"black"}} fontSize="12px"fontWeight="normal"> Sonraki </Button>
              </Box>
             )}
           </Box>
           </Flex>
           </Box>
     
     
     <Flex mt="20px"  direction="column" justifyContent="space-between">
      <form onSubmit={sendComment}>
      <Box>
      <Textarea  height="10px" w={["50%" , "100%"]}  maxW="900px" borderRadius="1px" outlineColor="blackAlpha.200" color="black" resize="none"  placeholder="yorum yap.." _placeholder={{color: "black"}} size="xs" value={comment} onChange={changeComment} >  </Textarea>
      </Box>
      <Box textAlign="right" mt="5px" mr="20px">
      <Button variant="ghost" _hover={{bg:"#f7f7f5" , color:"black"}} size="sm" fontSize="12px" type="submit" fontWeight="normal"  > Gönder </Button>
      </Box>
       </form>
     </Flex> 

    
            </Flex>
   
  
  )
}

export default PhotoComments