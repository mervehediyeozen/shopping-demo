import { Flex, Box , Text , Heading, HStack, Divider , Button } from "@chakra-ui/react"
import FixedTop from "../../components/FixedTop"
import { useState } from "react"
import Company4 from "../../components/Company4"
import Company2 from "../../components/Company2"
import Company3 from "../../components/Company3"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import Footer from "../../components/Footer"

function Opportunities() {
  const [isInfo , setIsInfo] = useState(false);
  const handleInfo = () => {
    setIsInfo(!isInfo);
  }
  return (
    <>
    <Flex flexDirection="column"  bg="#faf9f7">
        <Box>
    <FixedTop/>
    </Box>
 
      <Box mt="120px">
        <Flex flexDirection="row">
            <Box width={["15%" , "17%"]} >
                <Company4 />
            </Box>
            <Box  >
              <Box p="36px" w="full">
                <HStack justifyContent="space-between">
                  <Box>
                <Heading color="#47453e" textDecoration="underline" textDecorationThickness="from-font" fontWeight="light"> Fırsatlar</Heading>
                </Box>
                <Box>
                  <Box position="relative">
                    <Button variant="ghost" size="sm" rounded="20px"color="#383b35" _hover={{bg:"none", color:"#c4d1b6"}} onClick={handleInfo}>
                <FontAwesomeIcon icon={faInfoCircle} size="xl"/>
                
                </Button>
                 {isInfo && (
                  <>
                  <Flex position="absolute" right="1px" top="46px">
                  <Box bg="#f7f7f2" rounded="13px" color="black"  width="200px" h="70px" p="14px" border="1px" borderColor="#bab7a6" textAlign="center">
                    <Text fontWeight="light" fontSize="14px">
                      sadece bazı kartlarda geçerlidir.
                    </Text>
                  </Box>
                  </Flex>
                  </>
                )}
              
                </Box>
                </Box>
                </HStack>
              </Box>
              <Flex flexDirection="row" >
                <Box display="flex" bg="#e6e2d5" borderTop="4px" borderBottom="4px" borderColor="#57544b" alignItems="center">
            <Box width={["85%" , "70%"]}  pt="50px" pb="50px">
              <Company3/>
            </Box>
            <Divider  orientation="vertical" borderWidth="1px" borderColor="#171716" />
            <Box width={["85%" , "30%"]}  pt="50px" pb="50px">
              <Company2/>
            </Box>
            </Box>
            </Flex>
            </Box>
        </Flex>

    </Box>
    <Box pt="20px">
      <Footer/>
    </Box>
    </Flex>
    </>
  )
}

export default Opportunities