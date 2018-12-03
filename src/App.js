import React, { Component } from 'react'
import NavBar from './components/Navbar'
import GlobalStyle from './global'
import ContentGrid from './components/ContentGrid'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <NavBar />
        <ContentGrid />
      </div>
    )
  }
}

export default App
