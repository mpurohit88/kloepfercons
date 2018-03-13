import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './components/Services'
import Property from './components/Property'

const App = () => (
  <div>
    {/* <Navigation /> */}
    <Header />
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/our-work" component={Property} />
    </Switch>

    <Footer />
  </div>
)

export default App