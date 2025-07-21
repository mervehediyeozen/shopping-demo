import  { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Heading, Text, Flex, Divider  , Image, HStack, Button} from "@chakra-ui/react";
import FixedTop from "../../components/FixedTop";
import { Link } from "react-router-dom";
import Company4 from "../../components/Company4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar,  faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function OrdersPage() {
  const orders = useSelector(state => state.shop.order);
  const [showMore , setShowMore] =useState(false);
  const handleShow = () => {
    setShowMore(!showMore);
  }

  return (

    <>
    <Flex direction="column" bg="#f7f4e9">
    <FixedTop/>
    <Flex direction="row" justifyContent="space-between" mt="100px">
    <Box p={10} width={["95%" , "84%"]}  >
        <HStack justifyContent="space-between">
        <Heading m={6} fontSize="28px" textDecoration="underline" color="blackAlpha.800">
        Siparişlerim
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
  <Text fontSize="18px" textAlign="center" color="gray.600">
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
            mb={6}
            boxShadow="md"
            bg="white"
          >

            <HStack justifyContent="space-between">
            <Heading fontSize="20px" color="#45433d" m={2} >Sipariş #{orders.length - 1 - index}</Heading>
           
          
            
            <Text color="blackAlpha.700"><strong>Tarih:</strong> {new Date(order.date).toLocaleString()}</Text>
            </HStack>
            <Divider my={4} />
            <Heading fontSize="18px" mb={2} textDecoration="underline">Ürünler</Heading>
            <Flex direction="row" justifyContent="space-evenly" w="full" >
            {order.items && order.items.map((product, idx) => (

              <Flex key={idx} direction="column" py={1} >
                <Box p="10px"border="1px" borderColor="gray.500" boxShadow="xl" >
                  <Image src={product.image}  width="175px" h="155px" />
                <Text fontSize="16px">{product.title?.tr || product.title}</Text>
                <HStack justifyContent="flex-end">
                    <FontAwesomeIcon icon={faDollar} size='sm'/>
                <Text fontSize="13px" pt="10px" textDecoration="underline" > {product.price} TL</Text>
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
                 <Text><strong>Adres:</strong> {order.addresT}</Text>
                              <Text><strong>Tarih:</strong> {new Date(order.date).toLocaleString()}</Text>
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
