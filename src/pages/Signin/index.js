import { Input, Button, Flex, FormControl, FormLabel, Heading, Box, Center , Text } from '@chakra-ui/react';
import { useLang } from '../../Contexts/LanguageContext';
import { Formik, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { createLogin , login} from '../../redux/shopSlice';
import {useDispatch} from 'react-redux'
import { validationSchema } from './yup';
import { Link } from 'react-router-dom';

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const initialValues = {
    name: '',
    surname: '',
    email: '',
    password: ''
  };
  
  const { messages, locale } = useLang();
const onSubmit = (values, { setSubmitting }) => {
  const user = {
    name: values.name,
    surname: values.surname,
    email: values.email,
    password: values.password,
  };

  dispatch(createLogin(user));
  dispatch(login({ name: user.name, password: user.password }));

  setSubmitting(false);
  navigate('/SubscribedClient');
};

  return (
    <Flex  width="full" justifyContent="center" bg="#f0ebdf" h="800px" >
      <Box pt="10" maxWidth="50%" bg="#f7f6f2" ml="5" pl="10" pr="10" mt="20px" w="600px" h="600px" pb="10px" border="1px" borderRadius="7px" borderColor="#dbd9c8" >
        <Flex flexDirection="column">
        <Box textAlign="center">
          <Heading size="lg" pb="4px" fontWeight="light" color="#524f49"  borderColor="black">
          Kaydol          </Heading>
        </Box>

        <Box justifyItems="center">
          <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema} 
            initialValues={initialValues}
          >
            {({ handleBlur, handleChange, errors, values, touched, isSubmitting }) => (
              <Form>
                {/* Name Field */}
                <FormControl mt="25px" isInvalid={errors.name && touched.name} >
                  <FormLabel fontWeight="light">{messages[locale].Name}</FormLabel>
                  <Input
                    variant="outline"
                    outlineColor="#c9c2af"
                    h="32px" 
                    w="220px"
                    id="name"
                    type="text"
                    onBlur={handleBlur}
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="name" component="div" style={{ color: 'black' }} />
                </FormControl>

                {/* Surname Field */}
                <FormControl mt="25px" isInvalid={errors.surname && touched.surname}>
                  <FormLabel fontWeight="light" >{messages[locale].Surname}</FormLabel>
                  <Input
                    id="surname"
                    type="text"
                    onBlur={handleBlur}
                     outlineColor="#c9c2af"
                    name="surname"
                    h="32px" 
                    w="220px"
                    value={values.surname}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="surname" component="div" style={{ color: 'black' }} />
                </FormControl>

                {/* Email Field */}
                <FormControl mt="25px" isInvalid={errors.email && touched.email} > 
                  <FormLabel fontWeight="light">{messages[locale].email}</FormLabel>
                  <Input
                    id="email"
                    h="32px" 
                    w="220px"
                    outlineColor="#c9c2af"
                    type="email"
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="......@.....com"
                    _placeholder={{ color: "#a8a08" }}
                  />
                  <ErrorMessage name="email" component="div" style={{ color: 'black' }} />
                </FormControl>

                {/* Password Field */}
                <FormControl mt="25px" isInvalid={errors.password && touched.password}>
                  <FormLabel fontWeight="light">{messages[locale].Password}</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    h="32px" 
                    outlineColor="#c9c2af"
                    w="220px"
                    name="password"
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="xxxxxxx"
                    _placeholder={{ color: "#a8a08c" }}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="password" component="div" style={{ color: 'black' }} />
                </FormControl>
                <Flex  mt="30px" flexDirection="row" w="full" >
                <Box display="flex" justifyContent="center"gap="7px" ml="23px">
               
                <Button
                  variant="solid"
                  w="80px"
                  h="27px"
                  type="submit"
                  bg="#849179"
                  size="md"
                  color="white"
                  fontSize="14px"
                  fontWeight="normal"
                  _hover={{ bg: "#e6e3d1" , color:"#4d4c44"}}
                  isLoading={isSubmitting}
                >
                  {messages[locale].SignUp}
                </Button>
                <Box>
              <Link to="/SubscribedClient">
                <Button
                  variant="solid"
                  w="80px"
                  h="27px"
                  type="submit"
                  bg="#e6e3d1"
                  size="md"
                  fontSize="14px"
                  color="#4d4c44"
                  fontWeight="normal"
                  _hover={{ bg: "#849179" , color:"white"}}
                 
                >
                  {messages[locale].SignIn}
                </Button>
                </Link>
                <Box textAlign="right" mt="7px">
                <Text fontSize="12px"  fontWeight="light" color="#5c6652"> Hesabın var mı?</Text>
                </Box>
                </Box>
               </Box>
                </Flex>
               
                
               
              
              
                
              </Form>
            )}
          </Formik>
        </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Signin;
