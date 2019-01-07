import React, { Component } from 'react'
import GlobalStyle from './global'

import ContentGrid from './components/ContentGrid'
import NavBar from './components/Navbar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div>
          <NavBar />
          <ContentGrid />
          <Footer />
        </div>
      </>
    )
  }
}

export default App
