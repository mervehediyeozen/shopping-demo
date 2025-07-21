import { Flex ,Button ,Box,  InputGroup  , InputRightElement , Input , Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { useState } from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import backgroundImage from '../../images/back23.jpg';
import backgroundImage2 from '../../images/back70.jpg';
import {useLang} from '../../Contexts/LanguageContext';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useProductsContext } from '../../Contexts/ProductsContext';
import { filterProducts , toggleAllMenu } from '../../redux/shopSlice';

function ProdNavList() {
  const location = useLocation();
  const dispatch= useDispatch();
  const {products} = useProductsContext();
 const productValues = Object.values(products)
    const menu = useSelector(state=> state.shop.menu);
    const search = menu.filterProducts;
    const {messages, locale} = useLang();
   const searchChange= (name) => {
    dispatch(toggleAllMenu(name))

   };
   const handleChange = (value) => {
    dispatch(filterProducts({value , productValues}));
   }
  const isMainPage = location.pathname.includes("/Main")

  return (
    <Flex className={styles.back} flexDirection="column" > 
     {!search && (
      <>
        <Button w="50px" h="400px"onClick={() => searchChange("filterProducts")} rounded="none" bg={isMainPage ? "inherit" :"#a8a08c"}  _hover={{bg:"#736e62"}} > <FontAwesomeIcon icon={faChevronRight} /> </Button>
     </>)}
      {search && (
        <>
        
     
    <Box  width="280px"  >
    
          <ul className={styles.menuList}    style={{
          backgroundImage: 
             "inherit",
            
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat"
        }}
       >
          <Button w="full" size="sm" onClick={() => searchChange("filterProducts")} fontSize="14px"  gap="7px"rounded="none" bg="inherit"  _hover={{bg:"#e0d9c8"}} > {messages[locale].sortingProducts} <FontAwesomeIcon icon={faChevronLeft} /></Button>
      
        
            <li>
            <Accordion allowToggle>
              <AccordionItem borderBottom="1px" borderTop="0px">
                  <AccordionButton >
                    <Box flex="1" textAlign="left" fontSize="14">
                    {messages[locale].navListS1}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px">
                  <Box  justifySelf="left">
                    <Button w="full" size="sm"variant="ghost" color="#524e48" _hover={{bg:"none" , color:"black"}}
                    onClick={() => handleChange("sweater")}>
                    {messages[locale].navListSI1}
                  </Button>
                  </Box>
                </AccordionPanel>
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px">
                  <Box  justifySelf="left">
                    <Button w="full" size="sm"variant="ghost" color="#524e48" _hover={{bg:"none" , color:"black"}}
                    onClick={() => handleChange("shirt")}>
                  {messages[locale].navListSI2}
                  </Button>
                  </Box>
                  
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion allowToggle>
              <AccordionItem borderBottom="1px" borderTop="0px">
               
                  <AccordionButton  >
                    <Box flex="1" textAlign="left" fontSize="14">
                    {messages[locale].navListS2}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
            
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px">
                 <Box  justifySelf="left">
                    <Button w="full" size="sm"variant="ghost" color="#524e48" _hover={{bg:"none" , color:"black"}}
                    onClick={() => handleChange("skirt")}>
                {messages[locale].navListSI3}
                 </Button>
                 </Box>
                </AccordionPanel>
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px">
                 <Box  justifySelf="left">
                    <Button w="full" size="sm"variant="ghost" color="#524e48" _hover={{bg:"none" , color:"black"}}
                    onClick={() => handleChange("pant")}>
                {messages[locale].navListSI4}
                </Button>
                 </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion allowToggle>
              <AccordionItem borderBottom="1px" borderTop="0px">
               
                  <AccordionButton >
                    <Box flex="1" textAlign="left" fontSize="14">
                    {messages[locale].navListS3}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
              
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px">
                 <Box  justifySelf="left">
                    <Button w="full" size="sm"variant="ghost" color="#524e48" _hover={{bg:"none" , color:"black"}}
                    onClick={() => handleChange("carpet")}>
                {messages[locale].navListSI5}
                </Button>
                  </Box>
                </AccordionPanel>
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px">
                <Box  justifySelf="left">
                    <Button w="full" size="sm"variant="ghost" color="#524e48" _hover={{bg:"none" , color:"black"}}
                    onClick={() => handleChange("cabinet")}>
                {messages[locale].navListSI6}
                </Button>
                </Box>
                </AccordionPanel>
              </AccordionItem >
            </Accordion>
          </li>
         
         
          <li>
            <Accordion allowToggle>
              <AccordionItem borderBottom="1px" borderTop="0px">
               
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize="14">
                    {messages[locale].navListS6}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px">
                <Box  justifySelf="left">
                    <Button w="full" size="sm"variant="ghost" color="#524e48" _hover={{bg:"none" , color:"black"}}
                    onClick={() => handleChange("ring")}>
                {messages[locale].navListSI11}
                </Button>
                 </Box>
                </AccordionPanel>
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px">
              <Box  justifySelf="left">
                    <Button w="full" size="sm"variant="ghost" color="#524e48" _hover={{bg:"none" , color:"black"}}
                    onClick={() => handleChange("necklace")}>
                {messages[locale].navListSI12}
                </Button>
                </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
   </Box>
        </>
      )}
     


    </Flex>
  )
}

export default ProdNavList