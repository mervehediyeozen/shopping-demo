import { Box, Flex  ,Divider} from '@chakra-ui/react'
import Orders from '../../../components/Orders'
import Favs from '../../Favs';
import { useSelector } from 'react-redux';


function UserContent() {
  const favProducts = useSelector(state => state.shop.favProducts);
  const orders = useSelector(state => state.shop.order);
  const isContentEmpty = orders.length === 0 && favProducts.length === 0 ;

  return (
   <Flex flexDirection="column" bg="#fffefc">
   <Box  pb="40px" border="2px" borderColor="#d6d2b6"  bg="#fffefc">
    <Box>
     <Orders/>
    </Box>
    <Box h="0" >
      <Divider borderColor="#c7bfa3" h="full" w="full"/>
    </Box>
    <Box>
     <Favs/>
    </Box>
   </Box>
   </Flex>
  )
}

export default UserContent