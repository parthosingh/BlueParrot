import { useState } from 'react'
import { LandingPage} from './assets/components/LandingPage'
import { Content } from './assets/components/Content'
import { Form } from './assets/components/Form'
import { Pricing } from './assets/components/PricingTable'
import { Footer } from './assets/components/Footer'
import './App.css'

function App() {

  return (
    <>
    <LandingPage/>
    <Content/> 
    <Form/>
    <Pricing/>
    <Footer/>
    </>
  )
}

export default App
