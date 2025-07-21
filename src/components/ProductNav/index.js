import { useState } from 'react';
import { Box, Button,  InputGroup, Input, InputRightElement, Flex , Text} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate , useLocation} from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import { linkProducts } from '../../redux/shopSlice';
import { useProductsContext } from '../../Contexts/ProductsContext';
import { handleSearchButton } from '../../redux/shopSlice';



function ProductNav() {
  const location = useLocation();
  const {products} = useProductsContext();
  const [ input , setInput] = useState("");
  const changeInput = (e) => {
    setInput(e.target.value)

  }
   const kinds = [...new Set(Object.values(products).map(product => product.kind))];
  const navigate = useNavigate();
  const dispatch = useDispatch();
const handleSearch = () => {
  dispatch(handleSearchButton({ value: input, products })); 

  // Eğer sadece 1 tane ürün bulunursa direkt yönlendirme yapabilirsin
  const matched = Object.values(products).find(product => 
    product.kind.toLowerCase() === input.toLowerCase() || 
    product.type.toLowerCase() === input.toLowerCase()
  );

  if (matched) {
    navigate(`/products/${matched.kind}/${matched.type}`);
  }
};
  const isMain = location.pathname  === ("/Main")
    let bg , btnBg , btnHoverBg ,  borderBottomColor, btnHoverColor , borderBottompx
  if(location.pathname ===("/Communication")) {
    bg="#f5f1e9"
    btnBg="inherit"
    btnHoverBg="inherit"
    btnHoverColor="black"
    borderBottomColor="#a19a85"
  }
  else if(location.pathname===("/Main")){
    bg="white"
    btnBg="inherit"
    btnHoverBg="inherit"
    btnHoverColor="#9ab591"
    borderBottompx="0px"
  }
    else if(location.pathname.startsWith("/products")){
    bg="#f1efef"
    btnBg="#ded3c5"
    btnHoverBg="#bab3a0"
    btnHoverColor="black"
    borderBottomColor="f5f1e9"
    
  }
  else if(location.pathname===("/Opportunities")){
    bg="#faf9f7"
    btnBg="#faf9f7"
    btnHoverBg="#bab3a0"
    btnHoverColor="black"
    borderBottompx="0px"
  }
  else if (location.pathname.startsWith("/product")){
    bg="#bdb097"
    btnBg="bdb097"
    btnHoverBg="#f2f0eb"
    btnHoverColor="black"
    borderBottompx="0px"
  }
  else if (location.pathname.startsWith("/favproducts")){
    bg="#f1efef"
    btnBg="inherit"
    btnHoverBg="#f2f0eb"
    btnHoverColor="black"
     borderBottompx="1px"
    borderBottomColor="#bab39c"
    

  }
  else if (location.pathname === ("/FavProducts")){
    bg="#e3e0cf"
    btnBg="inherit"
    btnHoverColor="white"
    btnHoverBg="#3d3c38"
    borderBottompx="0px"
   

  }
   else if (location.pathname === ("/Products")){
    bg="#857d6d"
    btnBg="inherit"
    btnHoverColor="white"
    btnHoverBg="#3d3c38"
    borderBottompx="0px"
   

  }
   else if (location.pathname === ("/Profile")){
    bg="#c7bda9"
    btnBg="inherit"
    btnHoverColor="black"
    btnHoverBg="#f5f3e4"
    borderBottompx="0px"
   

  }
  else if(location.pathname === ("/Basket")) {
    bg="#e8ddc8"
    btnBg="inherit"
    btnHoverColor="white"
    borderBottompx="0px"
  }
    else if(location.pathname === ("/MostSellers")) {
    bg="#c7c0ad"
    btnBg="inherit"
    btnHoverColor="white"
    borderBottompx="1px"
    borderBottomColor="#bab39c"
  }
  else if(location.pathname === ("/AllCommentsPage")) {
    bg="#e3ddcc"
    btnBg="inherit"
    btnHoverColor="white"
    borderBottompx="0px"
    
  }

  
  else{
    bg="#5e5b54"
    btnBg="#d1ccbe"
    btnHoverBg="#bab3a0"
    btnHoverColor="black"
    borderBottomColor="inherit"
  }

  return (
    <Flex
      borderBottom={borderBottompx}
      borderColor={borderBottomColor}
      wrap="nowrap"
      gap="3"
      p="1"
      bg= {bg}
      maxH="50px"
    
      w="100%"  
      alignItems="center" 
      position="fixed"
      top= {isMain? "70px" :"70px"} 
      zIndex={isMain? "" :"999"}
      
    >

      <Flex  flexDirection="row"
       justifyContent="space-evenly"
       alignItems="center"
       w="100%" 
       maxWidth="100%" 
       gap="20px" 
       p="4"  
       overflow="hidden" 
       flexWrap="nowrap">
      <Box display="flex" gap="10px" justifyItems="center" >
       { kinds.map(kind => (
    <Box  key={kind}  >
    <Button
    
      onClick={() => {
        dispatch(linkProducts({ link: kind, product: Object.values(products) }));
        navigate(`/products/${kind}`); 
      }}
      variant={isMain? "unstyled":"solid"}
      size="xs"
      w="full"
      bg={btnBg}
      color="black"
      _hover= {{bg:btnHoverBg  , color:btnHoverColor}}
    >
      
      <Text borderBottom={isMain? "1px" :""} borderColor="#d6d6c7" fontSize={isMain? "15px" :"13px"} fontWeight={isMain ? "light" : "medium"} mt={isMain ? "" : "10px"} >{kind}</Text>
      
    </Button>
    </Box>
)) }
  </Box>

   <Box >
  <InputGroup size="sm" maxWidth="180px" w="auto" >
    <Input
    variant="flushed"
     _placeholder={{color:"black"}}
      pr="4rem"  
      type="text"
      placeholder="Search..."
      size="sm"
      value={input}
      width="auto"  
      onChange={changeInput}
      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      

    />
    <InputRightElement width="3rem">
      <Button size="sm" variant="ghost" rounded="full" _hover={{ bg: "softNav2.100" }} >
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </InputRightElement>
  </InputGroup>
  </Box>

</Flex>


    </Flex>
  );
}

export default ProductNav;
