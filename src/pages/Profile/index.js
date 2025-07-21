import {Box ,  Flex} from '@chakra-ui/react'
import UserContent from '../../components/Userİnfo/UserContent'
import UserPhoto from '../../components/Userİnfo/UserPhoto'
import FixedTop from '../../components/FixedTop'
import Footer from '../../components/Footer'

function Profile() {

  return (
    <>
     <Flex direction="column"   bg="inherit"
    h="auto">
        <FixedTop/>
           <Flex direction="row" mt="120px">
      <Box width={["30%",  "23%"]}    borderBottom="2px" borderColor="#bab7a0">
      <UserPhoto/>
      </Box>
      <Box width={["60%",  "77%"]}  >
       <UserContent/>
      </Box>

      </Flex>
      <Box>
        <Footer/>
      </Box>
     </Flex>
   
     
      
   </>
  )
}


export default Profile