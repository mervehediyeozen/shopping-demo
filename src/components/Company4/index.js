import { Flex , Box , Image } from '@chakra-ui/react'
import comp4 from '../../images/comp4.png'
import comp5 from '../../images/comp5.jpg'
import comp6 from '../../images/comp6.jfif'
import comp7 from '../../images/comp6.jpg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Company4() {

  const location = useLocation()
  const isLocation = location.pathname.includes("/SubscribedClient");

  return (
    <Flex direction="column" bg={ isLocation ? "#42403c" : "#2e2e2c" }w="full"  >
         <Box w="250px" pl="10px" mt="15px">
            <Link to="/">
        <Image src={comp4} h="240px" w="230px"></Image> 
        </Link>
        </Box>
        <Box  w="250px" pl="10px"  mt="5px" >
        <Link to="/">
        <Image src={comp5}  h="240px" w="230px" ></Image> 
        </Link>
        </Box>
        <Box  w="250px" pl="10px"  mt="5px">
        <Link to="/">
        <Image src={comp6}  h="240px" w="230px" ></Image> 
        </Link>
        </Box>
        <Box  w="250px" pl="10px"  mt="5px">
        <Link to="/">
        <Image src={comp7}  h="240px" w="230px" ></Image>
        </Link> 
        </Box>
    </Flex>
  )
}

export default Company4