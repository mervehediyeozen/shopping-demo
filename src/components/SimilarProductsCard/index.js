import { Flex , Box , Text , Image, Button,  Divider} from "@chakra-ui/react"
import { useProductsContext } from "../../Contexts/ProductsContext"
import { Link } from "react-router-dom";


function SimilarProductsCard({product , locale}) {
    const {products} = useProductsContext();
    const similar = Object.values(products).filter((prod) => prod.id != product.id && prod.type === product.type && prod.kind === product.kind  )
  return (
    <Flex w="300px" h="auto"  direction="column" justifyContent="center">
     
            {similar.map((a , key) => {
                return (        
                 
                    <Box justifyItems="center"  pb="15px"  pt="15px"borderBottom="1px" borderColor="#e0ded1">
                <Box   key={key} w="250px" h="265px" justifyItems="center"    bg="#f2eee6" mb="10px" border="1px" borderColor="#b5b19a" rounded="7px">
                   <Link to={`/product/${a.id}`}>
                  <Box pt="12px">
                    <Image src={a.image} objectFit="cover" objectPosition="top" h="155px" w="220px" justifySelf="center"rounded="5px" border="1px" borderColor="#d9d5cc"  /></Box>
                      <Box pt="5px" >
                    <Text fontSize="15px" fontFamily="heading" fontWeight="light" color="black"  > {a.title[locale]}</Text>
                    </Box>
                    <Flex justifyContent="space-evenly" w="full" h="60px" alignContent="center" alignItems="center" flexDirection="row"  borderBottom="1px" borderColor="#a39c87" bg="#d9ccb4" roundedBottom="7px"  >
                      <Box >
                    <Button  variant="ghost" size="xs" fontWeight="bold" _hover={{cursor:"default"}}> {a.price}</Button>
                      </Box>
                   <Divider orientation="vertical" borderColor="#a39c87"/>
                   <Box >
                    <Link to={`/product/${a.id}`}>
                    <Button  variant="ghost" size="xs" fontWeight="medium" _hover={{bg:"#e8e5d8"}}> Ürüne git</Button>
                    </Link>
                    </Box>
                    </Flex>
                    </Link>
        
                 </Box>
                 </Box>
             
               
                 )
            })}
        
    </Flex>
  )
}

export default SimilarProductsCard