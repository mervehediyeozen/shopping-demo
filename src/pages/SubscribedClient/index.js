import { useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { Input, Button, Flex, FormControl, FormLabel, Heading, Box ,Text, } from '@chakra-ui/react';
import { useLang } from '../../Contexts/LanguageContext';
import { useDispatch , useSelector} from 'react-redux';
import { login , } from '../../redux/shopSlice';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import { validateForm } from './yup'; 
import styles from './styles.module.css';
import backgroundImage from '../../images/back10.jpg';
import Collapses from '../../components/Collapses'


function SubscribedClient() {
  const dispatch = useDispatch();
  const isLogged  = useSelector(state => state.shop.isLogged);
  const navigate = useNavigate();
  const { messages, locale } = useLang();
  const [alert , setAlert] = useState(false);
   useEffect(() => {
  if (isLogged) {
    navigate('/');
  }
}, [isLogged]);
  const initialValues = {
    name: '',
    password: ''
  };

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(login({ name: values.name, password: values.password }));
    if(!isLogged) 
    { setSubmitting(true);
      setAlert(true);
    }
    else {
    setSubmitting(false);
    navigate("/"); 
    }
  };

  return (
    <Flex  justifyContent="space-between" w="full" style={{ backgroundImage: `url(${backgroundImage})` ,  width:'full'}} className={styles.main} h="800px" direction="row" >
        <Box width={["10%" , "10%"]}  >
        
        </Box>
      <Box width={["10%" , "30%"]} mt="50px"  >
        <Collapses/>
      </Box>
      <Box pt="10" maxWidth="520px" bg="#f7f6f2"  borderRadius="15px" border="1px" borderColor="#cfc8b6" height="600px" mt="30px"  width={["80%" , "60%"]} mr="70px"  >
        <Box textAlign="center" mt="90px"> 
          <Heading mb="2px" size="lg" pb="2px" fontWeight="light" color="#666259" >
            {messages[locale].SignIn}
          </Heading>
        </Box>

        <Flex  flexDirection="column" justifyContent="center">
          <Box justifyItems="center">
          <Formik
            initialValues={initialValues}
            validateOnBlur={false} // Hata kontrolü sadece submit sırasında yapılsın
            validateOnChange={false} // Form her değiştiğinde validasyonu tetiklemesin
            validationSchema={validateForm} // Yup validation fonksiyonunu burada çağırıyoruz
            onSubmit={onSubmit}
          >
            {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
              <Form>
    
                <FormControl mt="35px" isInvalid={errors.name && touched.name}  >
                  <FormLabel  textAlign="center" fontWeight="light" color="#666259" justifySelf="left">{messages[locale].yourname}</FormLabel>
                  <Input
                    borderBottom="1px"
                    borderTop="1px"
                    borderColor="#b5ae9c"
                    type="text"
                     width="240px"
                     
                    height="40px"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="name" component="div" style={{ color: 'black' }} />
                </FormControl>

                {/* Password Field */}
                <FormControl mt="25px" isInvalid={errors.password && touched.password} >
                  <FormLabel textAlign="center" fontWeight="light" color="#666259" justifySelf="left">{messages[locale].yourpass}</FormLabel>
                  <Input
                    borderBottom="1px"
                    borderTop="1px"
                    borderColor="#b5ae9c"
                    width="240px"
                    height="40px"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="xxxxxx"
                    _placeholder={{ color: "#a8a18f" }}
                  />
                  <ErrorMessage name="password" component="div" style={{ color: 'black' }} />
                </FormControl>
                <Flex flexDirection="row" justifyContent="center" mt="30px" gap="10px" >
         
                <Button
                  variant="solid"
                  type="submit"
                  fontWeight="light"
                  color="black"
                  bg="#ebe6da"
                  size="sm"
                  _hover={{ bg: "blackAlpha.800",  color:"white"}}
                  isLoading={isSubmitting} 
                >
                  {messages[locale].login}
                </Button>

                <Link to="/Signin">
                  <Button
                    variant="solid"
                     fontWeight="light"
                    color="black"
                    
                    bg="#ded8c8"
                    size="sm"
                    _hover={{ bg: "whiteAlpha.500",  color:"blackAlpha.800" }}
                  >
                    {messages[locale].createLog}
                  </Button>
                </Link>
                </Flex>
              </Form>
            )}
          </Formik>
          {alert && (
            <>
            <Box>
              <Text> Kullanıcı adınız veya şifreniz yanlış.</Text>
            </Box>
            </>
          )}
          </Box>
     </Flex>
      </Box>
      <Box width={["10%" , "15%"]}  >
        
      </Box>
    </Flex>
  );
}

export default SubscribedClient;
