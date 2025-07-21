import { Flex , Box, HStack, Text ,Heading , Divider} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "react-router-dom"
import { useLang } from "../../Contexts/LanguageContext"

function Footer() {
  const {messages , locale} = useLang();
  const location = useLocation();
    let bg="" 
    let color=""
    let brdClr=""
    let brdTopClr=""
     if(location.pathname.includes("/Main"))
     {
      bg="#f7f7f2"
      color="#7d786a"
      brdClr="#ebe2cc"
      brdTopClr="#f2f1eb"
     }
       if(location.pathname.includes("/Products"))
     {
      bg="#e6ddca"
      color="#7d786a"
      brdClr="#ebe2cc"
      brdTopClr="#f2f1eb"
     } 
        if(location.pathname.includes("/Communication"))
     {
        bg="#42413c"
        color="beige"
        brdTopClr="#f2f1eb"
        brdClr="#ebe2cc"
     } 
       if(location.pathname.includes("/Profile"))
     {
        bg="#fcfcfc"
        color="#615f54"
        brdTopClr="#f2f1eb"
        brdClr="#ebe2cc"
     } 
        if(location.pathname.includes("/FavProducts"))
     {
        bg="#fcfcfc"
        color="#858171"
        brdTopClr="#f2f1eb"
        brdClr="#f2f1eb"
     } 
      if(location.pathname.startsWith("/product")){
      bg="#bdad8f"
      color="#42403c"
      brdTopClr="#827a6c"
      brdClr="#827a6c"
     }
     if(location.pathname === ("/MostSellers")){
      bg="#fafafa"
      color="#52504b"
      brdTopClr="#ebe7df"
      brdClr="#d4cdbc"
     }
       if(location.pathname === ("/AllCommentsPage")){
      bg="#e3ddcc"
      color="#636055"
      brdTopClr="#ebe7df"
      brdClr="#d4cdbc"
     }
     else {
        bg="#f5f3f0"
        color="blackAlpha.600"
        brdClr="#ebe2cc"
        brdTopClr="#f2f1eb"
     }
    
    
    
  
  return (
    <>
    <Flex flexDirection="row" w="full"   >
        <Box bg={bg}  w="full"  h="90px"  border="1px" borderColor={brdTopClr} display="flex"   alignItems="center"  >  
            <Box  display="flex" w="full" h="full" justifyContent="space-between" >
              <Box display="flex"   alignItems="center" pl="50px"  >
                <HStack>
                  <Box mt="10px" display="flex" gap="10px">
             <Heading  color={color}  fontSize="16px" fontWeight="normal"> {messages[locale].contact}</Heading>
             
           <Text color={color}  fontWeight="normal" fontSize="15px" > Mail:</Text>
              <Text color={color}  textDecoration="underline" fontSize="13px" fontWeight="light"> mervehediyeozen98@gmail.com </Text>
            <Text  color={color} fontWeight="normal" fontSize="15px"> {messages[locale].phone} :</Text>
         <Text  color={color} textDecoration="underline" fontSize="13px" fontWeight="light"> 5530846947 </Text>
         </Box>
         </HStack>
         
         </Box>
         <Box display="flex"   alignItems="center"  pr="50px" >
               <Divider orientation="vertical" h="full"  borderColor={brdClr}     />
               </Box>
         <Box  display="flex"   alignItems="center"  pr="50px" >
           <HStack>
      <Heading  color={color} fontSize="16px" fontWeight="normal">{messages[locale].socialMedia} </Heading>
       
             <FontAwesomeIcon icon={faCameraRetro}/> 
              <Text mt="10px" color={color} textDecoration="underline" fontSize="13px" fontWeight="light"> : mervehediye </Text>
               </HStack>
               </Box>
              
               </Box>
              
             </Box>
           </Flex>
                    
    </>
  )
}

export default Footer