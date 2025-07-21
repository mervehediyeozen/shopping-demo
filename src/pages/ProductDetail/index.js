import { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import {
  Box, Image, Text, Heading, Button, HStack, Flex, Badge,
  Alert, AlertIcon, AlertTitle, AlertDescription, Select, Divider,
} from '@chakra-ui/react';
import { useProductsContext } from '../../Contexts/ProductsContext'; 
import ProductNav from '../../components/ProductNav';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useLang } from '../../Contexts/LanguageContext';
import Questions from '../../components/Questions';
import PhotoComments from '../../components/PhotoComments';
import Navbar from '../../components/Navbar';
import surat from '../../images/surat.png';
import { createBasket , favButton } from '../../redux/shopSlice';
import { useDispatch, useSelector } from 'react-redux';
import SimilarProductsCard from '../../components/SimilarProductsCard';
import FixedTop from '../../components/FixedTop';
import Footer from '../../components/Footer';

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams(); 
  const { products, locale } = useProductsContext();
  const product = Object.values(products).find(p => p.id === parseInt(id));
  const { isLogged, box } = useSelector(state => state.shop);
  const { messages } = useLang();
  const [showAlert, setShowAlert] = useState(false);
  const [showSecAlert, setShowSecAlert] = useState(false);
  const MotionBox = motion(Box);
   const favProducts = useSelector(state => state.shop.favProducts);
  const [showAll, setShowAll] = useState(false);
  const showDesc = () => setShowAll(!showAll);
  if (!products || Object.keys(products).length === 0) {
    return <Text>Yükleniyor...</Text>;
  }
    const isFav = favProducts.some(fav => fav.id === product.id);
  const findBasketItem = box.find(item => item.id === product.id);

  if (!product || !product.stock) {
    return <Text>Ürün bulunamadı veya stok bilgisi eksik.</Text>;
  }

  const info = {
    stockTotal: Object.entries(product.stock)
      .filter(([key]) => key !== 'total')
      .reduce((sum, [, val]) => sum + parseInt(val), 0),
    material: product.material,
    color: product.color,
    type: product.type,
    wideness: product.wideness,
    style: product.style,
  };
  const lessInfo = `${messages[locale].totalstock} ${info.stockTotal} , ${messages[locale].productcolor} ${info.color}`;

  const handleClick = () => {
    if (!product) return;
    if (isLogged) {
      const isAlreadyInBox = box.find(item => item.id === product.id);
      dispatch(createBasket(product));
      setShowAlert(!isAlreadyInBox);
    } else {
      alert('Please login first.');
      setShowSecAlert(true);
    }
  };
 






  return (
    <div className={styles.main}>
      <Flex direction="column" justify="space-between">
        <Box>< FixedTop /></Box>
         <Box>

        <Flex direction="row" mt="120px">
          <Flex direction="row" wrap="wrap" justify="center" gap="2" p="5" width={["90%", "80%"]}>
            <Flex direction="column">
              <Box w="full" justifyItems="center" justifySelf="center" justifyContent="center">
                <Box boxShadow="md" borderRadius="lg" height="auto" maxH="550px" bg="inherit" w="650px" mb="50px" border="4px" borderColor="#bdac91">
                  <Box borderBottom="1px" borderColor="blackAlpha.700">
                    <Image src={product.image} alt={product.imageAlt[locale]} w="100%" h="300px" objectFit="contain" objectPosition="top" />
                  </Box>

                  <Flex flexDirection="row"textAlign="center" wrap="nowrap"  mt="13px" w="full">
                   
                   <Box  justifySelf="center" w="full" ml="60px">
                    <Heading fontSize="18px" fontWeight="bold"  textDecoration="underline" textDecorationColor="#47443e" textDecorationThickness="from-font" color="#47443e">
                      {product.title[locale]}
                    </Heading>
                    </Box>
                    <Box justifySelf="right" w="90px" mr="24px">
                     <Text  fontSize="15px" color="#7d7365" fontWeight="medium" >{product.fav} FAV</Text>
                     </Box>
              
                  </Flex>

                  <Flex  flexDirection="row" mt="2px" wrap="nowrap" justifyContent="space-evenly" borderBottom="1px" pb="15px" borderColor="#66625d">
                    <Button size="xs" 
                      bg={findBasketItem ? '#6d7362' : '#e8e3c8'}
                      fontWeight="medium"
                      onClick={handleClick}
                      _hover={{ bg: "softNav2.300" }}>
                      {findBasketItem ? messages[locale].throwBasket : messages[locale].addBasket}
                    </Button>
                    <Button size="sm" color={isFav ? "pink" : "red"}  
                    onClick={() => dispatch(favButton({ product }))}
                    variant="ghost"
                    _hover={{bg:"none"}}
                    > <FontAwesomeIcon icon={faHeart} color={isFav ? "pink" : "red"} size='lg'/></Button>
                  </Flex>

                  <Flex flexDirection="row" justifyContent="space-between" mt="10px" pb="50px">
                    <Box width="190px" ml="15px">
                      <Heading fontSize="14px" color="#696157"> {messages[locale].productinfos} </Heading>
                      {!showAll && (
                        <Text fontSize="12px" color="#544d42">
                          <Button onClick={showDesc} variant="ghost" fontSize="13px" fontWeight="medium" _hover={{ bg: "none" }} color="#635c52">
                            {lessInfo}{showAll ? "daha az" : "..daha fazla"}
                          </Button>
                        </Text>
                      )}

                      {showAll && (
                        <MotionBox
                          bg="#f5f2ed"
                          w="310px"
                          h="full"
                          zIndex="999px"
                          border="1px"
                          borderColor="#9aab96"
                          boxShadow="lg"
                          rounded="10px"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Flex flexDirection="column" fontFamily="monospace" p="3px">
                            <Box h="10px">
                              <Flex flexDirection="row" justifyContent="space-between" pl="6px">
                                <Box display="flex" gap="5px" mt="5px">
                                  <Text fontSize="13px" color="#544d42">Tip:</Text>
                                  <Text fontSize="12px" color="#544d42"fontWeight="bold">{info.type}</Text>
                                  <Text fontSize="13px" color="#544d42">Renk:</Text>
                                  <Text fontSize="12px" color="#544d42" fontWeight="bold">{info.color}</Text>
                                </Box>
                                <Box>
                                  <Button size="xs" rounded="10px" variant="ghost" onClick={showDesc}>
                                    <FontAwesomeIcon icon={faClose} />
                                  </Button>
                                </Box>
                              </Flex>
                            </Box>
                            <Divider borderColor="#c9c3b5" w="full" mb="2" />
                            <Box h="10px">
                            <Flex flexDirection="row" gap="5px" pl="6px">
                              <Text fontSize="13px" color="#544d42">Materyal:</Text>
                              <Text fontSize="12px" color="#544d42"fontWeight="bold">{info.material}</Text>
                              <Text fontSize="13px" color="#544d42">Stok:</Text>
                              <Text fontSize="12px" color="#544d42" fontWeight="bold">{info.stockTotal}</Text>
                            </Flex>
                            </Box>
                            <Divider borderColor="#c9c3b5" w="full"  mb="2" />
                            <Box h="10px">
                            <Flex flexDirection="row" gap="5px" pl="6px">
                              <Text fontSize="13px" color="#544d42">Stil:</Text>
                              <Text fontSize="12px" color="#544d42"fontWeight="bold">{info.style}</Text>
                              <Text fontSize="13px" color="#544d42">Genişlik:</Text>
                              <Text fontSize="12px"color="#544d42" fontWeight="bold">{info.wideness}</Text>
                            </Flex>
                            </Box>
                          </Flex>
                        </MotionBox>
                      )}
                    </Box>

                    <Box width="190px" mb="20px">
                      <Text fontSize="14px" textDecoration="underline" fontWeight="medium" color="#696157">{messages[locale].productsize}</Text>
                      <Select width="160px" height="27px" placeholder='seçiniz' size="sm" variant="outline" outlineColor="#ab9e8a">
                        <option value="medium">medium</option>
                        <option value="small">small</option>
                        <option value="large">large</option>
                        <option value="xl">xl</option>
                        <option value="xs">xs</option>
                      </Select>
                    </Box>
                  </Flex>

                  {showAlert && (
                    <Alert status="success" size="sm">
                      <AlertIcon />
                      <AlertTitle>{messages[locale].alertsuccT}</AlertTitle>
                      <AlertDescription>{messages[locale].alertsuccD}</AlertDescription>
                    </Alert>
                  )}

                  {showSecAlert && (
                    <Alert status="warning">
                      <AlertIcon />
                      <AlertTitle>{messages[locale].alerterrT}</AlertTitle>
                      <AlertDescription>{messages[locale].alerterrD}</AlertDescription>
                    </Alert>
                  )}
                </Box>
              </Box>

              <Flex direction="column" mt="10px" w="1220px" bg="#faf8f2" height="auto" borderLeft="1px" borderTop="1px" borderBottom="1px" borderColor="#e3dac8" pb="100px" justifyContent="center">
                <Box w="full" justifyContent="center" justifyItems="center" justifySelf="center">
                  <Box mt="30px" w="1100px" bg="#f5f2e6" border="1px" borderRadius="12px" borderColor="#ebe6d3" pt="20px" pl="30px">
                    <Heading fontSize="17px" color="#3b3a37" fontWeight="light" textDecoration="underline" textDecorationThickness="from-font" textDecorationColor="#45433e">
                      {messages[locale].quesAns}
                    </Heading>
                    <Questions product={product} />
                    <Divider borderColor="#d1ccba" mt="3" />
                    <Box mt="20px">
                      <Heading fontSize="17px" color="#3b3a37" fontWeight="light" textDecoration="underline" textDecorationThickness="from-font" textDecorationColor="#45433e">
                        {messages[locale].commT}
                      </Heading>
                      <PhotoComments product={product} />
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </Flex>

          <Flex width={["20%", "20%"]} borderLeft="1px" borderColor="#e8e4d3">
            <Flex direction="column" textAlign="center" h="auto" width="full" bg="inherit">
              <Box textAlign="center" justifyContent="center" alignItems="center" borderBottom="1px" borderColor="#dbd6c5">
                <Heading color="#524f48" size="sm" fontFamily="revert-layer" pt="2">
                  {messages[locale].lookat}
                </Heading>
              </Box>
              <Box w="full" textAlign="center" justifyContent="center">
                <SimilarProductsCard product={product} locale={locale} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
        </Box>
        <Box as='footer'>
          <Footer />
        </Box>
      </Flex>
    </div>
  );
}

export default ProductDetail;
