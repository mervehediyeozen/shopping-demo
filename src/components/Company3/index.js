import {useState} from 'react'
import { Box, Flex , HStack, Image , Button, Center} from '@chakra-ui/react'
import ind1 from '../../images/ind2.png'
import ind2 from '../../images/ind3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Company3() {
    const [box , setBox] =useState(false);
    const location = useLocation();
    const isMainPage = location.pathname.includes("/Opportunities")
    const changeBox =()=> {
        setBox(!box)
    }
  return (
    <Flex width="100%" height={isMainPage? "400px" :"275px"}  bg="#f7f4f0"   >
       <Box width="100%" justifyContent="center" > 
        {!box && (
            <>
             <Center>
              <Link to="">
             <HStack >
             <Button onClick={changeBox} height={isMainPage? "300px" :"120px"} variant="ghost" _hover={{bg:"#474441"}}> <FontAwesomeIcon icon={faChevronLeft}  color='black'/></Button>
        <Image src={ind1}  width="1200px" height={isMainPage? "400px" :"275px"} justifyContent="center"/>
       <Button onClick={changeBox}height={isMainPage? "300px" :"120px"}  variant="ghost" _hover={{bg:"#474441"}}> <FontAwesomeIcon icon={faChevronRight}  color='black'/></Button>
        </HStack>
        </Link>
        </Center>
            </>
        )}

        {box && (
            <>
              <Center>
             <Link to="">
              <HStack>
              <Button onClick={changeBox} height={isMainPage? "300px" :"120px"}  variant="ghost" _hover={{bg:"#474441"}}> <FontAwesomeIcon icon={faChevronLeft} color='black'  /></Button>  
        <Image src={ind2} width="1200px" height={isMainPage? "400px" :"275px"}/>
        <Button onClick={changeBox} height={isMainPage? "300px" :"120px"}  variant="ghost" _hover={{bg:"#474441"}}> <FontAwesomeIcon icon={faChevronRight} color='black' /></Button>
        </HStack>
        </Link>
        </Center>
            </>
        )}
       </Box>

  
    </Flex>
  )
}

export default Company3