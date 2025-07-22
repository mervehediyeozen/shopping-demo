import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLang } from '../../Contexts/LanguageContext';
import {
  Flex, Box, Image, Text, Button, HStack, Stack, Heading
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

function Orders() {
  const { messages, locale } = useLang();
  const order = useSelector(state => state.shop.order);
  const [visibleOrders, setVisibleOrders] = useState(1);
  const [notShowMoreButtons , setNotShowButton] = useState(true);
  const isLongerThan = order.length > 3;

  const chunkedOrders = [];
  for (let i = 0; i < order.length; i += 3) {
    chunkedOrders.push(order.slice(i, i + 3));
  }

  const visibleOrderItems = chunkedOrders.slice(0, visibleOrders);
  const showMore = () => 
    {setVisibleOrders(prev => prev + 1) 
    setNotShowButton(false)
     } ;

  if (!order || order.length === 0) {
    return (
      <Flex  flexDirection="column" pt="50px"  h="270px"  bg="#fffefc">
        <Box  pl="35px">
          <Link to="/OrdersPage">
          <Heading fontWeight="normal" color="#59564a" size="sm">
              {messages[locale].myorders}
          </Heading>
          </Link>
        </Box>
        <Box mt="50px">
      <Flex flexDirection="row" gap="15px"  h="45px" justifyContent="center" >
        <Box>
          <Text fontSize="14px" color="#4d4a42" fontWeight="light" >Siparişiniz yok.</Text>
        </Box>
        <Box   >
          <Link to="/Products">
            <Button
              variant="link"
               fontSize="14px"
              color="#788f68"
              textDecor="underline"
              fontWeight="light"
              _hover={{ bg: "inherit", textDecoration: "underline" }}
            >
              Hemen oluştur
            </Button>
          </Link>
        </Box>
      </Flex>
      </Box>
      </Flex>
    );
  }

  return (
    <Stack h="320px" mb="15px"  pl="35px"  mt="30px"  bg="#fffefc">
      <HStack >
        <Link to="/OrdersPage">
          <Heading
           
            fontWeight="normal"
            color="#59564a" fontSize="17px" 
          >
            {messages[locale].orderT}
          </Heading>
        </Link>
      </HStack>

      <Flex width="100%"  gap="20px" p="20px" flexWrap="no-wrap" w="100%"> 
        {visibleOrderItems.map((row, rowIndex) => (
          <Flex key={rowIndex} gap="20px" wrap="wrap">
            {row.map((orderItem) => {
              const firstProduct = orderItem.items?.[0];
              return (
                <Box
                  key={orderItem.id}
                  width="185px"
                  bg="white"h="230px"
                  border="2px solid"
                  borderColor="#d9d5b8"
                  p="10px"
                  boxShadow="sm"
                  _hover={{boxShadow:"xl"}}
                >
                  <Link to={`/orders/${orderItem.id}`}>
                  <Box mb="10px">
                    <Image
                      src={firstProduct?.image}
                      alt={firstProduct?.title?.tr || 'Ürün'}
                      w="100%"
                      h="130px"
                      objectFit="cover"
                    />
                  </Box>
                  </Link>
                   <Flex flexDirection="row" justifyContent="space-between" >
                    <Box>
                   <Text fontSize="13px" textDecoration="underline" fontFamily="monospace" fontWeight="bold">
                      {firstProduct?.title?.tr}
                    </Text>
                    </Box>
                     <Box>
                         <Link to={`/product/${firstProduct?.id}`}>
                      <Button
                        size="xxs"
                        variant="outline"
                        outlineColor="softBrown.700"
                      >
                        <FontAwesomeIcon icon={faRightLong} color="gray" size="sm" />
                      </Button>
                    </Link>
                   </Box>
                   
                    </Flex>
                  <Flex flexDirection="row" justifyContent="space-between"> 
                    <Box>
                    <Text fontSize="13px" fontFamily="monospace" color="green.700">
                      Toplam: ₺{orderItem.totalPrice}
                    </Text>
                    </Box>
                     <Box>
                    <Text fontSize="12px" color="gray.600" fontFamily="monospace">
                      {new Date(orderItem.date).toLocaleDateString('tr-TR')}
                    </Text>
                    </Box>
                  
                  </Flex>
            
               
                 
                </Box>
              );
            })}
          </Flex>
        ))}
      </Flex>

      {isLongerThan && !notShowMoreButtons &&  (
        <Flex justifyContent="right" mr="15px"  >
        <Box>
          <Button
            variant="ghost"
            onClick={showMore}
            _hover={{ bg: "inherit", textDecoration: "underline" }}
          >
            Daha fazla göster
          </Button>
        </Box>
        </Flex>
      )}
    </Stack>
  );
}

export default Orders;