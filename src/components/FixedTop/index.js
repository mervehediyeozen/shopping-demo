import React from 'react'
import Navbar from '../Navbar'
import ProductNav from '../ProductNav'
import { Flex , Box } from '@chakra-ui/react'


function FixedTop() {

  return (

    <Flex direction="column">
    <Box>
        <ProductNav/>
        </Box>
        <Box zIndex="999">
          <Navbar/>
          </Box>

    </Flex>
    
  )
}

export default FixedTop