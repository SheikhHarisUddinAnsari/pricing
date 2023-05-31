"use client"

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import Header from './components/Header'
import Pricing from './components/Pricing'
import Features from './components/Features'

export default function page() {
  return (
    <ChakraProvider>
    <>
  
   <Header/>
  <Pricing/>
  <Features/> 
    </>
    </ChakraProvider>
  )
}

