import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <section style={{ width: '100%', height: '100%' }}>
        <Navbar />
        <Header />
      </section>
    </GlobalProvider>
  )
}

export default App
