import { useState } from 'react';
import { Box, Grid, Flex , Button } from '@chakra-ui/react';
import Card from '../../components/Card';
import ProdNavList from '../../components/ProdNavList';
import FilterProd from '../../components/FilterProd';
import { useProductsContext } from '../../Contexts/ProductsContext'; // Ürün verilerini almak için
import Footer from '../../components/Footer';
import { useLang } from '../../Contexts/LanguageContext';
import Company3 from '../../components/Company3';
import FixedTop from '../../components/FixedTop';
import { useSelector } from 'react-redux';
import { sortProducts } from '../../Functions/Array';


function Products() {
  const {messages} = useLang();
  const [ productPage , setProductPage] = useState(2);
  const { products, locale } = useProductsContext();
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
    <Flex  direction="column" bg="#f7f6f2" h="auto" >
      <Box mb="120px">
        <FixedTop/>
      </Box>
           
           <Box bg="#fcf9f2" borderBottom="2px"   pb="40px" pt="40px">
    <Flex direction="row"  >
        <Box width={["70%", "30%"]}>
        <ProdNavList />
        </Box>
        <Box  width={["40%", "100%"]} border="4px" borderColor="#595447"  bg="#6e685a">
          <Flex direction="column" >
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
             
              <Flex w="full" justifyContent="right" >
                <Box  w="auto"justifyItems="right" p="10px">
                  <Button size="sm" onClick={showMoreProduct} bg="#524d41" color="white" _hover={{bg:"inherit" , textDecoration:"underline"}}>
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
         <Box pt="50px" >
           <Company3/>
           </Box>
       <Box >
        <Footer/>
       </Box>
      </Flex>
 
     
  
  
    
  );
}

export default Products;

