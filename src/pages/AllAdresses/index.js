import  { useState } from 'react'
import { Flex , Box , Text, Heading, HStack , Button  ,  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalFooter, ModalBody, ModalCloseButton,
  useDisclosure} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import FixedTop from '../../components/FixedTop'
import { deleteAddress } from '../../redux/shopSlice';
import Company4 from '../../components/Company4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,  faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function AllAdresses() {
   const dispatch = useDispatch();
   const address = useSelector(state => state.shop.address);
    const [ edit , setEdit] = useState(false);
   const navigate = useNavigate();

    const [selectedIndex, setSelectedIndex] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
   const isEdit = () => {
    setEdit(!edit)
   }
  const handleDelete = () => {
    dispatch(deleteAddress(selectedIndex));
    onClose();
  };
    const goAddNew = () => 
    {navigate("/AdressPage")}
  return (
<>
        <FixedTop/>  

        <Flex direction="row" mt="120px" bg="#f7f5f2">
            <Box width={["20%" , "18%"]}>
            <Company4/>
            </Box>
            <Flex direction="column" width={["90%" , "90%"]}  mt="50px" ml="45px">
        <Box>
              <Heading size="lg" color="#33322f" textDecoration="underline"  ml="70px">
                Adresleriniz
            </Heading> 
        {address.length === 0 && (
  <Text>Kayıtlı adresiniz bulunmamaktadır.</Text>
)}
     <Flex maxWidth="760px"width="auto" height="auto" ml="40px" direction="column" mt="30px">
{address.length > 0 && (
  address.map((adr, index) => (
  
        <Flex  key={index} border="1px" borderColor="blackAlpha.700" p="5px" direction="row"   bg="#f2eee9"mb="20px">
        <Box mt="10px"  ml="10px" w="full" pb="15px">
      <Text fontSize="20px"  textDecor="underline">{adr.title}</Text>
      {!edit && ( 
         <Text fontSize="13px" ml="10px" > {adr.openAdress} ..</Text>
      )}
      
      {edit && (
        <>
         <HStack>
          <Text fontSize="14px"> Adres:</Text>
          <Text fontSize="13px"  > {adr.openAdress} </Text>
        </HStack>
        <HStack>
          <Text fontSize="14px"> Telefon:</Text>
        <Text fontSize="12px"> {adr.phone}</Text>
        </HStack>
        <HStack>
          <Text fontSize="14px"> No:</Text>
          <Text fontSize="12px"> {adr.no}</Text>
        </HStack>
        <HStack>
          <Text fontSize="14px"> İlçe</Text>
          <Text fontSize="12px"> {adr.town}</Text>
        </HStack>
  
        <Button  bg="inherit"  size="sm"   variant="ghost" textDecoration="underline"  borderRadius="20px" _hover={{bg:"blackAlpha.700" , color:"white"}} > Düzenle </Button>
        <Button   bg="inherit"   size="sm"  textDecoration="underline"   borderRadius="20px" _hover={{bg:"blackAlpha.700" , color:"white"}} onClick={() => {  setSelectedIndex(index);  onOpen();}} > Sil  </Button>
        </>
      )}
      </Box>
      <Box  width="full" >
      <HStack  textAlign="right" justifyContent="right" alignItems="right" mt="2px"> 
        <Button bg="inherit" borderRadius="20px" _hover={{bg:"blackAlpha.700" , color:"white"}} onClick={isEdit}>
        <FontAwesomeIcon icon={faAngleRight} size='xl'/>
        </Button>
        <Button bg="inherit"      borderRadius="20px" _hover={{bg:"blackAlpha.700" , color:"white"}}   onClick={() => {  setSelectedIndex(index);  onOpen();}}>
        <FontAwesomeIcon icon={faTrash} size='lg' />
        </Button>
      </HStack>
      </Box>
      </Flex>
   
  ))
)}
 <Box  textAlign="right" justifyContent="right">
 <Button  bg="inherit" _hover={{bg:"blackAlpha.800" , color:"beige"}} onClick={goAddNew}> Yeni adres ekle</Button> 
 </Box>
 </Flex>

        </Box>
        </Flex>
    
          
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adres Sil</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Bu adresi silmek istediğinize emin misiniz?</Text>
          </ModalBody>
          <ModalFooter>
            <Button  bg="beige" color="blackAlpha.800" _hover={{bg:"blackAlpha.800" , color:"beige"}} mr={3} onClick={onClose}>
              Vazgeç
            </Button>
            <Button bg="blackAlpha.800" color="beige" _hover={{bg:"beige" , color:"black"}} onClick={handleDelete}>
              Sil
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
     
       
        
        </Flex>
        </>
  )
}

export default AllAdresses