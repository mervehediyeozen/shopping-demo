import { Box , Flex , Image , Button } from "@chakra-ui/react"
import { useSelector , useDispatch } from "react-redux"
import { useState } from "react"
import burgermenu from '../../images/menu2.jpg'
import { motion } from "framer-motion"
import { useNavigate , Link} from "react-router-dom"
import { toggleAllMenu , mostLikedProducts , linkTypeProducts} from "../../redux/shopSlice"
import logo from '../../images/logo4.jpg'
import closeIcon from '../../images/icon2.png'
import { useProductsContext } from "../../Contexts/ProductsContext"
function MainPageSlide() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { menu}= useSelector(state => state.shop);
    const isSlideOpen = menu.mainPageSlide;
    const {products} = useProductsContext();
    const [options, setOptions] =useState("mostlikes");
    const MotionBox = motion(Box);
    const MotionFlex = motion(Flex);
      const openFilterList = (name) => {
        dispatch(toggleAllMenu(name))
    };
    const changeOptions = (optId) => {
        setOptions(optId)
    }
    const productKinds = [...new Set(Object.values(products).map((product) => product.kind))];

  return (
    <>
    <Flex flexDirection="column" mt="35px" w={isSlideOpen ? "570px" : "300px"}  h={isSlideOpen ? "570px" : "300px"} position="absolute" zIndex={isSlideOpen ? "1" : "1"} bg="white" borderRight={isSlideOpen ? "2px" : ""}  borderBottom={isSlideOpen ? "2px" : ""} borderColor="#ebe5d5" boxShadow={isSlideOpen? "xl" :""} >
      
        {!isSlideOpen && (
            <>
             <Flex flexDirection="column" mt="20px">
                  <Box>               
        <Flex flexDirection="row" justifyContent="space-evenly">
                <Box display="flex" >
                    <Link to="/">
                <Image src={logo} w="80px" h="60px" />
                </Link>
             </Box>
             <Box display="flex" >
            <Button variant="ghost" h="full" w="full" _hover={{bg:"none"}} onClick={() => openFilterList("mainPageSlide")}>
            <Image src={burgermenu} w="45px" h="30px" />
            </Button>
        </Box> 
        
       
        </Flex>
        </Box>
        <Box>
                <Flex flexDirection="row"  mt="20px">
                    <Box>
                        <Button variant="ghost" _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}}  size="sm" fontWeight="light" color="#706c62" onClick={() => changeOptions("mostlikes")}>
                            Çok Sevilenler
                        </Button>
                    </Box>
                    <Box>
                       <Button variant="ghost"  fontWeight="light"size="sm" _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}}  _active={{bg:"medium" , fontWeight:"medium"}} color="#706c62" onClick={() => changeOptions("special")}>
                            Size özel
                        </Button>
                    </Box>
                    <Box>
                       <Button variant="ghost" fontWeight="light" size="sm" _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}}  _active={{bg:"medium" , fontWeight:"medium"}} color="#706c62" onClick={() => changeOptions("home")} >
                            Home
                        </Button>
                    </Box>
                </Flex>
                </Box>
                <Box>
                    <Flex direction="column" mt="20px" gap="20px" p="10px">
                        {options === "home" && (
                            <>
                                {[...new Set(
                    Object.values(products)
                    .filter(product => product.kind === options)
                    .map(product => product.type)
                )].map((type) => (
                    <Flex flexDirection="column">
                    <Box key={type}>
                    <Button
                       variant="ghost" fontWeight="light" size="sm" _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}}  _active={{bg:"medium" , fontWeight:"medium"}} color="#706c62"
                       onClick={() => {
                        dispatch(linkTypeProducts({ type: type, kind:options , products: Object.values(products) }));
                        navigate(`/products/${options}/${type}`);
                        }} 
                    >
                        {type}
                    </Button>
                    </Box>
                    </Flex>
                ))}
                     
                            </>
                        )}
                       {options === "mostlikes" && (
                        <>
                            {[...new Set(Object.values(products).map(pro => pro.kind))].map((kind, index) => (
                            <Box key={index}>
                                <Button 
                                variant="ghost" 
                                fontWeight="light" 
                                size="sm" 
                                color="#706c62"
                                _hover={{ bg: "none", fontWeight: "medium", color: "#5e6b5a" }}  
                                _active={{ bg: "medium", fontWeight: "medium" }}
                               onClick={() => {
                                
                               
                                navigate(`/favproducts/${kind}`);
                                }}
                                >
                                {kind}
                                </Button>
                            </Box>
                            ))}
                            
                              <Box >
                                <Link to="/MostSellers">
                                <Button 
                                color="#706c62"
                                variant="ghost" 
                                fontWeight="light" 
                                size="sm" 
                                _hover={{ bg: "none", fontWeight: "medium", color: "#5e6b5a" }}  
                                _active={{ bg: "medium", fontWeight: "medium" }}
                                >
                                en favorilenler
                                </Button>
                                </Link>
                            </Box>
                        </>
                        )}

                            
                         {options === "special" && (
                            <>
                              <Box>
                                <Link to="/Opportunities">
                                <Button variant="ghost" fontWeight="light" size="sm"  _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}}  _active={{bg:"medium" , fontWeight:"medium"}} color="#706c62">  Kampanyalar</Button>
                                </Link>
                            </Box>
                             <Box>
                                <Link to="/AllCommentsPage" >
                                <Button variant="ghost" fontWeight="light" size="sm" _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}}  _active={{bg:"medium" , fontWeight:"medium"}} color="#706c62"> Müşteri yorumları </Button>
                                </Link>
                            </Box>
                    
                            </>
                        )}
                
                    </Flex>
                </Box>
             </Flex>
            </>
        )}
        {isSlideOpen && (
            <>
          <MotionFlex flexDirection="column" mt="20px"
           initial={{ opacity: 0, x: -10 }}
         animate={{ opacity: 1, x: -10 }}
         exit={{ opacity: 0, x: -10 }}
         transition={{ duration: 0.5 }} >
                  <Box>
        <Flex flexDirection="row" justifyContent="space-between"  >
             <Box display="flex" ml="48px">
                <Link to="/">
                <Image src={logo} w="80px" h="60px" />
                </Link>
             </Box>
              <MotionBox
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 50 }}
         transition={{ duration: 0.4 }} 
         ml="55px"
        > 
            <Button variant="ghost" h="full" w="full" _hover={{bg:"none"}} onClick={() => openFilterList("mainPageSlide")}>
            <Image src={closeIcon} w="35px" h="25px" />
            </Button>
        </MotionBox> 
           
          </Flex>
        </Box>
     
        <MotionBox
         initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
        
        > 
                 <Flex flexDirection="column">
                <Flex flexDirection="row" mt="20px" ml="10px"  gap="10px">
                    <Box>
                       <Button variant="ghost" size="sm"    _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}} onClick={() => changeOptions("woman")}fontWeight="light" color="#706c62">
                            Kadın
                        </Button>
                    </Box>
                    <Box>
                       <Button variant="ghost" size="sm"    _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}} onClick={() => changeOptions("men")} fontWeight="light" color="#706c62">
                            Erkek
                        </Button>
                    </Box>
                    <Box>
                       <Button variant="ghost" size="sm"    _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}} onClick={() => changeOptions("kid")} fontWeight="light" color="#706c62">
                            Çocuk
                        </Button>
                    </Box>
                      <Box>
                       <Button variant="ghost" size="sm" color="#706c62"   _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}} _active={{bg:"medium" , fontWeight:"medium"}} onClick={() => changeOptions("jewerly")} fontWeight="light" >
                            Takı
                        </Button>
                    </Box>
                    <Box>
                       <Button variant="ghost" color="#706c62" _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}}size="sm" fontWeight="light" onClick={() => changeOptions("home")} >
                            Home
                        </Button>
                        </Box>
                        <Box>
                       <Button variant="ghost" size="sm"   color="#706c62" _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}} fontWeight="light" onClick={() => changeOptions("mostseller")}>
                            Çok Sevilenler
                        </Button>
                    </Box>
                    <Box>
                       <Button variant="ghost" size="sm"   _hover={{bg:"none" , fontWeight:"medium" , color:"#5e6b5a"}} fontWeight="light" onClick={() => changeOptions("anniversary")}>
                            Size özel
                        </Button>
                    </Box>
                        </Flex>
                        </Flex>
             </MotionBox>
              <MotionBox
         initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
        
        > 
                    <Flex direction="column" mt="20px" h="400px" gap="20px" ml="20px" bg="#f2eee1" p="15px" pt="35px" border="1px" borderColor="#d9d1bd"> 
                                    {["woman", "men", "kid", "jewerly", "home"].includes(options) && (
                [...new Set(
                    Object.values(products)
                    .filter(product => product.kind === options)
                    .map(product => product.type)
                )].map((type) => (
                    <Flex flexDirection="column">
                    <Box key={type}>
                    <Button
                        variant="ghost"
                        fontWeight="light"
                        size="md"
                        borderRadius="0px"
                        borderBottom="1px"
                        color="#4d4a44"
                         borderColor="#dbd5c3"
                        _hover={{ bg: "none", fontWeight: "medium", color:"#787468"  }}
                        _active={{ bg: "none", fontWeight: "medium" , color:"#787468"  }}
                       onClick={() => {
                        dispatch(linkTypeProducts({ type: type, kind:options , products: Object.values(products) }));
                        navigate(`/products/${options}/${type}`);
                        }} 
                    >
                        {type}
                    </Button>
                    </Box>
                    </Flex>
                ))
                )}
                   {options === "mostseller" && (
                            <>
                            <Box >
                                  
                               
                                {productKinds.map((pro , i ) => (
                                    <Flex flexDirection="column" >
                                        <Box mb="10px" >
                                    <Button key={i} 
                                        variant="ghost"
                                        fontWeight="light"
                                        size="md"
                                        borderRadius="0px"
                                        borderBottom="1px"
                                        color="#4d4a44"
                                        borderColor="#dbd5c3"
                                        _hover={{ bg: "none", fontWeight: "medium", color:"#787468" }}
                                        _active={{ bg: "none", fontWeight: "medium" , color:"#787468"  }}
                                    onClick={() => {
                                        navigate(`/favproducts/${pro}`);;
                                        }} 
                                    >
                                       {pro}
                                    </Button>
                                    </Box>
                                    </Flex>
                                  
                                ))}
                                
                               
                               </Box>
              
                             <Box >
                                <Link to="/MostSellers" >
                                <Button variant="ghost" fontWeight="light" size="md"
                                    borderRadius="0px"
                                    borderBottom="1px"
                                    color="#4d4a44"
                                    borderColor="#dbd5c3" _hover={{bg:"none" , fontWeight:"medium" , color:"#787468" }}  _active={{bg:"none" , fontWeight:"medium" , color:"#787468" }}> en sevilenler </Button>
                                </Link>
                            </Box>
                           
                            </>
                   )}
                   {options === "anniversary" && (
                            <>
                             <Box>
                                <Link to="/Opportunities">
                                <Button variant="ghost" fontWeight="light" size="md"
                                borderRadius="0px"
                                borderBottom="1px"
                                color="#4d4a44"
                                borderColor="#dbd5c3" _hover={{bg:"none" , fontWeight:"medium" , color:"#787468" }}  _active={{bg:"none" , fontWeight:"medium" , color:"#787468" }}>  Fırsatlar </Button>
                                </Link>
                            </Box>
                             <Box>
                                <Link to="/AllCommentsPage" >
                                <Button variant="ghost" fontWeight="light"size="md"
                                    borderRadius="0px"
                                    color="#4d4a44"
                                    borderBottom="1px"
                                    borderColor="#dbd5c3" _hover={{bg:"none" , fontWeight:"medium" , color:"#787468" }}  _active={{bg:"none" , fontWeight:"medium", color:"#787468" }}> Müşteri yorumları </Button>
                                </Link>
                            </Box>
                           
                            </>
                   )}

                
                    </Flex>
                </MotionBox>
          </MotionFlex>  
        </>
           )} 
    </Flex>
    </>
  )
}

export default MainPageSlide