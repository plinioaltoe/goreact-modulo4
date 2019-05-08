import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import Routes from '../src/routes'

import { Wrapper, Container, Content } from './styles/components'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
)

export default App
