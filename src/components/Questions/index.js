import { Flex , Box, Text,  Badge } from '@chakra-ui/react'

function Questions({product}) {

    const questions = Object.values(product.comments);
  
    
  return (
    

        <Flex  pb="20px"  borderRadius="xl"  mt="20px">
        
      <Flex wrap="wrap"  gap="10px" ml="20px"   mt="15px"> 
        {Object.values(questions).map((a, key) => {
           return (
          <Box
            key={key}
            width="160px"
            border="1px"
            borderColor="blackAlpha.200"
            borderRadius="5px"
            padding="7px"
            boxShadow="sm"
            height="auto"
            maxH="200px"
            bg="#f7f7f5"
            pb="5px"
          
          >
            {/* Müşterinin Sorusu */}
            <Box  borderBottom="1px" borderColor="#d1ccba">
              <Text  fontSize="10px" color="#3b3a37" fontWeight="medium" fontStyle="italic" >
             soru
              </Text>
              <Text fontSize="11px" mt="5px" fontWeight="light">{a.question}</Text>
            </Box>
            <Box mt="5px">
              <Text  fontSize="10px" color="#3b3a37" fontWeight="medium" fontStyle="italic">
             cevap
              </Text>
              <Text fontSize="11px" fontWeight="light" >{a.answer}</Text>
            </Box>
          </Box>
           )
    })}
      </Flex>
        </Flex>
   
  )
}

export default Questions