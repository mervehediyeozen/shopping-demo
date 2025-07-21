import {useState  } from 'react'
import { Link, useNavigate , useLocation } from 'react-router-dom'
import styles from './styles.module.css'
import dene3 from '../../images/dene3.jpeg'
import { Center, Button , Image , Flex , Box, border, Divider,} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { useLang } from '../../Contexts/LanguageContext';
import { useSelector , useDispatch} from 'react-redux';
import { logout } from '../../redux/shopSlice';
import { faSignOut , faBox , faGlobe , faHeart } from '@fortawesome/free-solid-svg-icons';



function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.shop.isLogged);
  const navigate = useNavigate();
  const item = useSelector(state => state.shop.box);
  const favs = useSelector(state => state.shop.favProducts);
  const isFavProduct = favs.length >-1
  const [langMenu , setLangMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [leftMenuVisible, setLeftMenuVisible] = useState(false);
  const { messages, locale, changeLanguage } = useLang();
  

  const toggleLeftMenu = () => {
    setLeftMenuVisible(!leftMenuVisible);
  };
  const langMenuVisible = () => {
    setLangMenu(!langMenu);
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const loggedOut = () => {
   dispatch(logout(() => {
      navigate("/"); 
    }));
 }
   let borderClr , bg , btnBg , btnVariant
  if(location.pathname === ("/Communication")) {
    borderClr="#f5f1e9"
    bg="#f5f1e9"
    btnBg="#d1ccbe"
    btnVariant = "outline"
  }
  else if(location.pathname.startsWith("/products")) {
    borderClr="#f1efef"
    bg="#f1efef"
    btnBg="#d1ccbe"
    btnVariant = "outline"
  }
  else if(location.pathname === ("/Main")) {
    borderClr="#d9d2bd"
    bg="#f1efef"
    btnBg="#d1ccbe"
    btnVariant = "outline"
  }
  else if(location.pathname.startsWith("/favproducts")) {
    bg="#f1efef"
    borderClr="#f5f2eb"
    btnBg="#d1ccbe"
    btnVariant = "outline"
  }
   else if (location.pathname === ("/FavProducts")){
    bg="#f1efef"
    borderClr="#e3e0cf"
    btnBg="#d1ccbe"
    btnVariant = "outline"
   }
   else if (location.pathname === ("/Basket")){
    bg="#f5f3eb"
    borderClr="#a89f8d"
    btnBg="#d1ccbe"
    btnVariant = "outline"
   }
      else if (location.pathname === ("/Profile")){
    bg="#f2f0e9"
    borderClr="#e0dcce"
    btnBg="#f2f0e9"
    btnVariant = "ghost"
   

  }
  else if (location.pathname === ("/MostSellers")) {
    bg="#f1efef"
    borderClr="#c7c0ad"
    btnBg="#d1ccbe"
    btnVariant="outline"
  }
   else if (location.pathname === ("/AllCommentsPage")) {
    bg="#f1efef"
    borderClr="#c7c0ad"
    btnBg="#d1ccbe"
    btnVariant="outline"
  }
  else{
     
     bg="#f1efef"
     borderClr="black"
     btnBg="#d1ccbe"
     btnVariant = "outline"
  }
  
  return ( 
    
    <Flex className={styles.navbar} position="fixed" top="0px" zIndex="1" borderBottom="1px" borderColor={borderClr} bg={bg}>
      
      <div className={styles.left} >
        <ul>
          <li>
              <Link to="/Communication">
              <Button onClick={toggleLeftMenu} variant={btnVariant}  size="xs" bg={btnBg} color="black" _hover={{ bg: "softNav2.300" }}  >
              {messages[locale].AboutUs}
              </Button>
              </Link>

          </li>
          <li>
          <Button variant={btnVariant} bg={btnBg}color="black" _hover={{ bg: "softNav2.300" }}  size="xs"  >
            <Link to="/Products" >  {messages[locale].Products} </Link>
            </Button>
          </li>
           <li>
            
            <Button  bg={btnBg} color="black" _hover={{ bg: "softNav2.300" }}  variant={btnVariant} size="xs" onClick={langMenuVisible}>
              <FontAwesomeIcon icon={faGlobe}/>
              </Button>
                {langMenu && 
           
            <Flex position="absolute" mt="20px" w="150px" bg="white" borderRadius="5px"   flexDirection="column"
          border="1px"  borderColor="#ebe8d8">
            <Box justifyItems="center" w="full"  p="10px" >
              <Box>
                <Button  variant="ghost" color="#787566" size="xs" fontWeight="light" _hover={{bg:"inherit" , color:"#93ab7d"}}
              onClick={() => changeLanguage('tr')} >Turkish </Button>
              </Box>
              <Box width="85%" borderColor="#ebe8d8" >
                <Divider />
              </Box>
             <Box>
              <Button  variant="ghost" color="#787566" size="xs" fontWeight="light" _hover={{bg:"inherit" , color:"#93ab7d"}}
              onClick={() => changeLanguage('en')}> English </Button>
             </Box>
              <Box width="85%" borderColor="#ebe8d8" >
                <Divider />
              </Box>
              <Box>
                <Button   variant="ghost" color="#787566" size="xs" fontWeight="light" _hover={{bg:"inherit" , color:"#93ab7d"}}
              onClick={() => changeLanguage('fr')} > French </Button> 
              </Box>
               <Box width="85%" borderColor="#ebe8d8" >
                <Divider />
              </Box>
              <Box>
                <Button variant="ghost" color="#787566" size="xs" fontWeight="light" _hover={{bg:"inherit" , color:"#93ab7d"}}
               onClick={() => changeLanguage('es')} >Spanish </Button>
              </Box>
              
             
              </Box>
           </Flex>
            }
        </li>
       
        </ul>
      </div>
        <Center color="white"  size="100">
        <Link to="/Main">
        <Image src={dene3} alt="Center Image" style={{ width: "220px", height: "40px", }} />
        </Link>
        
        </Center >
      {/* Sağ kısmı */}
      <div className={styles.right}>
        <ul>
       
       
       
          <li>
          
          <Button variant={btnVariant}  size="xs"   bg={btnBg}color="black" _hover={{ bg: "softNav2.300" }}  onClick={toggleMenu}> 
          <FontAwesomeIcon icon={faBars} size='md' />
              </Button>
               {menuVisible && (
      <>
          <Flex position="absolute" mt="20px" w="165px" bg="white" borderRadius="5px"  justifyContent="center" flexDirection="column"
          border="1px"  borderColor="#ebe8d8">
            <Box justifyItems="center" w="full">
            <Box >
          <Link to="/Opportunities">
          <Button mt="15px" variant="ghost" color="#787566" size="xs" fontWeight="light" _hover={{bg:"inherit" , color:"#93ab7d"}} > {messages[locale].Opportunities}</Button>
          </Link>
          </Box>
          <Box w="full" justifyItems="center">
            <Divider width="85%" borderColor="#ebe8d8" />
          </Box>
          <Box >
          <Link to="/Basket">
          <Button variant="ghost" size="xs" color="#787566" fontWeight="light" _hover={{bg:"inherit" , color:"#93ab7d"}} >{messages[locale].Mybox}</Button>
          </Link>
          </Box>
          <Box w="full" justifyItems="center">
            <Divider width="85%" borderColor="#ebe8d8" />
          </Box>
          <Box >
          <Link to="/OrdersPage" >
          <Button variant="ghost" size="xs" color="#787566" fontWeight="light" _hover={{bg:"inherit" , color:"#93ab7d"}} >{messages[locale].myshopping}</Button>
          </Link>
          </Box>
          <Box  w="full" justifyItems="center">
            <Divider width="85%" borderColor="#ebe8d8" />
          </Box>
          <Box  >
          <Link to="/Communication">
          <Button variant="ghost" size="xs"  color="#787566"fontWeight="light" _hover={{bg:"inherit" , color:"#93ab7d"}} >{messages[locale].contact}</Button>
          </Link>
          </Box>
          <Box>
            <Divider width="85%" borderColor="#8c8b76" />
          </Box>
          </Box>
        </Flex>
      </>
     )}
          </li>
             
          {isLogged && (
  <>
   <li>
      {isFavProduct && (
        <Flex  justifyContent="center" >
          <Box justifyItems="center" justifySelf="center">
        <Link to="/FavProducts">
        <Button variant={btnVariant} size="xs"bg={btnBg}color="black" _hover={{ bg: "softNav2.300" }}  justify="center">
          <FontAwesomeIcon icon={faHeart}   /> 
        </Button>
        </Link>
        </Box>
        </Flex>
      )}
    </li>
    <li>
      {Array.isArray(item) && item.length > 0 && (
        <Link to="/Basket">
        <Button variant={btnVariant}  size="xs" bg={btnBg} color="black" _hover={{ bg: "softNav2.300" }}>
          <FontAwesomeIcon icon={faBox} style={{ marginRight: "6px" }} /> ({item.length})
        </Button>
        </Link>
      )}
    </li>
    <li>
      <Link to="/Profile">
      <Button variant={btnVariant}  size="xs" bg={btnBg} color="black" _hover={{ bg: "softNav2.300" }}>
        {messages[locale].prof}
      </Button>
      </Link>
    </li>
    <li>
      <Button variant={btnVariant}  size="xs" bg={btnBg}color="black" _hover={{ bg: "softNav2.300" }} onClick={loggedOut}>
        <FontAwesomeIcon icon={faSignOut} />
      </Button>
    </li>
  </>
)}
   {!isLogged && (
            
                <li>
                <Link to="/SubscribedClient">
                  <Button  bg="softNav2.100" color="black" _hover={{ bg: "softNav2.300" }}  variant={btnVariant} size="xs">{messages[locale].signin}
                  </Button>
                </Link>
              </li>
          )}
  
        </ul>
 
 
     
      </div>

    
      
    </Flex>
  )
}

export default Navbar;