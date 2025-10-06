import React from 'react'
import Header from './component/header'
import EventDetails from './component/EventDetails'
import Schedule from './component/Schedule'
import Footer from './component/Footer'

function App() {
  return (
    <section>
      <Header/>
      <EventDetails/>
      <Schedule/>
      <Footer/>
    </section>
  )
}

export default App