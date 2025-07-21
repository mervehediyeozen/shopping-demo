import {Flex , Button , Box ,HStack , Heading , Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon , Checkbox , Stack, Center} from '@chakra-ui/react' 
import styles from './styles.module.css'
import { useLang } from '../../Contexts/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { filterProducts, toggleAllMenu} from '../../redux/shopSlice';
import { useProductsContext } from '../../Contexts/ProductsContext';
import backgroundImage from '../../images/back70.jpg';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function FilterProd() {
    const location = useLocation();
    const isMainPage= location.pathname === ("/Main")
    const {messages, locale} = useLang ();
    const dispatch= useDispatch();
    const { filteredValues , menu}= useSelector(state => state.shop);
    const isMenuOpen = menu.filterList;
    const {products} = useProductsContext();
    const productValues = Object.values(products).map((productKey) => {
              const product = productKey;
              return product
            })
    const openFilterList = (name) => {
        dispatch(toggleAllMenu(name))
    };

    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(filterProducts({value , productValues}));
      };
    
  return (
    <>
    <Flex textAlign="right" w={isMenuOpen ? "100%" : "50px" } justifySelf={isMenuOpen? "" : "end"} direction="column" h={isMenuOpen ? "full" : "full" } >
  
        
         
        {!isMenuOpen && (
          <>
          <Button onClick={() => openFilterList("filterList")} h="420px" rounded="none" bg={isMainPage ? "inherit" :"#a8a08c"} _hover={{bg:"#736e62"}}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          </>
        )}
    <Box style={{
              backgroundImage:
                "inherit",
              
              backgroundSize: "cover", 
              backgroundRepeat: "no-repeat"
            }}> 
        {isMenuOpen && (
          <>
           <Button  size="sm"  variant="solid"  w="full" borderColor="black"  p="5px" rounded="none" onClick={() => openFilterList("filterList")} color="blackAlpha.800" _hover={{bg:"#e0d9c8"}}bg="inherit"> {messages[locale].filterT} 
          <FontAwesomeIcon icon={faSliders} style={{ cursor: 'pointer', marginLeft: '10px' }} />
          </Button>
        
            
            <ul className={styles.menuList}>
                <li>

                <Accordion allowToggle>
              <AccordionItem borderBottom="1px" borderTop="0px">
                  <AccordionButton >

                    <Box flex="1" textAlign="left" fontSize="15">
                    {messages[locale].filterI1}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px" >
                <Center>
                <Heading size="xs">{messages[locale].filterIT1}</Heading>
                </Center>
      <Stack direction="row">
  
        <Checkbox
          value="xs"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("xs")}
        >
          xs
        </Checkbox>
        <Checkbox
          value="s"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("s")}
        >
          s
        </Checkbox>
        <Checkbox
          value="m"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("m")}
        >
          m
        </Checkbox>
        <Checkbox
          value="l"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("l")}
        >
          l
        </Checkbox>
        </Stack>
        <Stack direction="row">
        
        <Checkbox
          value="xl"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("xl")}
        >
          xl
        </Checkbox>
        <Checkbox
          value="xxl"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("xxl")}
        >
          xxl
        </Checkbox>
        <Checkbox
          value="2xl"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("2xl")}
        >
          2xl
        </Checkbox>

      </Stack>
                </AccordionPanel>

                <AccordionPanel pb={4} fontSize="12" borderBottom="1px" >
                <Center>
                <Heading size="xs">{messages[locale].filterIT3}</Heading>
                </Center>
      <Stack direction="row">
      
        <Checkbox
          value="tight"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("tight")}
        >
          tight
        </Checkbox>
        <Checkbox
          value="wide"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("wide")}
        >
          wide
        </Checkbox>
        </Stack>
        <Stack direction="row">
        <Checkbox
          value="normal"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("normal")}
        >
          normal
        </Checkbox>
        </Stack>
                </AccordionPanel>
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px" >
                <Center>
                <Heading size="xs">{messages[locale].filterIT2}</Heading>
                </Center>
      <Stack direction="row">
        <Checkbox
          value="midi"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("mini")}
        >
          mini
        </Checkbox>
        <Checkbox
          value="midi"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("midi")}
        >
          midi
        </Checkbox>
        </Stack>
        <Stack direction="row">
        <Checkbox
          value="long"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("long")}
        >
          long
        </Checkbox>
        <Checkbox
          value="vlong"
          size="sm"
          borderColor="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("vlong")}
        >
          very long
        </Checkbox>
        </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
                </li>
                <li>
                <Accordion allowToggle>
              <AccordionItem borderBottom="1px" borderTop="0px">
                  <AccordionButton >
                    <Box flex="1" textAlign="left" fontSize="15">
                    {messages[locale].filterI2}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                
                <AccordionPanel pb={4} fontSize="12" borderBottom="1px" >
                
      <HStack direction="row" mr="35px" >
        <Box mr="5px">
        <Checkbox
          value="white"
          onChange={handleChange}
          isChecked={filteredValues.includes("white")}
          sx={{
            padding: 0,
            width: "15px", 
            height: "15px", 
            backgroundColor: "white", 
            _checked: {
                border: "2px solid black", 
              },
              _focus: {
                boxShadow: "none", 
              },
          
          }}>
             
             {messages[locale].filterIO1}
        </Checkbox>
        </Box>
        <Box ml="45px">
        <Checkbox
          value="black"
          onChange={handleChange}
          isChecked={filteredValues.includes("black")}
          sx={{
            padding: 0,
            width: "15px", 
            height: "15px", 
            backgroundColor: "black", 
            _checked: {
                border: "2px solid black", 
              },
              _focus: {
                boxShadow: "none", 
              },
          
          }}>
             
             {messages[locale].filterIO2}
        </Checkbox>
        </Box>
        <Box ml="43px">
        <Checkbox
          value="beige"
          onChange={handleChange}
          isChecked={filteredValues.includes("beige")}
          sx={{
            padding: 0,
            width: "15px", 
            height: "15px", 
            backgroundColor: "beige", 
            _checked: {
                border: "2px solid black", 
              },
              _focus: {
                boxShadow: "none", 
              },
          
          }}>
             
             {messages[locale].filterIO3}
        </Checkbox>
        </Box>
        
       </HStack>
       <HStack direction="row" mr="35px" >
        <Box mr="5px">
        <Checkbox
          value="red"
          onChange={handleChange}
          isChecked={filteredValues.includes("red")}
          sx={{
            padding: 0,
            width: "15px", 
            height: "15px",
            backgroundColor: "red", 
            _checked: {
                border: "2px solid black", 
              },
              _focus: {
                boxShadow: "none", 
              },
          
          }}>
             
        {messages[locale].filterIO4}
        </Checkbox>
        </Box>
        <Box ml="44px">
        <Checkbox
          value="yellow"
          onChange={handleChange}
          isChecked={filteredValues.includes("yellow")}
          sx={{
            padding: 0,
            width: "15px", 
            height: "15px", 
            backgroundColor: "yellow", 
            _checked: {
                border: "2px solid black", 
              },
              _focus: {
                boxShadow: "none", 
              },
          
          }}>
             
             {messages[locale].filterIO5}
        </Checkbox>
        </Box>
        <Box ml="53px">
        <Checkbox
          value="blue"
          onChange={handleChange}
          isChecked={filteredValues.includes("blue")}
          sx={{
            padding: 0,
            width: "15px", 
            height: "15px", 
            backgroundColor: "blue", 
            _checked: {
                border: "2px solid black", 
              },
              _focus: {
                boxShadow: "none", 
              },
          
          }}>
             
             {messages[locale].filterIO6}
        </Checkbox>
        </Box>
       </HStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
    </li>
    <li>
               <Accordion allowToggle>
              <AccordionItem borderBottom="1px" borderTop="0px">
                  <AccordionButton >

                    <Box flex="1" textAlign="left" fontSize="15">
                    {messages[locale].filterI3}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                
                <AccordionPanel pb={4} fontSize="9" borderBottom="1px" >
                
      <Flex direction="row" >
        
        <Checkbox
          mr="42px"
          border="black"
          value="vcheap"
          size="sm"
          onChange={handleChange}
          isChecked={filteredValues.includes("vcheap")}
          >
             
        0-100
        </Checkbox>
        
        
        <Checkbox
          border="black"
          value="cheap"
          size="sm"
           
          onChange={handleChange}
          isChecked={filteredValues.includes("cheap")}>
             
       100-250
        </Checkbox>
        </Flex>
      
        <Flex direction="row"  >
        <Checkbox
         mr="27px"
         border="black"
          value="normall"
          size="sm"
          onChange={handleChange}
          isChecked={filteredValues.includes("normall")}
       >
        250-500
        </Checkbox>
        
        
     
       <Stack direction="row"  >
        
        <Checkbox
          border="black"
          value="exp"
          size="sm"
          onChange={handleChange}
          isChecked={filteredValues.includes("exp")}
          
          >
             
        500-750
        </Checkbox>
        </Stack>
        </Flex>
       
        <Flex direction="row"  >
        <Checkbox
          mr="20px"
          border="black"
          value="vrexp"
          size="sm"
          onChange={handleChange}
          isChecked={filteredValues.includes("vrexp")}
         >
             
       750-1000
        </Checkbox>
       
        
        <Checkbox
        border="black"
          value="vvexp"
          size="sm"
          onChange={handleChange}
          isChecked={filteredValues.includes("vvexp")}>
             
        1000+
        </Checkbox>
       
        
       </Flex>
       
                </AccordionPanel>
                
              </AccordionItem>
            </Accordion>

                </li>
                <li>

<Accordion allowToggle>
<AccordionItem borderBottom="1px" borderTop="0px">
  <AccordionButton >

    <Box flex="1" textAlign="left" fontSize="15">
Tarz
    </Box>
    <AccordionIcon />
  </AccordionButton>

<AccordionPanel pb={4} fontSize="12" borderBottom="1px" >
<Stack direction="row">
<Checkbox
value="Casual"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Casual")}
>
Casual
</Checkbox>
<Checkbox
value="Party"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Party")}
>
Party
</Checkbox>
</Stack>
<Stack direction="row" >
<Checkbox
value="Bohem"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Bohem")}
>
Bohem
</Checkbox>

<Checkbox
value="Şık"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Şık")}
>
Şık
</Checkbox>
<Checkbox
value="Spor"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Spor")}
>
Spor
</Checkbox>
</Stack>
</AccordionPanel>
</AccordionItem>
</Accordion>
</li>
<li>

<Accordion allowToggle>
<AccordionItem borderBottom="1px" borderTop="0px">
  <AccordionButton >

    <Box flex="1" textAlign="left" fontSize="15">
   Marka
    </Box>
    <AccordionIcon />
  </AccordionButton>

<AccordionPanel pb={4} fontSize="12" borderBottom="1px" >
<Stack direction="row">
<Checkbox
value="Koton"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Koton")}
>
Koton
</Checkbox>
<Checkbox
value="Mavi"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Mavi")}
>
Mavi
</Checkbox>
<Checkbox
value="Trendyolmila"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Trendyolmila")}
>
Trendyolmila
</Checkbox>
</Stack>
<Stack direction="row">
<Checkbox
value="Bershka"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Bershka")}
>
Bershka
</Checkbox>
<Checkbox
value="Stradivaus"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Stradivaus")}
>
Stradivaus
</Checkbox>
</Stack>
</AccordionPanel>
</AccordionItem>
</Accordion>
</li>
<li>

<Accordion allowToggle>
<AccordionItem borderBottom="1px" borderTop="0px">
  <AccordionButton >

    <Box flex="1" textAlign="left" fontSize="15">
Kumaş
    </Box>
    <AccordionIcon />
  </AccordionButton>

<AccordionPanel pb={4} fontSize="12" borderBottom="1px" >
<Stack direction="row">
<Checkbox
value="Pamuk"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("Pamuk")}
>
Pamuk
</Checkbox>
</Stack>

<Stack direction="row">

<Checkbox
value="İpek"
size="sm"
borderColor="black"
onChange={handleChange}
isChecked={filteredValues.includes("İpek")}
>
İpek
</Checkbox>
</Stack>
</AccordionPanel>
</AccordionItem>
</Accordion>
</li>
   </ul>
     </>
   )}
    </Box>
    </Flex>
    </>
  )
}

export default FilterProd