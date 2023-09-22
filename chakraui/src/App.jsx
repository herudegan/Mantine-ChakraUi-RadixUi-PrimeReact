import * as React from 'react'
import Page from './page'
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <ChakraProvider>
      <Page />
    </ChakraProvider>
  )
}