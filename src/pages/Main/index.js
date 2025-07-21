import { useState } from 'react'
import ProductNav from '../../components/ProductNav'
import {Box, Flex , Grid, Button, } from '@chakra-ui/react'
import Collapses from '../../components/Collapses'
import MainPageSlide from '../../components/MainPageSlide'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useSelector  } from 'react-redux'
import { sortProducts } from '../../Functions/Array'
import Card from '../../components/Card'
import ProdNavList from '../../components/ProdNavList';
import { useLang } from '../../Contexts/LanguageContext'
import FilterProd from '../../components/FilterProd';
import { useProductsContext } from '../../Contexts/ProductsContext'


function Main() {
  const {messages} = useLang();
  const [ productPage , setProductPage] = useState(2);
  const {locale , products} = useProductsContext();
  const {filteredValues , filteredProduct , menu} = useSelector(state=> state.shop)
  const filterProducts = menu.filterProducts;
  const filterList = menu.filterList;
  let displayedProducts;

  if (filteredValues.length > 0) {
    displayedProducts = filteredProduct;
  } else {
    displayedProducts = Object.values(products); 
  } 
  let item
  if (filterProducts && filterList)  {
    item = 3
  }

  if (!filterProducts && !filterList) {
    item = 5
  }
  if (!filterProducts && filterList)  {
    item = 4
  }
  if (filterProducts && !filterList)  {
    item = 4
  }
  const isLongerThanPage = displayedProducts.length > 12 ;
  const sortProduct = sortProducts(displayedProducts, item);
  const sliceProducts = sortProduct.slice(0, productPage)
  const sortingAll = isLongerThanPage ?  sliceProducts : sortProduct;
  const showMoreProduct = () => {
    setProductPage((prev) => prev+1);
  }
  return (
    <>
    <Flex  direction="column">
       <Box zIndex="1000">
          <Navbar/>
        </Box>
        <Box > 
      <Flex flexDirection="row">
         <Box w={["45%" , "20%"]} mt="50px" zIndex="999">
          <MainPageSlide/>
        </Box>
        <Box w={["55%" , "100%"]} justifyItems="right">
          <ProductNav/>
        </Box>
        </Flex>
        </Box>
        <Box mt="100px" > 
    <Flex direction="row" wrap="nowrap" >
     <Box  width={["25%", "20%"]}>
      
     </Box>
     <Box  width={["50%", "60%"]}>
     <Collapses/>
     </Box>
       <Box  width={["50%", "20%"]}>
    
     </Box>
     </Flex>
     </Box>
     <Box mt="50px" borderTop="1px" borderColor="#a8a691" bg="#f5f0e4" >
    <Flex direction="row"  pt="50px">
        <Box width={["70%", "30%"]}>
        <ProdNavList />
        </Box>
        <Box  width={["40%", "100%"]} border="1px" borderColor="#d9d1b8">
          <Flex direction="column" bg="#faf8f5">
      <Flex direction="row" wrap="wrap" justify="center" mt="10px" width={["50%", "100%"]} >
         {sortingAll.map((group, index) => (      
                                    <Grid
                                      key={index}
                                      templateColumns={`repeat(${item}, 1fr)`}
                                      gap={filterList && filterProducts ? "25px" :"3px"}
                                      p="10px"
                                      
                                     
                                    >
                                      
                                      {group.map((product) => (
                <Card key={product.id} product={product} locale={locale} />
              ))}
              </Grid>
              ))}
      </Flex>
      </Flex>
      {isLongerThanPage && (
       
        <Flex w="full" justifyContent="right"  bg="#faf8f5">
          <Box  w="auto"justifyItems="right" p="10px">
            <Button size="md" onClick={showMoreProduct} variant="ghost" color="#706a5c" _hover={{bg:"inherit" , textDecoration:"underline"}}>
            {messages[locale].showMore}
            </Button>
          </Box>
        </Flex>
        
      )}
      </Box>
  
      <Box  width={["40%", "33%"]}>
        <FilterProd/>
        </Box>
        </Flex>
       
  
     </Box>
      
      <Box mt="45px"> 
        <Footer/>
      </Box>
    
     </Flex>
     
  

  
   
   
    </>
  )
}

export default Main