import  { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Heading, Text, Flex, Divider  , Image, HStack, Button} from "@chakra-ui/react";
import FixedTop from "../../components/FixedTop";
import { Link } from "react-router-dom";
import Company4 from "../../components/Company4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar,  faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../../Contexts/LanguageContext";
function OrdersPage() {
  const {messages , locale} = useLang();
  const orders = useSelector(state => state.shop.order);
  const [showMore , setShowMore] =useState(false);
  const handleShow = () => {
    setShowMore(!showMore);
  }

  return (

    <>
    <Flex direction="column" bg="#f7f4e9">
    <FixedTop/>
    <Flex direction="row" justifyContent="space-between" mt="110px">
    <Box p={10} width={["95%" , "84%"]}  >
        <HStack justifyContent="space-between">
        <Heading m={6} fontSize="28px" textDecoration="underline" textDecorationColor="#999682" fontWeight="light" color="blackAlpha.800">
        {messages[locale].myorders}
      </Heading>
      <HStack m={6}>
      <FontAwesomeIcon icon={faPlusSquare}  size='lg' color='gray'/>
        <Link to="/Products">
        <Text fontSize="20px" mt="10px" textDecoration="underline" color="#638991" fontWeight="medium">
        Oluştur
      </Text>
      </Link>
      </HStack>
      </HStack>

      {orders.length <= 0 ? (
  <Text fontSize="18px" textAlign="center" color="gray.600" fontWeight="light">
    Henüz siparişiniz yok.
  </Text>
) : (
        [...orders].reverse().map((order, index) => (
          <Box
            key={index}
            border="1px"
            borderColor="gray.300"
            borderRadius="md"
            p={5}
            
           
            bg="white"
          >

    
            
            <Flex flexDirection="row" justifyContent="space-between">
              <Box> 
            <Heading fontSize="18px" mb={2} textDecoration="underline" color="#59584e">Ürünler</Heading>
            </Box>
            <Box>
               <Text color="blackAlpha.700"><strong>Tarih:</strong> {new Date(order.date).toLocaleString()}</Text>
               </Box>
               </Flex>
               <Divider my={4} />
            <Flex direction="row" gap="10px" w="full" >
            {order.items && order.items.map((product, idx) => (

              <Flex key={idx} direction="column" py={1} mt="10px" >
                <Box p="10px"border="1px" borderColor="#999682"  h="auto" pb="4px">
                  <Image src={product.image}  width="175px" h="155px" />
                <Text fontSize="15px" mt="3px"color="#59584e">{product.title?.tr || product.title}</Text>
                <HStack justifyContent="flex-end">
                    
                <Text fontSize="13px" pt="3px" textDecoration="underline" color="#76916e" > {product.price}$</Text>
                </HStack>
                </Box>

            
              
              </Flex>
            ))}
             
            </Flex>
            <Divider my={4}/>
            <Button  mt={3} fontSize="15px" color="#5c7f87" textDecoration="underline" textAlign="end" variant="ghost" onClick={handleShow}> 
            Detayı Gör
            </Button>
            {!showMore && (
                <>
                 <Text mt="10px" color="#59584e"><strong>Adres:</strong> {order.addresT}</Text>
                              <Text color="#59584e"><strong>Tarih:</strong> {new Date(order.date).toLocaleString()}</Text>
            <Link to={`/orders/${order.id}`}>
          <Text mt={3} fontSize="15px" color="teal.500" textDecoration="underline" textAlign="end">
            Sayfasına git
           </Text>
          </Link>
          </>
          )}
          </Box>
        ))
      )}
    </Box>
    <Box width={["5%" , "17%"]} >
        <Company4/>
    </Box>
    </Flex>
    </Flex>
    </>
  );
}

export default OrdersPage;
