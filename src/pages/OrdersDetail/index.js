import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Box, Heading, Text, Flex, Divider } from "@chakra-ui/react";
import FixedTop from '../../components/FixedTop';

function OrdersDetail() {
    const orders = useSelector(state => state.shop.orders);
    const {id} = useParams();
    const order = orders.find((order) => order.id === id);
    if (!order) {
        return (
          <Box p={10} mt="100px">
            <Heading>Bu ID'ye ait bir sipariş bulunamadı.</Heading>
          </Box>
        );
      }
    
      return (
        <>
          <Flex direction="column">
            <FixedTop />
            <Box p={10} mt="100px">
              <Heading fontSize="30px" mb={4}>Sipariş Detayı</Heading>
            
              <Text><strong>Adres:</strong> {order.addresT}</Text>
              <Text><strong>Tarih:</strong> {new Date(order.date).toLocaleString()}</Text>
    
              <Divider my={5} />
    
              <Heading fontSize="22px" mb={3}>Ürünler</Heading>
              {order.items && order.items.map((product, index) => (
                <Flex key={index} justifyContent="space-between" py={1}>
                  <Text>{product.title?.tr || product.title}</Text>
                  <Text>{product.price} TL</Text>
                </Flex>
              ))}
            </Box>
          </Flex>
        </>
      );
    }
    
    export default OrdersDetail;