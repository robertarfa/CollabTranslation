import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Prices from './pages/Prices'
import Services from './pages/Services'
import About from './pages/AboutUs'
import Associations from './pages/Associations'
import Terms from './pages/Terms'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Services} path="/Services" />
      <Route component={Prices} path="/Prices" />
      <Route component={About} path="/AboutUs" />
      <Route component={Associations} path="/Associations" />
      <Route component={Terms} path="/Terms" />
    </BrowserRouter>
  )
}

export default Routes
