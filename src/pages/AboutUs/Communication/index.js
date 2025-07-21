import FixedTop from "../../../components/FixedTop"
import { Flex, Box ,Text, Heading, HStack } from "@chakra-ui/react"
import Company4 from "../../../components/Company4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons"
import Footer from "../../../components/Footer"
function Communication() {
  return (
   <>
   <Flex direction="column" bg="#ede4d1" >
    <Box >
    <FixedTop/>
    </Box>
    <Box mt="120px" >
        <Flex flexDirection="row">
            <Box width={["15%" , "17%"]}>
                <Company4/>
            </Box>
            <Box width={["85%" , "73%"]} ml="40px" mt="20px">
              <Box mt="20px" h="600px" border="2px" borderColor="#b3ac9a" borderRadius="8px">
                <Box p="20px" bg="#383832"  h="full">
                <Box h="full" p="65px" bg="white"  >
                  
                <Heading fontSize="23px" textDecoration="underline" color="blackAlpha.800" fontWeight="medium"> İletişim</Heading>
                <Box p="19px">
                  <HStack>
                <Text fontWeight="normal" fontSize="20px" > Mail:</Text>
                <Text   fontWeight="light" textDecoration="underline" fontSize="17px" color="#3d3c37" textDecorationColor="#c2c1a5"> mervehediyeozen98@gmail.com </Text>
                </HStack>
                   <HStack>
                <Text fontWeight="normal" fontSize="20px"> Phone:</Text>
                <Text textDecoration="underline" fontWeight="light"fontSize="17px" color="#3d3c37" textDecorationColor="#c2c1a5"> 5530846947 </Text>
                </HStack>
                </Box>
                <Heading fontSize="23px" textDecoration="underline"fontWeight="medium"color="blackAlpha.800"> Sosyal Medya</Heading>
                  <Box p="19px">
                  <HStack gap="12px">
                <FontAwesomeIcon icon={faCameraRetro}/> 
                <Text mt="10px"textDecoration="underline" fontWeight="light" fontSize="17px" color="#3d3c37" textDecorationColor="#c2c1a5" > mervehediye </Text>
                </HStack>
                </Box>
                </Box>
              
              </Box>
              </Box>
            </Box>
            <Box width={["85%" , "5%"]} ml="50px"></Box>
        </Flex>
        <Box pt="40px">
         <Footer/>
         </Box>
    </Box>
   </Flex>
   </>
  )
}

export default Communication