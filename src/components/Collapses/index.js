import foto4 from '../../images/foto4.jpg'
import foto6 from '../../images/foto6.jpg'
import styles from './styles.module.css'
import special from '../../images/special.jfif'
import special3 from '../../images/special3.png'
import { Link  , useNavigate} from 'react-router-dom'
import { Stack , Box, HStack, Text, Badge, Button, Heading , Flex , Image} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons';
import { useLang } from '../../Contexts/LanguageContext'
import { useProductsContext } from '../../Contexts/ProductsContext'
import { useLocation } from 'react-router-dom'


function Collapses() {
  const location = useLocation()
  const navigate = useNavigate();
  const { products } = useProductsContext();
  const isLocation = location.pathname.includes("/SubscribedClient");
  const options = "home" ;
  const selectFoto1 = isLocation? special : foto6

  const selectFoto3 = isLocation? special3 : foto4

  const {messages, locale} = useLang();
  return (
    <Stack  border={isLocation? "0px" :"1px"} borderColor={isLocation? "whiteAlpha.500" :"softBrown.200"} boxShadow="sm" borderRadius={isLocation? "50px" :"0px"} w={isLocation? "470px" :"900px"} >
 
      <Box className={styles.carousels} boxShadow="sm" justifyContent="center"  justifyItems="center">
  
      
      <div id="carouselExampleCaptions" class="carousel slide"> 
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div >
    <div class="carousel-inner">
   
  <div class="carousel-item active">
  {(() => {
    const types = [...new Set(
      Object.values(products)
        .filter(product => product.kind === options)
        .map(product => product.type)
    )];

    const firstType = types[0]; 

    return (
      <Box _hover={{boxShadow:"xl"}} >
        <Button  w={isLocation ? "440px" : "940px"} variant="ghost" _hover={{bg:"inherit"}} h="full" onClick={() => navigate(`/products/${options}/${firstType}`)}>
          <Image
            src={selectFoto3}
            class="d-block"
            alt="..."
            style={{
              height: isLocation ? "400px" : "350px",
              borderTopLeftRadius: isLocation ? "50px" : "",
              borderTopRightRadius: isLocation ? "50px" : "",
              width: isLocation ? "440px" : "900px"
            }}
            objectFit="fill"
            objectPosition="top"
          />
        </Button>

        {!isLocation && (
          <div className={`carousel-caption ${styles.innerCr}`}>
            <Flex direction="column" justifyContent="center" width="full"  >
              <Box bg="blackAlpha.50"  justifyItems="center" >
                <Box width="200px" height="45px" >
                <Heading fontSize="13px" color="#696356" fontWeight="medium">{messages[locale].closetCompT}</Heading>
                <Text color="#878070" fontSize="11px" fontWeight="medium">{messages[locale].closetCompP}</Text>
                </Box>
              </Box>
            </Flex>
          </div>
        )}
      </Box>
    );
  })()}
</div>

     <div class="carousel-item">
  {(() => {
    const types = [...new Set(
      Object.values(products)
        .filter(product => product.kind === options)
        .map(product => product.type)
    )];

    const firstType = types[0]; // sadece ilk türü kullan

    return (
      <Box _hover={{boxShadow:"xl"}}>
        <Button w={isLocation ? "440px" : "940px"}  h="full"  variant="ghost" _hover={{bg:"inherit"}}onClick={() => navigate(`/products/${options}/${firstType}`)}>
          <Image
            src={selectFoto1}
            class="d-block"
            alt="..."
            style={{
              height: isLocation ? "400px" : "350px",
              borderTopLeftRadius: isLocation ? "50px" : "",
              borderTopRightRadius: isLocation ? "50px" : "",
              width: isLocation ? "560px" : "900px"
            }}
            objectFit="fill"
            objectPosition="top"
          />
        </Button>

        {!isLocation && (
           <div className={`carousel-caption ${styles.innerCr}`}>
            <Flex direction="column" justifyContent="center" width="full"  >
              <Box bg="blackAlpha.50"  justifyItems="center" >
                <Box width="200px" height="45px" bg="whiteAlpha.800" borderRadius="6px">
                <Heading fontSize="13px" color="#403e39" fontWeight="medium">{messages[locale].closetCompT}</Heading>
                <Text color="#403e39" fontSize="11px" fontWeight="medium">{messages[locale].closetCompP}</Text>
                </Box>
              </Box>
            </Flex>
          </div>
        )}
      </Box>
    );
  })()}
</div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
   
    
       <Box p="4" alignItems="center" textAlign="center" justifyContent="center" height={isLocation? "90px" :"110px"} flexWrap="nowrap"    
       paddingTop="0" marginTop="0" bg={isLocation? "#f7f5ed" :"#ebe3da"} borderBottomRadius={isLocation? "50px" :""} width= {isLocation ? "440px" : "900px"}>

        {isLocation && (
          <Box >
           <Heading fontSize="18px" fontWeight="light" color="blackAlpha.800" pt="16px" >
           HOŞ GELDİN!
          </Heading>
          <Text fontSize="13px" color="blackAlpha.700"  fontWeight="normal">
            Bu fırsatlardan yararlanmak için giriş yap.
          </Text>
        
        </Box>)}

        {!isLocation && (
          <>
            <HStack  alignItems="center" textAlign="center" justifyContent="center"  >
            <Badge bg="softNav2.500" variant="solid">
              1M+
            </Badge>
            <HStack gap="1" fontWeight="medium" >
              <FontAwesomeIcon icon={faStar} size="sm" color="orange" />
              <Text fontWeight="medium" mt="2" paddingTop="1" color="blackAlpha.700">  {messages[locale].closetCompT1} </Text>

            </HStack>
          </HStack >
          
           
          <HStack  color="softGray.500"  alignItems="center" textAlign="center" justifyContent="center" >
            <Text>{messages[locale].closetCompT2}</Text>
            <Link to="/">
            <Button size="xs" variant="ghost"  mb="4" ml="5px" p="2px" color="blackAlpha.700" _hover={{bg:"inherit" , textDecoration:"underline"}}> {messages[locale].closetCompB}</Button>
            </Link>
          </HStack>
          </>
        )}
        
        </Box>

    
 
  </Box>
  </Stack>
  
  )
}

export default Collapses