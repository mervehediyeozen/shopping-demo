import {useState} from 'react'
import { Flex , Box , Button , Text , FormControl , Input , FormLabel , Textarea, HStack, Heading} from '@chakra-ui/react';
import FixedTop from '../../components/FixedTop';
import { Formik , Form , ErrorMessage} from 'formik';
import { validationSchema } from './yup';
import Company4 from '../../components/Company4';
import { Link } from 'react-router-dom';
import { addAddress } from '../../redux/shopSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

function AdressPage() {
     const dispatch = useDispatch();
     const [ alert , setAlert] = useState(false);
     const initialValues = {
        title: '',
        openAdress: '',
        city: '',
        town: '',
        phone : '',
        no:'',

      };
      const onSubmit = (values) => {
        dispatch(addAddress({
          title: values.title,
          openAddress: values.openAddress,
          city: values.city,
          town: values.town,
          phone : values.phone,
          no: values.no,
        }));

        setAlert(true);
    
    }
  return (
   <>
   <Flex flexDirection="column">
   <FixedTop/>
     
   <Flex direction="row" width="full" mt="110px"  h="auto" bg="white">
       <Box width={["%20" , "%10"]}>
        <Company4/>
       </Box>
      <Box ml="150px" width={["%80" , "%90"]}  >
        <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema}>
         {({ handleBlur, handleChange, errors, values, touched }) => (
                     <Box  border="1px" p="50px" mt="35px" borderRadius="15px" borderColor="#c9c6af"   bg="whiteAlpha.800" >
                      <Form>
                        <Heading fontSize="32px" color="#545348" textDecoration="underline" fontWeight="medium" mt="10px" > Adres Oluştur</Heading>
                        <HStack gap="180px">
                        <FormControl mt="25px" isInvalid={errors.title && touched.title} >
                          <FormLabel color="#4d4b42"> Adres Başlığı</FormLabel>
                          <Input
                            variant="outline"
                            outlineColor="#a3a089"
                            h="32px" 
                            w="220px"
                            id="title"
                            type="text"
                            onBlur={handleBlur}
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                          />
                          <ErrorMessage name="title" component="div" style={{ color: 'black' }} />
                        </FormControl>
        
                      
                        <FormControl mt="25px" isInvalid={errors.city && touched.city} >
                          <FormLabel color="#4d4b42"> Şehir</FormLabel>
                          <Input
                            id="city"
                            outlineColor="#a3a089"
                            type="text"
                            onBlur={handleBlur}
                            name="city"
                            h="32px" 
                            w="220px"
                            value={values.city}
                            onChange={handleChange}
                          />
                          <ErrorMessage name="city" component="div" style={{ color: 'black' }} />
                        </FormControl>
                        </HStack>
                         <HStack gap="110px" >
                        <FormControl mt="25px" isInvalid={errors.openAddress && touched.openAddress} >
                          <FormLabel color="#4d4b42"> Tam Adres </FormLabel>
                          <Textarea
                            id="openAddress"
                            outlineColor="#a3a089"
                            type="text"
                            onBlur={handleBlur}
                            name="openAddress"
                            h="30px" 
                            w="290px"
                            value={values.openAddress}
                            onChange={handleChange}
                          />
                          <ErrorMessage name="openAdress" component="div" style={{ color: 'black' }} />
                        </FormControl>
                        <FormControl mt="25px" isInvalid={errors.town && touched.town} > 
                          <FormLabel color="#4d4b42"> İlçe </FormLabel>
                          <Input
                            id="town"
                            h="32px" 
                            outlineColor="#a3a089"
                            w="220px"
                            type="text"
                            onBlur={handleBlur}
                            name="town"
                            value={values.town}
                            onChange={handleChange}
                          
                          />
                          <ErrorMessage name="town" component="div" style={{ color: 'black' }} />
                        </FormControl>
                        </HStack>
                 
                         <HStack gap="180px">
                        <FormControl mt="25px" isInvalid={errors.phone && touched.phone} >
                          <FormLabel color="#4d4b42"> Telefon </FormLabel>
                          <Input
                            id="phone"
                            type="phone"
                            outlineColor="#a3a089" 
                            h="32px" 
                            w="220px"
                            name="phone"
                            onBlur={handleBlur}
                            value={values.phone}
                            placeholder="xxxxxxx"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="phone" component="div" style={{ color: 'black' }} />
                        </FormControl>

                        <FormControl mt="25px" isInvalid={errors.no && touched.no} >
                          <FormLabel color="#4d4b42"> No </FormLabel>
                          <Input
                            id="no"
                            type="number"
                            outlineColor="#a3a089" 
                            h="32px" 
                            w="220px"
                            name="no"
                            onBlur={handleBlur}
                            value={values.no}
                            onChange={handleChange}
                          />
                          <ErrorMessage name="no" component="div" style={{ color: 'black' }} />
                        </FormControl>
                        </HStack>
                        <Box  alignContent="right"
                          justifyContent="right" textAlign="right">
                        <Button
                          variant="outline"
                          mt="42px"
                          width="auto"
                          height="30px"
                          type="submit"
                          outlineColor="#a3a089"
                          color="blackAlpha.800"
                          _hover={{ bg: "softNav2.100"}}
                      
                        >
                            Kaydet 
                        </Button>
                        </Box>
                 
                        {alert && (
                                <Box bg="#fcfcfa" mt="20px" border="1px" borderColor="black" borderRadius="30px">
                          <Box  p="15px" color="#42413a"  >
                            <HStack  gap="20px">
                              <Box ml="10px">
                              <FontAwesomeIcon icon={faInfoCircle} size='xl' />
                              </Box>
                              <Box>
                                <HStack>
                            <Text fontSize="18px" mt="10px" fontFamily="revert">
                              Adresiniz eklendi. Görmek için 
                            </Text>
                            <Link to="/AllAdresses" color='blue'>  <Text mt="10px"fontSize="18px"fontFamily="revert" color="blue.600"> tıklayın. </Text></Link>
                            </HStack>
                            </Box>
                            </HStack>
                          </Box>
                          </Box>
                        )}
                       
                      </Form>
                      </Box>
                    )}
        </Formik>

  
        </Box>
        <Flex>
    </Flex>
   </Flex>
   <Box >
    <Footer/>

   </Box>
   </Flex>
   </>
   
   
  )
}

export default AdressPage