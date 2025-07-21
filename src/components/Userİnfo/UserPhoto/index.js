import {Flex,Box, Image,  Text, Heading, Center,  Button , Divider} from '@chakra-ui/react'
import backgroundImage2 from '../../../images/back23.jpg';
import user from '../../../images/user2.png';
import { useLang } from '../../../Contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserPhoto() {
 const navigate = useNavigate();
  const {messages, locale}= useLang();
  const {userInfo , address}  = useSelector(state => state.shop);
    const goLink = (addressInfo) => {
      if(addressInfo === "addAddress"){
      navigate("/AdressPage")
         }
    if(addressInfo === "allAddress"){
      navigate("/AllAdresses")
       }
      }
    
  return (
        <Flex flexDirection="column"   height="auto" maxH="650px"     width="full" bg="#c7bda9">
            <Box mt="10px"   >
                <Center>
              <Image src={user} mb="2px"    mt="25px" width="78px" height="70px" borderRadius="full" border="1px"borderColor="#aba48c" objectFit="cover" objectPosition="top"/>
              </Center>
            </Box>
            <Box  mt="25px" borderTop="1px" borderColor="#aba48c"  bg="#fffefc" w="full"  h="auto" maxH="600px" pb="70px">
               <Box justifyItems="center">
                <Heading     pl="12px" fontSize="19px"  mt="15px"  color="#5c584f" fontWeight="light"  textDecorationColor="#c2bcab"> {messages[locale].information}</Heading>
                </Box>
               
                <Flex flexDirection="column"  >
                <Box   pb="5px" pl="10px" >
                <Heading  fontWeight="light"   textDecoration="underline" textDecorationColor="#c2bcab" fontSize="17px" > {messages[locale].namesurn}</Heading>
                <Box mt="10px">
                <Text fontSize="13px"  fontWeight="light"  color="#7d7565"> {userInfo.name}</Text>
                </Box>
                </Box>
                <Box justifyItems="center">
                  <Divider borderColor="#baaf9b"  w="89%"/>
                </Box>
                <Box pl="10px"   >
                <Heading fontSize="18px"   fontWeight="light" textDecoration="underline" textDecorationColor="#c2bcab"> {messages[locale].emaill} </Heading>
                {userInfo.email ?  (
                  <>   
                <Text fontSize="14px" fontFamily="monospace"> {userInfo.email}</Text>
                </>)
                :(
                  <>
                  <Box h="13px"></Box>
                  </>
                )}
                     </Box>
                      <Box justifyItems="center">
                  <Divider borderColor="#baaf9b"  w="89%"/>
                </Box>
                <Box pl="10px" mt="5px">
                <Heading    fontWeight="light"   textDecoration="underline" textDecorationColor="#c2bcab" fontSize="17px"> {messages[locale].adressT} </Heading>
              
                {address.length === 0 && ( 
  <Box mb="20px">
    <Text fontSize="13px" mt="15px" fontWeight="light" color="#4f4c46">
      Kayıtlı bir adresiniz bulunmuyor.
    </Text>
    <Box justifySelf="right" mr="10px">
    <Button size="xs"  fontWeight="normal"  variant="link" fontSize="14px" color="#788f68"_hover={{bg:"inherit" , textDecoration:"underline"}}  onClick={() => goLink("addAddress")}>
      Adres ekle
    </Button>
    </Box>
  </Box>
)}

{address.length > 0 && (
  <>
 {address.map((adr, index) => (
  <Flex flexDirection="column">
    <Box key={index} bg="#d6d1bf" borderRadius="7px"  width="85%" height="40px" border="1px" p="6px" mt="15px">
      <Text fontSize="15px" textDecoration="underline" ml="5px" mt="2px" fontFamily="monospace">{adr.title}</Text>
      </Box>
      </Flex>
    )) }
     <Box justifySelf="right" mr="10px">
      <Button size="xs"  fontWeight="normal"  variant="link" fontSize="14px" color="#788f68"_hover={{bg:"inherit" , textDecoration:"underline"}}   onClick={() => goLink("allAddress")} >
        {messages[locale].alladresslink}
      </Button>  
      </Box>
      </>
)}
</Box>
                  <Box justifyItems="center">
                  <Divider borderColor="#baaf9b"  w="89%"/>
                </Box>
        
             </Flex>
            </Box>
        </Flex>
   
  )
}


export default UserPhoto