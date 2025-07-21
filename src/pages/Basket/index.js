import { useState } from 'react'
import { Image, Button, Alert, Box, Flex, Heading, Text, AlertTitle, AlertDescription, AlertIcon, HStack , Input , FormControl , FormLabel, Select,  Divider , Grid, Stack} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../../Contexts/LanguageContext';
import Footer from '../../components/Footer';
import { sortProducts } from '../../Functions/Array';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBox, faInfoCircle, faTrash,faCashRegister, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useProductsContext } from '../../Contexts/ProductsContext';
import { Formik , Form , ErrorMessage} from 'formik';
import FixedTop from '../../components/FixedTop';
import { validationSchema } from './yup';
import { getOrder , removeFromBasket} from '../../redux/shopSlice';
import { useDispatch , useSelector } from 'react-redux';
import Company4 from '../../components/Company4';

function Basket() {
  const dispatch = useDispatch();
  const [visibleBasket , setVisibleBasket] = useState(1);
  const [visibleSimilar , setVisibleSimilar] = useState(1);
  const [notShowMoreButtons , setNotShowButton] = useState({
    basketItemButton : false,
    similarItemButton : false
  });
  const item = useSelector(state => state.shop.box);
  const { products } = useProductsContext(); 
  const allProducts = Object.values(products);
  const basketIDs = new Set(item.map(i => i.id));
  const similarProducts = allProducts.filter(prod => {
  const isInBasket = basketIDs.has(prod.id); 
  const hasSameKind = item.some(basketItem => basketItem.kind === prod.kind);

  return !isInBasket && hasSameKind;
});


  const { locale, messages } = useLang();
  const address = useSelector(state => state.shop.address);
  const [ isSectionClicked , setIsSectionClicked] = useState(false);
  const totalPrice = item.reduce((acc, product) => acc + product.price, 0);
  const navigation = useNavigate();
  const initialValues ={
    addresT:'',
    cardNo: '', 
    cardCvv: '', 
    cardDate: '' ,
    };
  const [ alarm , setAlarm] = useState(false);
  const goHome = () => {
    navigation("/Home")
  }
  const goProducts = () => {
    navigation("/Products")
  }
  const handlePurchase = () => {
    window.location.hash = 'purchase-section';
    setIsSectionClicked(true);
  };

 
  const handleSubmit = (values, actions) => {
    dispatch(getOrder({
      cardCvv: values.cardCvv,
      cardNo: values.cardNo,
      cardDate: values.cardDate,
      addresT: values.addresT
    }, item, totalPrice));
  
    setAlarm(true);
    actions.setSubmitting(true);
  };
  const isLonger = similarProducts.length >3; 
  const isLongerThan = item.length >3; 
  const forPadding = similarProducts.length === 1 || similarProducts.length === 2;
  const chunkedItems = sortProducts(item, 3);
  const chunkedItems2 = sortProducts(similarProducts, 3);
  const allBasket = chunkedItems.slice(0 , visibleBasket);
  const allSimilars = chunkedItems2.slice(0 , visibleSimilar);
const sortingBasket = isLongerThan ? allBasket : chunkedItems;
const sortingSimilars = isLonger ? allSimilars : chunkedItems2;
  const showAllBasket = () => {
    setVisibleBasket((prev) => prev+1)
        setNotShowButton(prev => ({
    ...prev,
    basketItemButton: true
  }));
  }
  const showAllSimilars = () => {
    setVisibleSimilar((prev) => prev+1)
      setNotShowButton(prev => ({
    ...prev,
    
    similarItemButton: true
  }));
   
  }

  return (
    <>
      <Flex direction="column" justify="space-between" >
        <Box>
      <FixedTop/>
      </Box>
      <Box>
        <Flex direction="row" mt="120px"  bg="white"  w="full" justify="space-between" >
          <Box width={["85%", "%95"]} p="15px" >
              <Box p="15px">
                {item.length <= 0 && (
                  <>
                    <Alert status="warning">
                      <AlertIcon />
                      <AlertTitle>{messages[locale].noProductAlertT}</AlertTitle>
                      <AlertDescription>({messages[locale].noProductAlert})</AlertDescription>
                    </Alert>
                  </>
                )}
                {item.length > 0 && (
                  <>
                      <Flex direction="column" bg="#5c574c"  p="15px"  maxH="1500px" h="auto" pb="20px" pt="20px" >
                        
                      <Flex  direction="column" bg="white" border="1px" borderColor="#b8b0a0"   p="20px" >
                          <Box p="5px" >
                            <HStack>
                      <Heading fontSize="29px" color="#40403b"   fontWeight="light"> Sepetin</Heading>
                      <FontAwesomeIcon color="black"icon={faBox} />
                      </HStack>
                      </Box>
                       {sortingBasket.map((group, index) => (
                        
                      <Grid
                        key={index}
                        templateColumns="repeat(4, 1fr)"
                        p="10px"
                        pb="40px"
                      >
                        
                        {group.map((product) => (
                          <Box
                            key={product._id}
                            bg="white"
                            border="1px solid"
                            borderColor="#a8a492"
                            w="250px"
                            textAlign="center"
                            boxShadow="md"
                            p="10px"
                            _hover={{boxShadow:"xl"}}
                          >
                            <Link to={`/product/${product._id}`}>
                              <Image
                                w="full"
                                h="150px"
                                src={product.image}
                                objectFit="cover"
                                objectPosition="top"
                                alt={product.imageAlt[locale]}
                              />
                              <Flex flexDirection="row" mt="10px" justifyContent="space-around" h="20px">
                              <Box>
                              <Heading
                                fontSize="16px"
                                color="black"
                               
                                textAlign="center"
                                 fontWeight="light"
                              >
                                
                                {product.title[locale]}
                              </Heading>
                              </Box>
                              <Box >
                              <Text fontSize="14px" fontWeight="light" color="#6a7d5b"  textAlign="center">
                               $ {product.price} 
                              </Text>
                              
                              </Box>
                              </Flex>
                                 <Divider borderColor="#ccc8b8"/>
                              <Button
                                mb="10px"
                                size="xs"
                                gap="5px"
                                bg="#ede7ce"
                                outlineColor="#9c9784"
                                fontWeight="normal"
                                color="black"
                                onClick={() => dispatch(removeFromBasket(product._id))}
                                _hover={{ bg: "#ede7ce", color: "black" }}
                              >
                                <FontAwesomeIcon icon={faTrash}/>
                                <Divider orientation='vertical'  borderColor="#9c9784"/>
                                {messages[locale].throwBasket}
                              </Button>
                            </Link>
                            </Box>
                        
                        ))}
                      </Grid>
    ))}
    {isLongerThan && !notShowMoreButtons.basketItemButton && (
      <Flex justifyContent="right">
      <Button onClick={showAllBasket} variant="ghost" fontWeight="light" _hover={{bg:"inherit" , textDecoration:"underline" , textDecorationColor:"#aba48e"}} >
        Hepsini göster
      </Button>
      </Flex>
    )}
                        </Flex> 
                    
                    <Flex direction="column" width="full" mt="10px"  bg="white"  p="15px" pb="50px" >
                        <Box m="20px" mt="30px">
                            <HStack>
                        <Heading fontSize="29px" mb="10px" fontWeight="light" color="#40403b" >
                          Satın Al
                          </Heading>
                          <FontAwesomeIcon icon={faCartShopping} />
                          </HStack>
                     
                      </Box>
                    <Box>
  <Flex flexDirection="row" width="full"   textAlign="center" id="purchase-section" border="1px" borderColor="#f5f0e4"
  alignContent="center" justifyContent="center" bg="white" rounded="5px" height="150px">
    
      <Box  display="flex" justifyItems="center" alignItems="center">
        <Box mt="12px" mr="50px">
          <Box h="22px">
        <Text fontSize="15px"  fontWeight="light" color="#1f1f1d">Toplam tutarın</Text>
          </Box>
          <Box mt="5px">
        <Text fontSize="17px" bg="#fcfaf2" border="1px" fontFamily="monospace"borderColor="#f5f0e4"
          fontWeight="light" rounded="7px" > 
          {totalPrice} TL
        </Text>
        </Box>
        </Box>
      
      <Divider orientation="vertical" h="full"  borderColor="#f5f0e4"  />
      <Box display="flex" h="full" w="100px" bg="inherit" justifyContent="center" alignItems="center">
        <Button
          
          variant="ghost"
          color="#40403b"
         _hover={{bg:"blackAlpha.700" , color:"beige"}} 
          width="80px"
          height="25px"
          fontWeight="normal"
          onClick={handlePurchase}
        >
          Satın Al
        </Button>
      </Box>
      <Divider orientation="vertical" height="full" borderColor="#f5f0e4"  />
      <Box mt="10px" ml="42px" >
        <Box h="20px">
        <Text fontSize="14px"  fontWeight="light" color="#1f1f1d">veya dolaşmaya devam et</Text>
        </Box>
        <Flex flexDirection="row" mt="10px" gap="5px">
        <Button onClick={goHome} rounded="5px"  size="xs" bg="#fcfaf2"
           fontWeight="medium"  _hover={{bg:"blackAlpha.700" , color:"beige"}}>Anasayfa</Button>
        <Button ml="10px" onClick={goProducts}  size="xs"  bg="#fcfaf2"
           fontWeight="medium"rounded="5px" _hover={{bg:"blackAlpha.700" , color:"beige"}} > Ürünler</Button>
         </Flex>
      </Box>
    </Box>
    
  </Flex>
  </Box>

  {isSectionClicked && (
               <Flex
               flexDirection="column"
               id="purchase-section"
               p="20px"
            
               w="full"
               bg="inherit"
               mt="20px" >
               <HStack>
                      <Heading fontSize="29px"  color="#40403b"  fontFamily="revert" textDecorationThickness="from-font" fontWeight="light" >  Ödeme</Heading>
                      <FontAwesomeIcon icon={faCashRegister} />
                      </HStack>
          <Text fontSize="16px" mb="20px"  color="blackAlpha.700">
            Burada ödeme işlemlerinizi gerçekleştirebilirsiniz.
          </Text> 
        
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({  handleChange, errors, values, touched }) => (
         <Form>
         <Flex  w="full" h="auto" justifyContent="center" mb="20px" pt="20px" pb="20px">
          <Box  w="full" mr="50px">
          <FormControl isInvalid={errors.addresT && touched.addresT}>
            <FormLabel color="blackAlpha.700">
              Adres
            </FormLabel>
            <Select placeholder="Adres seçin"  onChange={handleChange} w="full"  
                             color="black"  _hover={{bg:"#d9d1ba" , outlineColor:"#d9d3c3"}} _active={{outlineColor:"#d9d3c3"}} 
                             bg="#f2ead3"
                             outlineColor="#ebe6d8" fontWeight="light" >
               {address.map((item, index) => (
               <option key={index} value={values.addresT}>
                 {item.title}
                  </option>
            ))}
  </Select>
          </FormControl>
        <FormControl mt="15px" isInvalid={errors.cardNo && touched.cardNo}>
                          <FormLabel color="blackAlpha.700"> Kart Numarası</FormLabel>
                          <Input
                             variant="filled"
                             w="full"
                             placeholder='xxxxxxxx'
                            
                             color="black"
                            id="name"
                            type="number"
                            name="cardNo"
                            _placeholder={{color:"blackAlpha.700"}}
                            _hover={{bg:"#d9d1ba" , outlineColor:"#d9d3c3"}} _active={{outlineColor:"#d9d3c3"}} 
                             bg="#f2ead3"
                             outlineColor="#ebe6d8"
                         
                            value={values.cardNo}  
                            onChange={handleChange} 
                          
                          />
                            <ErrorMessage name="cardNo" component="div" style={{ color: 'black' }} />
                        </FormControl>
                        </Box>
                        <Box w="full" ml="40px" >
                        <FormControl isInvalid={errors.cardDate && touched.cardDate}  >
                          <FormLabel color="blackAlpha.700"> Kart son kullanma tarihi</FormLabel>
                          <Input
                            id="surname"
                            type="date"
                            name="cardDate"
                            variant="filled"
                            fontWeight="light"
                            w="full"
                            _placeholder={{color:"black"}}
                            _hover={{bg:"#d9d1ba" , outlineColor:"#d9d3c3"}} _active={{outlineColor:"#d9d3c3"}} 
                             bg="#f2ead3"
                             outlineColor="#ebe6d8"
                             color="black"
                            value={values.cardDate}  
                            onChange={handleChange} 
                        
                          />
                        </FormControl> 
                        <FormControl mt="15px" isInvalid={errors.cardCvv && touched.cardCvv}  >
                          <FormLabel color="blackAlpha.700"> Kart cvv</FormLabel>
                          <Input
                            variant="filled"
                            w="full"
                            _placeholder={{color:"blackAlpha.700"}}
                            bg="#f2ead3"
                             color="black"
                            id="surname"
                            type="number"
                            name="cardCvv"
                            placeholder='xxx'
                            outlineColor="#ebe6d8"
                            value={values.cardCvv}  
                            _hover={{bg:"#d9d1ba" , outlineColor:"#d9d3c3"}} _active={{outlineColor:"#d9d3c3"}} 
                            onChange={handleChange} 
                          />
                            <ErrorMessage name="cardCvv" component="div" style={{ color: 'black' }} />
                        </FormControl> 
                        </Box>
                        </Flex>
                     <Button color="blackAlpha.800" w="full"  mt="20px" type='submit'  _hover={{bg:"#d9d1ba" , outlineColor:"#d9d3c3"}} _active={{outlineColor:"#d9d3c3"}} 
                             bg="#f2ead3"
                            fontWeight="normal">
                   Ödeme Yap
                </Button>
             
                        </Form>
                         )}
                        </Formik>
                   
            
  
        </Flex>
           )}
                 {alarm && (
                     <Flex direction="row" w="full" bg="#c7ba9f" border="1px" mt="15px" borderColor="#d9d1c1" borderRadius="lg" p="15px" justifyContent="space-between" pt="25px">
                    <Box display="flex" gap="10px" ml="5px">
                 <FontAwesomeIcon icon={faInfoCircle}  size='xl' color='black'/> 
                 <Heading fontSize="17px" color="blackAlpha.800" fontWeight="normal" > Siparişiniz başarıyla oluştu.</Heading>
                 </Box>
                 <Box>
                  <Link to="/OrdersPage">
                   <Text fontSize="17px" mr="100px" textDecoration="underline" textDecorationColor="#615c52" fontWeight="light"> Görmek için tıklayın.</Text>
                  </Link>
                    </Box>
                   </Flex>
               )}
 
          </Flex>
          </Flex>
               </>
                )}
              </Box>
          </Box>
           {item.length > 0 &&  similarProducts.length > 0 && (
            <>
          <Box width={["15%", "%5"]} direction="column" >
              <Box textAlign="center" justifyContent="center" alignItems="center" bg="#e8ddc8" h={forPadding ? "500px" : "auto"}>
             <Flex flexDirection="column" >
              <Box mt="4px" h="14px" >
                <Text fontSize="17px" fontWeight="normal" color="#54514a">
                  Benzer ürünler 
                </Text>
              </Box>
              <Box justifyItems="center">
                <Divider borderColor="#948c7b" w="89%"/>
              </Box>
              <Box justifyItems="center" h="auto">
                {sortingSimilars.map((row , rowIndex) => (
                   <Box key={rowIndex} >
                  {row.map((i , key) => (
                <Box key={key} justifyItems="center" w="190px" p="10px" bg="#fcfcfc"  mb="10px" border="1px" borderColor="#bab39b" >
                  <Link to={`/product/${i.id}`}>
                    <Box >
                      <Image src={i.image} w="176px" h="120px" border="1px" borderColor="#bab39b" objectFit="cover" objectPosition="top"/>
                    </Box>
                    <Box mt="10px" h="auto" justifyItems="center"  >
                    <Flex flexDirection="row" justifyItems="space-between" gap="10px" >
                    <Box >
                      <Text fontWeight="light" fontSize="13px"> {i.title[locale]}</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="light" fontSize="13px" color="#8c9e78"> {i.price}</Text>
                    </Box>
                    </Flex>
                    </Box>
                    </Link>
                </Box>
             
              
              ))}
                  </Box>
                ))}
                
                {isLonger && !notShowMoreButtons.similarItemButton &&  (
                    <Flex justifyContent="center">
                <Button onClick={showAllSimilars} variant="ghost" fontWeight="light" _hover={{bg:"inherit" , textDecoration:"underline" , textDecorationColor:"#aba48e"}} >
                  Hepsini göster
                </Button>
                </Flex>
                )}
              </Box>
               </Flex>
               
              </Box>
         
    
           
          </Box>
          </>
           )}
           {item.length === 0  &&  similarProducts.length === 0 &&(
             <Box width={["15%", "%5"]}>
            <>
             <Company4/>
            </>
            </Box>
            
           )}
        </Flex>
        </Box>
     
       <Box as="footer">
           <Stack>
        <Footer/>
        </Stack>
       </Box>
      </Flex>
    </>
  )
}

export default Basket;
