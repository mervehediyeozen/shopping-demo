import styles from './styles.module.css'
import indirim from '../../images/indirim.jpeg'
import indirim2 from '../../images/indirim2.jpg'
import indirim3 from '../../images/indirim3.jpg'
import { Link } from 'react-router-dom'
import { useLang } from '../../Contexts/LanguageContext';
import {Box, Flex, Heading ,HStack, Text, Image } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../../images/back70.jpg';
function Company2() {
  const {messages, locale} = useLang();

  return (

    <Flex direction="column">
        <Box className={styles.back} >
      <Box textAlign="center"   style={{ backgroundImage: `url(${backgroundImage})` }} height="40px" >
        <HStack textAlign="center" justifyContent="center" alignItems="center">
      <FontAwesomeIcon icon= {faHeart} color='black' size='xs'/>
        <Heading color="softNav2.500" size="sm" fontFamily="revert-layer" pt="2" >
          {messages[locale].whatsnew}
        </Heading>
        <FontAwesomeIcon icon= {faHeart} color='black' size='xs'/>
        </HStack>
      </Box>
      </Box>
     <Box className={styles.all} borderRight="1px" borderLeft="1px" borderColor="blackAlpha.600" >
     
        <Box className={styles.headCompany}>
        <Box> 
            <Image src={indirim}/>
    
        </Box>
        <Box className= {styles.pCompany}>
            <p>
                 
              <Link to= '/' ><Text fontSize="14px" fontWeight="normal" mt="4px" fontFamily="revert" >{messages[locale].company2T1} </Text> </Link>
            </p>
        </Box>
      
      </Box>
      <Box className={styles.headCompany}>
        <Box> 
            
            <Image src={indirim2}/>
    
        </Box>
        <Box className= {styles.pCompany}>
            <p>
              <Link to= '/' > {messages[locale].company2T2}</Link>
            </p>
        </Box>
        
      </Box>

      <Box className={styles.headCompany}>
        <Box> 
            
            <Image src={indirim3} />
    
        </Box>
        <Box className= {styles.pCompany} >
            <p>
                 
              <Link to= '/' > {messages[locale].company2T2}</Link>
            </p>
        </Box>
        
      </Box>

      </Box>
  
  

    
    </Flex>
  )
}

export default Company2